import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import CTASection from '../../components/common/CTASection';
import SEOHead from '../../components/common/SEOHead';

const { FiMapPin, FiShield, FiUsers, FiClock, FiCheck } = FiIcons;

const Jacksonville = () => {
  const services = [
    'Surveillance investigations',
    'Background check services',
    'Corporate investigations',
    'Asset search services',
    'Due diligence investigations',
    'Locate investigations',
    'Legal support services',
    'Insurance claims support'
  ];

  const areas = [
    'Downtown Jacksonville',
    'Southside',
    'Westside',
    'Northside',
    'Jacksonville Beach',
    'Orange Park',
    'Fernandina Beach',
    'Ponte Vedra'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Emerging Investigations - Jacksonville Private Investigators",
    "description": "Professional private investigation services in Jacksonville, Florida including surveillance, background checks, and corporate investigations by licensed investigators.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jacksonville",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "telephone": "813-291-3228",
    "serviceArea": {
      "@type": "City",
      "name": "Jacksonville"
    }
  };

  return (
    <>
      <SEOHead
        title="Jacksonville Private Investigators | Professional Investigation Services Jacksonville FL"
        description="Professional private investigation services in Jacksonville, Florida. Licensed investigators providing surveillance, background checks, corporate investigations. Serving Duval County. Free consultation."
        keywords="Jacksonville private investigators, private detective Jacksonville FL, surveillance services Jacksonville, background checks Jacksonville, corporate investigations Jacksonville"
        canonical="https://emerginginv.com/locations/jacksonville"
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
              Jacksonville Private Investigators | Professional Investigation Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Licensed private investigators serving Jacksonville and Duval County. Professional surveillance, background checks, corporate investigations, and legal support services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Private Investigation Services in Jacksonville
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Emerging Investigations provides comprehensive private investigation services throughout Jacksonville and Duval County. Our <Link to="/services" className="text-primary-600 hover:underline">professional investigation services</Link> support legal, corporate, and personal matters with experienced local investigators.
              </p>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiMapPin} className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Jacksonville Area Coverage</h3>
                <p className="text-gray-600">
                  Professional investigation services throughout Jacksonville and Northeast Florida including all major neighborhoods and business districts.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {areas.map((area, index) => (
                  <div key={index} className="text-center py-2">
                    <div className="text-sm text-gray-700">{area}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jacksonville Investigation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Local expertise with comprehensive investigation capabilities throughout Jacksonville and Northeast Florida.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiShield} className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                Licensed by the <a href="https://www.fdle.state.fl.us/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Florida Department of Law Enforcement</a> with full insurance coverage for Jacksonville investigations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiUsers} className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Experienced Jacksonville private investigators with knowledge of local courts, law enforcement, and business environment.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiClock} className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Availability</h3>
              <p className="text-gray-600">
                Emergency investigation services available around the clock for urgent Jacksonville cases and time-sensitive matters.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investigation Services Available in Jacksonville
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive private investigation services tailored to Jacksonville's unique business and legal environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link to="/services/surveillance" className="hover:text-primary-600 transition-colors">
                  Jacksonville Surveillance Services
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Professional surveillance investigations throughout Northeast Florida with experienced local investigators.
              </p>
              <Link
                to="/services/surveillance"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Learn More →
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link to="/services/corporate-investigations" className="hover:text-primary-600 transition-colors">
                  Jacksonville Corporate Investigations
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Business investigations for Jacksonville's corporate environment including fraud detection and employee misconduct.
              </p>
              <Link
                to="/services/corporate-investigations"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Learn More →
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link to="/services/legal-support" className="hover:text-primary-600 transition-colors">
                  Jacksonville Legal Support Services
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Litigation support for Jacksonville attorneys including evidence collection and witness interviews.
              </p>
              <Link
                to="/services/legal-support"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Learn More →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Need a Jacksonville Private Investigator?"
        subtitle="Contact our licensed private investigators today for professional investigation services in Jacksonville and Duval County."
      />
    </>
  );
};

export default Jacksonville;