import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import CTASection from '../../components/common/CTASection';
import SEOHead from '../../components/common/SEOHead';

const { FiShield, FiDollarSign, FiUsers, FiFileText, FiCheck } = FiIcons;

const DueDiligence = () => {
  const services = [
    {
      icon: FiDollarSign,
      title: 'Financial Due Diligence',
      description: 'Comprehensive financial background investigations for mergers, acquisitions, and investment decisions.'
    },
    {
      icon: FiUsers,
      title: 'Business Partner Verification',
      description: 'Thorough background checks on potential business partners and key stakeholders.'
    },
    {
      icon: FiShield,
      title: 'Asset Verification',
      description: 'Detailed asset searches and verification for investment and partnership decisions.'
    },
    {
      icon: FiFileText,
      title: 'Reputation Research',
      description: 'Comprehensive reputation and integrity investigations for business relationships.'
    }
  ];

  const investigations = [
    'Corporate financial history',
    'Executive background verification',
    'Litigation history research',
    'Regulatory compliance review',
    'Asset and liability verification',
    'Market reputation analysis',
    'Vendor and supplier verification',
    'Investment risk assessment'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Due Diligence Investigations Florida",
    "description": "Professional due diligence investigation services across Florida for business transactions, mergers, acquisitions, and partnerships by licensed private investigators.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Emerging Investigations",
      "telephone": "813-291-3228"
    },
    "serviceType": "Due Diligence Investigation",
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    }
  };

  return (
    <>
      <SEOHead
        title="Due Diligence Investigations Florida | Business Background Checks"
        description="Professional due diligence investigation services across Florida. Business background checks, financial verification, asset searches for mergers and acquisitions. Licensed investigators."
        keywords="due diligence investigations Florida, business background checks Florida, financial due diligence, merger investigation, acquisition background check"
        canonical="https://emerginginv.com/services/due-diligence"
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
              Professional Due Diligence Investigations Florida
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Comprehensive business and personal due diligence investigations for mergers, acquisitions, partnerships, and major investments. Licensed private investigators serving all of Florida.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Due Diligence Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our <Link to="/services/due-diligence" className="text-primary-600 hover:underline">due diligence investigation services</Link> protect your investments and business interests through thorough background verification and risk assessment.
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

      {/* Investigation Types */}
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
                Comprehensive Business Investigation
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our due diligence services support <Link to="/services/corporate-investigations" className="text-primary-600 hover:underline">corporate transactions</Link> and <Link to="/services/asset-searches" className="text-primary-600 hover:underline">financial verification</Link> with thorough investigation and analysis.
              </p>
              <div className="space-y-3">
                {investigations.map((investigation, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{investigation}</span>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Due Diligence Services?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiTrendingUp} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Risk Mitigation</span>
                    <p className="text-gray-600 text-sm">Identify potential risks before making critical business decisions</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiTarget} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Accurate Intelligence</span>
                    <p className="text-gray-600 text-sm">Comprehensive research and verification of critical information</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiClock} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Timely Results</span>
                    <p className="text-gray-600 text-sm">Fast turnaround to support time-sensitive transactions</p>
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
              Related Business Investigation Services
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
                <Link to="/services/asset-searches" className="hover:text-primary-600 transition-colors">
                  Asset Search Services
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive asset investigations to support due diligence and financial verification.
              </p>
              <Link
                to="/services/asset-searches"
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
                  Executive Background Checks
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Detailed background investigations on key executives and business partners.
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
                <Link to="/services/corporate-investigations" className="hover:text-primary-600 transition-colors">
                  Corporate Investigation Services
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Business fraud detection and corporate security investigations.
              </p>
              <Link
                to="/services/corporate-investigations"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Learn More →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Need Professional Due Diligence Investigation?"
        subtitle="Contact our licensed private investigators today for comprehensive business investigation and risk assessment services."
      />
    </>
  );
};

export default DueDiligence;