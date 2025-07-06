import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from '../components/common/SEOHead';

const { FiPhone, FiMail, FiMapPin, FiClock, FiSend } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Surveillance Services',
    'Background Checks',
    'Due Diligence Investigations',
    'Locate Investigations',
    'Corporate Investigations',
    'Asset Searches',
    'Legal Support Services',
    'Claims Support',
    'Other'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Emerging Investigations",
    "description": "Contact our licensed private investigators for a free consultation. Professional investigation services across Florida.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Emerging Investigations",
      "telephone": "813-291-3228",
      "email": "info@emerginginv.com",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "FL",
        "addressCountry": "US"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Emerging Investigations | Free Consultation | Florida Private Investigators"
        description="Contact our licensed private investigators for a free consultation. Professional investigation services across Florida. Call 813-291-3228 or schedule online."
        keywords="contact private investigator Florida, free consultation, investigation services, private detective contact"
        canonical="https://emerginginv.com/contact"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Contact Our Private Investigators
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Get your free consultation today. Licensed private investigators serving all of Florida with 24/7 availability for urgent cases.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Free Consultation Request</h2>
              <p className="text-gray-600 mb-8">
                Complete the form below or call us directly at <a href="tel:813-291-3228" className="text-primary-600 hover:underline font-semibold">813-291-3228</a> for immediate assistance.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Case Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your case and investigation needs..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiSend} className="w-5 h-5" />
                  <span>Send Free Consultation Request</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Our licensed private investigators are ready to help with your investigation needs. We provide professional services across Florida with a commitment to confidentiality and results.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiPhone} className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:813-291-3228" className="text-primary-600 hover:underline text-xl font-semibold">
                        813-291-3228
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">Available 24/7 for emergency cases</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiMail} className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@emerginginv.com" className="text-primary-600 hover:underline">
                        info@emerginginv.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiMapPin} className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Service Area</h3>
                    <p className="text-gray-600">Serving All of Florida</p>
                    <p className="text-sm text-gray-500">Licensed statewide private investigators</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiClock} className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-sm text-gray-500">Emergency services available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="https://www.myfloridalicense.com/wl11.asp?mode=0&SID=&brd=1503" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline text-sm"
                    >
                      Verify Our Florida Private Investigator License
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.fdle.state.fl.us/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline text-sm"
                    >
                      Florida Department of Law Enforcement
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.flcourts.gov/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline text-sm"
                    >
                      Florida Courts System
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              For urgent investigation needs, call us directly. Our licensed private investigators are available 24/7 for emergency cases.
            </p>
            <a
              href="tel:813-291-3228"
              className="inline-flex items-center justify-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              <SafeIcon icon={FiPhone} className="w-5 h-5" />
              <span>Call 813-291-3228 Now</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;