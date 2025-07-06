import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import CTASection from '../../components/common/CTASection';
import SEOHead from '../../components/common/SEOHead';

const { FiScale, FiFileText, FiUsers, FiMail, FiCheck } = FiIcons;

const LegalSupport = () => {
  const services = [
    {
      icon: FiFileText,
      title: 'Evidence Collection',
      description: 'Professional evidence gathering and documentation for legal proceedings and court cases.'
    },
    {
      icon: FiUsers,
      title: 'Witness Interviews',
      description: 'Comprehensive witness location and interview services for litigation support.'
    },
    {
      icon: FiMail,
      title: 'Process Serving',
      description: 'Professional process serving for legal documents, subpoenas, and court papers.'
    },
    {
      icon: FiScale,
      title: 'Court Support',
      description: 'Expert testimony and courtroom support for investigation findings and evidence.'
    }
  ];

  const supportTypes = [
    'Pre-trial investigation',
    'Evidence documentation',
    'Witness location and interviews',
    'Process serving',
    'Expert testimony',
    'Accident reconstruction',
    'Background investigations',
    'Digital evidence collection'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Legal Support Services Florida",
    "description": "Professional legal support investigation services across Florida including evidence collection, witness interviews, and process serving by licensed private investigators.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Emerging Investigations",
      "telephone": "813-291-3228"
    },
    "serviceType": "Legal Support Investigation",
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    }
  };

  return (
    <>
      <SEOHead
        title="Legal Support Services Florida | Litigation Investigation & Process Serving"
        description="Professional legal support services across Florida. Evidence collection, witness interviews, process serving by licensed private investigators. Litigation investigation support."
        keywords="legal support services Florida, litigation investigation, process serving Florida, evidence collection, witness interviews Florida"
        canonical="https://emerginginv.com/services/legal-support"
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
              Professional Legal Support Services Florida
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Comprehensive litigation support including evidence collection, witness interviews, and process serving. Licensed private investigators supporting legal teams across Florida.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Legal Investigation Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our <Link to="/services/legal-support" className="text-primary-600 hover:underline">legal support services</Link> provide attorneys and legal teams with professional investigation support for successful case outcomes.
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

      {/* Support Types */}
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
                Professional Litigation Support
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our legal support services include <Link to="/services/surveillance" className="text-primary-600 hover:underline">evidence surveillance</Link>, <Link to="/services/locate-investigations" className="text-primary-600 hover:underline">witness location</Link>, and comprehensive investigation support for legal proceedings.
              </p>
              <div className="space-y-3">
                {supportTypes.map((type, index) => (
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Legal Support?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiShield} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Licensed Professionals</span>
                    <p className="text-gray-600 text-sm">Licensed investigators with legal expertise and courtroom experience</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiClock} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Timely Service</span>
                    <p className="text-gray-600 text-sm">Fast turnaround to meet legal deadlines and court schedules</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiFileText} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Admissible Evidence</span>
                    <p className="text-gray-600 text-sm">Proper evidence collection and documentation for court proceedings</p>
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
                <Link to="/services/surveillance" className="hover:text-primary-600 transition-colors">
                  Evidence Surveillance
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Professional surveillance services to gather evidence for legal proceedings.
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
                <Link to="/services/locate-investigations" className="hover:text-primary-600 transition-colors">
                  Witness Location Services
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Expert witness location and skip tracing for legal proceedings.
              </p>
              <Link
                to="/services/locate-investigations"
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
                <Link to="/services/background-checks" className="hover:text-primary-600 transition-colors">
                  Legal Background Checks
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive background investigations for legal cases and proceedings.
              </p>
              <Link
                to="/services/background-checks"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Learn More →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Need Professional Legal Support Services?"
        subtitle="Contact our licensed private investigators today for comprehensive litigation support and legal investigation services."
      />
    </>
  );
};

export default LegalSupport;