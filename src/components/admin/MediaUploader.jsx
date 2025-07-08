import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as FiIcons from 'react-icons/fi'
import SafeIcon from '../../common/SafeIcon'
import { mediaUploader } from '../../utils/mediaUpload'

const { FiUpload, FiImage, FiVideo, FiX, FiCheck, FiAlertCircle, FiTrash2, FiEye } = FiIcons

const MediaUploader = ({ onUploadComplete, acceptedTypes = ['image', 'video'], category = 'general' }) => {
  const [uploadProgress, setUploadProgress] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState([])
  const fileInputRef = useRef(null)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files)
    handleFiles(files)
  }

  const handleFiles = async (files) => {
    const validFiles = files.filter(file => {
      const isImage = file.type.startsWith('image/')
      const isVideo = file.type.startsWith('video/')
      
      if (acceptedTypes.includes('image') && isImage) return true
      if (acceptedTypes.includes('video') && isVideo) return true
      
      return false
    })

    if (validFiles.length === 0) {
      alert('Please select valid image or video files')
      return
    }

    // Initialize progress tracking
    const initialProgress = validFiles.map((file, index) => ({
      id: `${Date.now()}_${index}`,
      name: file.name,
      progress: 0,
      status: 'uploading',
      file: file
    }))

    setUploadProgress(initialProgress)

    // Upload files
    for (let i = 0; i < validFiles.length; i++) {
      const file = validFiles[i]
      const progressId = initialProgress[i].id

      try {
        // Update progress
        setUploadProgress(prev => prev.map(p => 
          p.id === progressId ? { ...p, progress: 50 } : p
        ))

        const result = await mediaUploader.uploadFile(file, {
          category,
          title: file.name,
          altText: file.name
        })

        if (result.success) {
          setUploadProgress(prev => prev.map(p => 
            p.id === progressId 
              ? { ...p, progress: 100, status: 'completed', data: result.data }
              : p
          ))

          setUploadedFiles(prev => [...prev, result.data])
          
          if (onUploadComplete) {
            onUploadComplete(result.data)
          }
        } else {
          setUploadProgress(prev => prev.map(p => 
            p.id === progressId 
              ? { ...p, status: 'error', error: result.error }
              : p
          ))
        }
      } catch (error) {
        setUploadProgress(prev => prev.map(p => 
          p.id === progressId 
            ? { ...p, status: 'error', error: error.message }
            : p
        ))
      }
    }

    // Clear file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const clearProgress = () => {
    setUploadProgress([])
  }

  const removeProgressItem = (id) => {
    setUploadProgress(prev => prev.filter(p => p.id !== id))
  }

  const getFileIcon = (mimeType) => {
    if (mimeType?.startsWith('image/')) return FiImage
    if (mimeType?.startsWith('video/')) return FiVideo
    return FiUpload
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging 
            ? 'border-primary-500 bg-primary-50' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <SafeIcon icon={FiUpload} className="w-8 h-8 text-gray-500" />
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Upload Media Files
        </h3>
        
        <p className="text-gray-600 mb-4">
          Drag and drop files here, or click to select
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {acceptedTypes.includes('image') && (
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              Images (JPG, PNG, WebP, GIF, SVG)
            </span>
          )}
          {acceptedTypes.includes('video') && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
              Videos (MP4, WebM, QuickTime, AVI)
            </span>
          )}
        </div>

        <button
          onClick={() => fileInputRef.current?.click()}
          className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          Select Files
        </button>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileSelect}
          accept={`${acceptedTypes.includes('image') ? 'image/*' : ''}${acceptedTypes.includes('video') ? ',video/*' : ''}`}
          className="hidden"
        />
      </div>

      {/* Upload Progress */}
      <AnimatePresence>
        {uploadProgress.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6 bg-white border rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">Upload Progress</h4>
              <button
                onClick={clearProgress}
                className="text-gray-500 hover:text-gray-700"
              >
                <SafeIcon icon={FiX} className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {uploadProgress.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                    <SafeIcon 
                      icon={getFileIcon(item.file?.type)} 
                      className="w-5 h-5 text-gray-500" 
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {item.name}
                    </p>
                    
                    {item.status === 'uploading' && (
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    )}
                    
                    {item.status === 'completed' && (
                      <p className="text-sm text-green-600">Upload completed</p>
                    )}
                    
                    {item.status === 'error' && (
                      <p className="text-sm text-red-600">{item.error}</p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    {item.status === 'completed' && (
                      <>
                        <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                        {item.data?.publicUrl && (
                          <a
                            href={item.data.publicUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            <SafeIcon icon={FiEye} className="w-4 h-4" />
                          </a>
                        )}
                      </>
                    )}
                    
                    {item.status === 'error' && (
                      <SafeIcon icon={FiAlertCircle} className="w-5 h-5 text-red-500" />
                    )}

                    <button
                      onClick={() => removeProgressItem(item.id)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <SafeIcon icon={FiX} className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recently Uploaded */}
      {uploadedFiles.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 bg-white border rounded-lg p-4"
        >
          <h4 className="text-lg font-semibold mb-4">Recently Uploaded</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {uploadedFiles.slice(-6).map((file) => (
              <div key={file.id} className="relative group">
                {file.mime_type?.startsWith('image/') ? (
                  <img
                    src={file.publicUrl}
                    alt={file.alt_text || file.title}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                    <SafeIcon icon={FiVideo} className="w-8 h-8 text-gray-500" />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a
                    href={file.publicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                  >
                    <SafeIcon icon={FiEye} className="w-6 h-6" />
                  </a>
                </div>
                
                <p className="text-xs text-gray-600 mt-1 truncate">
                  {file.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default MediaUploader