import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import CTASection from '../../components/common/CTASection';
import SEOHead from '../../components/common/SEOHead';

const { FiUsers, FiShield, FiAlertTriangle, FiLock, FiCheck } = FiIcons;

const CorporateInvestigations = () => {
  const services = [
    {
      icon: FiAlertTriangle,
      title: 'Employee Misconduct',
      description: 'Professional investigations into employee theft, harassment, policy violations, and workplace misconduct.'
    },
    {
      icon: FiShield,
      title: 'Fraud Detection',
      description: 'Comprehensive fraud investigations including embezzlement, financial fraud, and corporate theft.'
    },
    {
      icon: FiLock,
      title: 'Corporate Security',
      description: 'Security assessments, threat analysis, and corporate protection investigations.'
    },
    {
      icon: FiUsers,
      title: 'Due Diligence',
      description: 'Business partner verification, merger investigations, and corporate background checks.'
    }
  ];

  const investigationTypes = [
    'Employee theft and embezzlement',
    'Sexual harassment investigations',
    'Workplace violence threats',
    'Intellectual property theft',
    'Workers compensation fraud',
    'Computer and data security',
    'Executive background checks',
    'Corporate espionage'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate Investigation Services Florida",
    "description": "Professional corporate investigation services across Florida including employee misconduct, fraud detection, and corporate security by licensed private investigators.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Emerging Investigations",
      "telephone": "813-291-3228"
    },
    "serviceType": "Corporate Investigation",
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    }
  };

  return (
    <>
      <SEOHead
        title="Corporate Investigation Services Florida | Business Fraud & Employee Misconduct"
        description="Professional corporate investigation services across Florida. Employee misconduct, fraud detection, corporate security investigations by licensed private investigators. Protect your business."
        keywords="corporate investigations Florida, employee misconduct investigation, business fraud detection, corporate security Florida, workplace investigation"
        canonical="https://emerginginv.com/services/corporate-investigations"
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
              Professional Corporate Investigation Services Florida
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Protect your business with comprehensive corporate investigations including employee misconduct, fraud detection, and security assessments. Licensed investigators serving all of Florida.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Corporate Investigation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our <Link to="/services/corporate-investigations" className="text-primary-600 hover:underline">corporate investigation services</Link> protect your business from internal and external threats through professional investigation and security assessment.
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
                Corporate Security & Investigation Services
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our corporate investigations support <Link to="/services/surveillance" className="text-primary-600 hover:underline">workplace surveillance</Link>, <Link to="/services/background-checks" className="text-primary-600 hover:underline">employee screening</Link>, and comprehensive security assessments across Florida.
              </p>
              <div className="space-y-3">
                {investigationTypes.map((type, index) => (
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Corporate Services?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiEye} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Discreet Investigation</span>
                    <p className="text-gray-600 text-sm">Confidential investigations that protect your business reputation</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiFileText} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Legal Compliance</span>
                    <p className="text-gray-600 text-sm">All investigations comply with employment and privacy laws</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiClock} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Rapid Response</span>
                    <p className="text-gray-600 text-sm">Quick investigation response for urgent corporate matters</p>
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
                <Link to="/services/background-checks" className="hover:text-primary-600 transition-colors">
                  Employee Background Checks
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive pre-employment screening and ongoing employee verification services.
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
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link to="/services/surveillance" className="hover:text-primary-600 transition-colors">
                  Workplace Surveillance
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Professional workplace surveillance for misconduct and security investigations.
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
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link to="/services/due-diligence" className="hover:text-primary-600 transition-colors">
                  Business Due Diligence
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive business partner verification and merger investigation services.
              </p>
              <Link
                to="/services/due-diligence"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Learn More →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Protect Your Business with Professional Investigations"
        subtitle="Contact our licensed corporate investigators today for comprehensive business security and investigation services."
      />
    </>
  );
};

export default CorporateInvestigations;