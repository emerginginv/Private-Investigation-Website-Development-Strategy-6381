import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import CTASection from '../../components/common/CTASection';
import SEOHead from '../../components/common/SEOHead';

const { FiClipboard, FiAlertTriangle, FiEye, FiFileText, FiCheck } = FiIcons;

const ClaimsSupport = () => {
  const services = [
    {
      icon: FiAlertTriangle,
      title: 'Insurance Fraud Investigation',
      description: 'Comprehensive fraud detection and investigation for suspicious insurance claims.'
    },
    {
      icon: FiClipboard,
      title: 'Claim Verification',
      description: 'Thorough verification of insurance claims including documentation and evidence review.'
    },
    {
      icon: FiEye,
      title: 'Claims Surveillance',
      description: 'Professional surveillance to verify claim validity and detect fraudulent activity.'
    },
    {
      icon: FiFileText,
      title: 'Accident Investigation',
      description: 'Detailed accident reconstruction and investigation for insurance claim support.'
    }
  ];

  const claimTypes = [
    'Workers compensation fraud',
    'Auto accident claims',
    'Property damage claims',
    'Personal injury claims',
    'Disability claim verification',
    'Life insurance claims',
    'Medical malpractice support',
    'Product liability claims'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Insurance Claims Support Services Florida",
    "description": "Professional insurance claims investigation services across Florida including fraud detection, claim verification, and surveillance by licensed private investigators.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Emerging Investigations",
      "telephone": "813-291-3228"
    },
    "serviceType": "Insurance Claims Investigation",
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    }
  };

  return (
    <>
      <SEOHead
        title="Insurance Claims Support Florida | Fraud Investigation & Claim Verification"
        description="Professional insurance claims investigation services across Florida. Fraud detection, claim verification, surveillance by licensed private investigators. Protect against fraudulent claims."
        keywords="insurance claims investigation Florida, insurance fraud detection, claims surveillance Florida, workers compensation fraud, claim verification"
        canonical="https://emerginginv.com/services/claims-support"
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
              Professional Insurance Claims Support Florida
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Comprehensive insurance claims investigation including fraud detection, claim verification, and surveillance. Licensed private investigators protecting insurance companies across Florida.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Claims Investigation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our <Link to="/services/claims-support" className="text-primary-600 hover:underline">insurance claims support services</Link> protect insurance companies from fraudulent claims through professional investigation and verification.
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

      {/* Claim Types */}
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
                Insurance Claims Investigation Types
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our claims support includes <Link to="/services/surveillance" className="text-primary-600 hover:underline">specialized surveillance</Link> and <Link to="/services/background-checks" className="text-primary-600 hover:underline">background verification</Link> to detect fraudulent insurance claims across Florida.
              </p>
              <div className="space-y-3">
                {claimTypes.map((type, index) => (
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Claims Investigation</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiShield} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Fraud Prevention</span>
                    <p className="text-gray-600 text-sm">Protect against fraudulent claims and reduce financial losses</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiClock} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Fast Investigation</span>
                    <p className="text-gray-600 text-sm">Quick turnaround to expedite claim processing and resolution</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiFileText} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Detailed Documentation</span>
                    <p className="text-gray-600 text-sm">Comprehensive reports with evidence and recommendations</p>
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
              Related Insurance Investigation Services
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
                <Link to="/services/surveillance" className="hover:text-primary-600 transition-colors">
                  Claims Surveillance Services
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized surveillance for insurance claim verification and fraud detection.
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
              className="bg-gray-50 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link to="/services/background-checks" className="hover:text-primary-600 transition-colors">
                  Claimant Background Checks
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive background investigations on insurance claimants.
              </p>
              <Link
                to="/services/background-checks"
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
                <Link to="/services/asset-searches" className="hover:text-primary-600 transition-colors">
                  Asset Verification Services
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Asset searches and verification to support insurance claim investigations.
              </p>
              <Link
                to="/services/asset-searches"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Learn More →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Protect Against Insurance Fraud"
        subtitle="Contact our licensed private investigators today for professional insurance claims investigation and fraud detection services."
      />
    </>
  );
};

export default ClaimsSupport;