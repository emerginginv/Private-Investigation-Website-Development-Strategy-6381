import React, { useState } from 'react'
import { motion } from 'framer-motion'
import * as FiIcons from 'react-icons/fi'
import SafeIcon from '../../common/SafeIcon'
import MediaUploader from '../../components/admin/MediaUploader'
import MediaGallery from '../../components/admin/MediaGallery'
import SEOHead from '../../components/common/SEOHead'

const { FiUpload, FiGrid, FiFolder, FiSettings } = FiIcons

const MediaManager = () => {
  const [activeTab, setActiveTab] = useState('upload')
  const [selectedCategory, setSelectedCategory] = useState('general')

  const categories = [
    { id: 'general', name: 'General', description: 'General website media' },
    { id: 'hero-images', name: 'Hero Images', description: 'Homepage and banner images' },
    { id: 'service-photos', name: 'Service Photos', description: 'Investigation service images' },
    { id: 'team-photos', name: 'Team Photos', description: 'Staff and team member photos' },
    { id: 'testimonials', name: 'Testimonials', description: 'Client testimonial media' },
    { id: 'case-studies', name: 'Case Studies', description: 'Investigation case study materials' },
    { id: 'blog-media', name: 'Blog Media', description: 'Blog post images and videos' },
    { id: 'legal-documents', name: 'Legal Documents', description: 'Legal and compliance files' }
  ]

  const tabs = [
    { id: 'upload', name: 'Upload', icon: FiUpload },
    { id: 'gallery', name: 'Gallery', icon: FiGrid },
    { id: 'categories', name: 'Categories', icon: FiFolder }
  ]

  const handleUploadComplete = (uploadedFile) => {
    console.log('File uploaded successfully:', uploadedFile)
    // Optionally switch to gallery tab to show the uploaded file
    setActiveTab('gallery')
  }

  return (
    <>
      <SEOHead
        title="Media Manager | Emerging Investigations Admin"
        description="Manage website media files including images and videos for Emerging Investigations."
        canonical="https://emerginginv.com/admin/media"
      />

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Media Manager
            </h1>
            <p className="text-gray-600">
              Upload and manage images and videos for your website
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <SafeIcon icon={tab.icon} className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'upload' && (
              <div className="bg-white rounded-lg shadow p-8">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-sm text-gray-500 mt-1">
                    {categories.find(c => c.id === selectedCategory)?.description}
                  </p>
                </div>

                <MediaUploader
                  category={selectedCategory}
                  onUploadComplete={handleUploadComplete}
                  acceptedTypes={['image', 'video']}
                />
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="bg-white rounded-lg shadow p-8">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <MediaGallery
                  category={selectedCategory || null}
                  selectionMode={false}
                />
              </div>
            )}

            {activeTab === 'categories' && (
              <div className="bg-white rounded-lg shadow p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Media Categories
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map((category) => (
                    <motion.div
                      key={category.id}
                      whileHover={{ scale: 1.02 }}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <SafeIcon icon={FiFolder} className="w-5 h-5 text-primary-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {category.name}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {category.description}
                      </p>
                      
                      <button
                        onClick={() => {
                          setSelectedCategory(category.id)
                          setActiveTab('gallery')
                        }}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        View Files →
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Usage Instructions */}
          <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              📋 How to Use Media Manager
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-800">
              <div>
                <h4 className="font-medium mb-2">🎯 Upload Guidelines:</h4>
                <ul className="space-y-1">
                  <li>• Images: Max 50MB (JPG, PNG, WebP, GIF, SVG)</li>
                  <li>• Videos: Max 100MB (MP4, WebM, QuickTime, AVI)</li>
                  <li>• Use descriptive filenames</li>
                  <li>• Choose appropriate categories</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">💡 Best Practices:</h4>
                <ul className="space-y-1">
                  <li>• Optimize images before upload</li>
                  <li>• Use consistent naming conventions</li>
                  <li>• Add alt text for accessibility</li>
                  <li>• Organize files by category</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MediaManager