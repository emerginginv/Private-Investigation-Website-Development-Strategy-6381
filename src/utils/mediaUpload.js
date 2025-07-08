import { supabase } from '../lib/supabase'

// File upload utility for images and videos
export class MediaUploader {
  constructor() {
    this.maxImageSize = 50 * 1024 * 1024 // 50MB for images
    this.maxVideoSize = 100 * 1024 * 1024 // 100MB for videos
    this.allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']
    this.allowedVideoTypes = ['video/mp4', 'video/webm', 'video/quicktime', 'video/avi']
  }

  // Validate file before upload
  validateFile(file) {
    const isImage = this.allowedImageTypes.includes(file.type)
    const isVideo = this.allowedVideoTypes.includes(file.type)
    
    if (!isImage && !isVideo) {
      throw new Error(`Unsupported file type: ${file.type}`)
    }

    const maxSize = isImage ? this.maxImageSize : this.maxVideoSize
    if (file.size > maxSize) {
      const maxSizeMB = maxSize / (1024 * 1024)
      throw new Error(`File size exceeds ${maxSizeMB}MB limit`)
    }

    return { isImage, isVideo }
  }

  // Generate unique filename
  generateFileName(originalName, category = 'general') {
    const timestamp = Date.now()
    const random = Math.random().toString(36).substring(2, 8)
    const extension = originalName.split('.').pop()
    const sanitizedName = originalName
      .replace(/\.[^/.]+$/, '') // Remove extension
      .replace(/[^a-zA-Z0-9]/g, '_') // Replace special chars
      .toLowerCase()
    
    return `${category}/${timestamp}_${random}_${sanitizedName}.${extension}`
  }

  // Upload file to Supabase Storage
  async uploadFile(file, options = {}) {
    try {
      // Validate file
      const { isImage, isVideo } = this.validateFile(file)
      
      // Determine bucket
      const bucket = isImage ? 'website-images' : 'website-videos'
      
      // Generate filename
      const fileName = this.generateFileName(file.name, options.category || 'general')
      
      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (error) {
        throw error
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(bucket)
        .getPublicUrl(fileName)

      // Save metadata to database
      const mediaRecord = await this.saveMediaRecord({
        filename: fileName,
        originalName: file.name,
        filePath: data.path,
        bucketName: bucket,
        fileSize: file.size,
        mimeType: file.type,
        publicUrl: urlData.publicUrl,
        altText: options.altText || '',
        title: options.title || file.name,
        description: options.description || '',
        category: options.category || 'general',
        isFeatured: options.isFeatured || false
      })

      return {
        success: true,
        data: {
          ...mediaRecord,
          publicUrl: urlData.publicUrl,
          fileName: fileName,
          bucket: bucket
        }
      }

    } catch (error) {
      console.error('Upload error:', error)
      return {
        success: false,
        error: error.message
      }
    }
  }

  // Save media record to database
  async saveMediaRecord(mediaData) {
    const { data, error } = await supabase
      .from('media_files_k8x2m9p4')
      .insert([{
        filename: mediaData.filename,
        original_name: mediaData.originalName,
        file_path: mediaData.filePath,
        bucket_name: mediaData.bucketName,
        file_size: mediaData.fileSize,
        mime_type: mediaData.mimeType,
        alt_text: mediaData.altText,
        title: mediaData.title,
        description: mediaData.description,
        category: mediaData.category,
        is_featured: mediaData.isFeatured
      }])
      .select()
      .single()

    if (error) {
      throw error
    }

    return data
  }

  // Get media files by category
  async getMediaByCategory(category = null, limit = 50) {
    let query = supabase
      .from('media_files_k8x2m9p4')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit)

    if (category) {
      query = query.eq('category', category)
    }

    const { data, error } = await query

    if (error) {
      throw error
    }

    return data.map(file => ({
      ...file,
      publicUrl: this.getPublicUrl(file.bucket_name, file.filename)
    }))
  }

  // Get featured media
  async getFeaturedMedia(limit = 10) {
    const { data, error } = await supabase
      .from('media_files_k8x2m9p4')
      .select('*')
      .eq('is_featured', true)
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) {
      throw error
    }

    return data.map(file => ({
      ...file,
      publicUrl: this.getPublicUrl(file.bucket_name, file.filename)
    }))
  }

  // Get public URL for a file
  getPublicUrl(bucket, fileName) {
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName)
    
    return data.publicUrl
  }

  // Delete file
  async deleteFile(fileId) {
    try {
      // Get file record
      const { data: fileRecord, error: fetchError } = await supabase
        .from('media_files_k8x2m9p4')
        .select('*')
        .eq('id', fileId)
        .single()

      if (fetchError || !fileRecord) {
        throw new Error('File record not found')
      }

      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from(fileRecord.bucket_name)
        .remove([fileRecord.filename])

      if (storageError) {
        throw storageError
      }

      // Delete from database
      const { error: dbError } = await supabase
        .from('media_files_k8x2m9p4')
        .delete()
        .eq('id', fileId)

      if (dbError) {
        throw dbError
      }

      return { success: true }

    } catch (error) {
      console.error('Delete error:', error)
      return {
        success: false,
        error: error.message
      }
    }
  }

  // Upload multiple files
  async uploadMultipleFiles(files, options = {}) {
    const results = []
    
    for (const file of files) {
      const result = await this.uploadFile(file, options)
      results.push(result)
    }

    return results
  }
}

// Export singleton instance
export const mediaUploader = new MediaUploader()
export default mediaUploader