import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as FiIcons from 'react-icons/fi'
import SafeIcon from '../../common/SafeIcon'
import { mediaUploader } from '../../utils/mediaUpload'

const { FiImage, FiVideo, FiTrash2, FiEye, FiEdit3, FiFilter, FiSearch, FiGrid, FiList } = FiIcons

const MediaGallery = ({ category = null, onSelectMedia = null, selectionMode = false }) => {
  const [media, setMedia] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [selectedItems, setSelectedItems] = useState(new Set())

  useEffect(() => {
    loadMedia()
  }, [category])

  const loadMedia = async () => {
    try {
      setLoading(true)
      const data = await mediaUploader.getMediaByCategory(category)
      setMedia(data)
    } catch (error) {
      console.error('Error loading media:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteMedia = async (fileId) => {
    if (!confirm('Are you sure you want to delete this file?')) return

    try {
      const result = await mediaUploader.deleteFile(fileId)
      if (result.success) {
        setMedia(prev => prev.filter(item => item.id !== fileId))
      } else {
        alert('Error deleting file: ' + result.error)
      }
    } catch (error) {
      alert('Error deleting file: ' + error.message)
    }
  }

  const filteredMedia = media.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.original_name.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesType = filterType === 'all' || 
                       (filterType === 'images' && item.mime_type.startsWith('image/')) ||
                       (filterType === 'videos' && item.mime_type.startsWith('video/'))
    
    return matchesSearch && matchesType
  })

  const toggleSelection = (itemId) => {
    const newSelection = new Set(selectedItems)
    if (newSelection.has(itemId)) {
      newSelection.delete(itemId)
    } else {
      newSelection.add(itemId)
    }
    setSelectedItems(newSelection)
    
    if (onSelectMedia) {
      const selectedMedia = media.filter(item => newSelection.has(item.id))
      onSelectMedia(selectedMedia)
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search media files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-2">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Files</option>
            <option value="images">Images Only</option>
            <option value="videos">Videos Only</option>
          </select>

          <button
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <SafeIcon icon={viewMode === 'grid' ? FiList : FiGrid} className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-gray-600 mb-4">
        Showing {filteredMedia.length} of {media.length} files
        {selectionMode && selectedItems.size > 0 && (
          <span className="ml-2 text-primary-600">
            ({selectedItems.size} selected)
          </span>
        )}
      </p>

      {/* Media Grid/List */}
      {filteredMedia.length === 0 ? (
        <div className="text-center py-12">
          <SafeIcon icon={FiImage} className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No media files found</p>
        </div>
      ) : (
        <div className={
          viewMode === 'grid' 
            ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'
            : 'space-y-3'
        }>
          <AnimatePresence>
            {filteredMedia.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`group relative bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all ${
                  selectionMode && selectedItems.has(item.id) ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  <>
                    {/* Grid View */}
                    <div className="aspect-square relative overflow-hidden">
                      {item.mime_type.startsWith('image/') ? (
                        <img
                          src={item.publicUrl}
                          alt={item.alt_text || item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <SafeIcon icon={FiVideo} className="w-8 h-8 text-gray-400" />
                        </div>
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                          <a
                            href={item.publicUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-full text-gray-700 hover:text-primary-600"
                          >
                            <SafeIcon icon={FiEye} className="w-4 h-4" />
                          </a>
                          
                          {!selectionMode && (
                            <button
                              onClick={() => deleteMedia(item.id)}
                              className="p-2 bg-white rounded-full text-gray-700 hover:text-red-600"
                            >
                              <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Selection Checkbox */}
                      {selectionMode && (
                        <button
                          onClick={() => toggleSelection(item.id)}
                          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white shadow flex items-center justify-center"
                        >
                          {selectedItems.has(item.id) && (
                            <SafeIcon icon={FiIcons.FiCheck} className="w-4 h-4 text-primary-600" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* File Info */}
                    <div className="p-3">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatFileSize(item.file_size)}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* List View */}
                    <div className="flex items-center p-4">
                      <div className="w-12 h-12 flex-shrink-0 mr-4 rounded overflow-hidden">
                        {item.mime_type.startsWith('image/') ? (
                          <img
                            src={item.publicUrl}
                            alt={item.alt_text || item.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <SafeIcon icon={FiVideo} className="w-6 h-6 text-gray-400" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.original_name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {formatFileSize(item.file_size)} • {formatDate(item.created_at)}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 ml-4">
                        <a
                          href={item.publicUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-primary-600"
                        >
                          <SafeIcon icon={FiEye} className="w-4 h-4" />
                        </a>
                        
                        {!selectionMode && (
                          <button
                            onClick={() => deleteMedia(item.id)}
                            className="p-2 text-gray-400 hover:text-red-600"
                          >
                            <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                          </button>
                        )}

                        {selectionMode && (
                          <button
                            onClick={() => toggleSelection(item.id)}
                            className="p-2 text-gray-400 hover:text-primary-600"
                          >
                            <SafeIcon 
                              icon={selectedItems.has(item.id) ? FiIcons.FiCheckSquare : FiIcons.FiSquare} 
                              className="w-4 h-4" 
                            />
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}

export default MediaGallery