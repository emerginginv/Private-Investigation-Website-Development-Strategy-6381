import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import CTASection from '../../components/common/CTASection';
import SEOHead from '../../components/common/SEOHead';

const { FiFileText, FiUser, FiShield, FiCheck, FiSearch } = FiIcons;

const BackgroundChecks = () => {
  const services = [
    {
      icon: FiUser,
      title: 'Employment Screening',
      description: 'Comprehensive background verification for hiring decisions including criminal history and employment verification.'
    },
    {
      icon: FiFileText,
      title: 'Criminal History Reports',
      description: 'Detailed criminal background searches across multiple jurisdictions and databases.'
    },
    {
      icon: FiShield,
      title: 'Tenant Screening',
      description: 'Complete rental applicant background checks including credit, criminal, and eviction history.'
    },
    {
      icon: FiSearch,
      title: 'Personal Background Checks',
      description: 'Thorough personal investigations for relationships, partnerships, and personal safety.'
    }
  ];

  const checkTypes = [
    'Criminal history verification',
    'Employment history verification',
    'Education verification',
    'Credit report analysis',
    'Reference checks',
    'Social media screening',
    'Professional license verification',
    'Sex offender registry search'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Background Check Services Florida",
    "description": "Professional background investigation services across Florida including employment screening, criminal history checks, and tenant verification by licensed private investigators.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Emerging Investigations",
      "telephone": "813-291-3228"
    },
    "serviceType": "Background Investigation",
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    }
  };

  return (
    <>
      <SEOHead
        title="Background Check Services Florida | Professional Background Investigations"
        description="Comprehensive background check services across Florida. Employment screening, criminal history, tenant verification by licensed private investigators. Fast, accurate results."
        keywords="background check services Florida, employment screening Florida, criminal background check, tenant screening Florida, background investigation"
        canonical="https://emerginginv.com/services/background-checks"
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
              Professional Background Check Services Florida
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Comprehensive background investigations for employment, tenant screening, and personal safety. Licensed private investigators serving all of Florida.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Background Investigation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our <Link to="/services/background-checks" className="text-primary-600 hover:underline">background check services</Link> provide thorough verification and investigation for employment, legal, and personal matters across Florida.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={service.icon} className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Background Check Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Background Verification
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our background investigation services support <Link to="/services/corporate-investigations" className="text-primary-600 hover:underline">corporate hiring decisions</Link>, <Link to="/services/legal-support" className="text-primary-600 hover:underline">legal proceedings</Link>, and personal safety needs across Florida.
              </p>
              <div className="space-y-3">
                {checkTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Background Services?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiDatabase} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Comprehensive Databases</span>
                    <p className="text-gray-600 text-sm">Access to multiple databases for thorough verification</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiClock} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Fast Turnaround</span>
                    <p className="text-gray-600 text-sm">Quick results without compromising accuracy</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiShield} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Legal Compliance</span>
                    <p className="text-gray-600 text-sm">All checks comply with FCRA and Florida regulations</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related Investigation Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link to="/services/due-diligence" className="hover:text-primary-600 transition-colors">
                  Due Diligence Investigations
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive business and personal due diligence to support your background verification needs.
              </p>
              <Link
                to="/services/due-diligence"
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
              className="bg-gray-50 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link to="/services/corporate-investigations" className="hover:text-primary-600 transition-colors">
                  Corporate Investigation Services
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Employee screening and corporate security investigations to protect your business.
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
              className="bg-gray-50 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link to="/services/surveillance" className="hover:text-primary-600 transition-colors">
                  Surveillance Services
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Professional surveillance to complement background investigations with ongoing monitoring.
              </p>
              <Link
                to="/services/surveillance"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Learn More →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Need Professional Background Check Services?"
        subtitle="Contact our licensed private investigators today for accurate and comprehensive background investigations."
      />
    </>
  );
};

export default BackgroundChecks;