import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import CTASection from '../../components/common/CTASection';
import SEOHead from '../../components/common/SEOHead';

const { FiSearch, FiUsers, FiMapPin, FiTarget, FiCheck } = FiIcons;

const LocateInvestigations = () => {
  const services = [
    {
      icon: FiUsers,
      title: 'Missing Person Location',
      description: 'Professional missing person investigations using advanced skip tracing and investigative techniques.'
    },
    {
      icon: FiTarget,
      title: 'Witness Location Services',
      description: 'Locate witnesses for legal proceedings and court cases with comprehensive search methods.'
    },
    {
      icon: FiMapPin,
      title: 'Skip Tracing',
      description: 'Expert skip tracing services for debt collection, legal service, and personal matters.'
    },
    {
      icon: FiSearch,
      title: 'Asset Recovery',
      description: 'Locate hidden assets and property for judgment recovery and financial investigations.'
    }
  ];

  const locateTypes = [
    'Missing family members',
    'Lost friends and relatives',
    'Witnesses for legal cases',
    'Debtors and judgment debtors',
    'Birth parents and adoptees',
    'Former employees',
    'Business partners',
    'Asset location and recovery'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Locate Investigation Services Florida",
    "description": "Professional locate investigation services across Florida including missing person searches, skip tracing, and witness location by licensed private investigators.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Emerging Investigations",
      "telephone": "813-291-3228"
    },
    "serviceType": "Locate Investigation",
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    }
  };

  return (
    <>
      <SEOHead
        title="Locate Investigation Services Florida | Missing Person & Skip Tracing"
        description="Professional locate investigation services across Florida. Missing person searches, skip tracing, witness location by licensed private investigators. Fast, discreet results."
        keywords="locate investigation Florida, missing person search Florida, skip tracing Florida, witness location, find missing person Florida"
        canonical="https://emerginginv.com/services/locate-investigations"
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
              Professional Locate Investigation Services Florida
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Expert missing person searches, skip tracing, and witness location services. Licensed private investigators serving all of Florida with advanced search techniques.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Location Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our <Link to="/services/locate-investigations" className="text-primary-600 hover:underline">locate investigation services</Link> use advanced skip tracing and investigative techniques to find missing persons and locate important individuals.
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

      {/* Location Types */}
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
                Comprehensive Location Investigations
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our location services support <Link to="/services/legal-support" className="text-primary-600 hover:underline">legal proceedings</Link>, <Link to="/services/asset-searches" className="text-primary-600 hover:underline">asset recovery</Link>, and personal reunification across Florida.
              </p>
              <div className="space-y-3">
                {locateTypes.map((type, index) => (
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Location Techniques</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiDatabase} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Database Searches</span>
                    <p className="text-gray-600 text-sm">Comprehensive searches across multiple databases and records</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiUsers} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Social Networks</span>
                    <p className="text-gray-600 text-sm">Professional social media and network investigation</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiIcons.FiPhone} className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Contact Networks</span>
                    <p className="text-gray-600 text-sm">Systematic contact and reference investigation</p>
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
                  Surveillance Services
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Professional surveillance to monitor located individuals or verify information.
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
                  Background Check Services
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive background verification once individuals are located.
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
                <Link to="/services/legal-support" className="hover:text-primary-600 transition-colors">
                  Legal Support Services
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Process serving and legal support for located witnesses and parties.
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
        title="Need Professional Locate Investigation Services?"
        subtitle="Contact our licensed private investigators today for expert missing person searches and skip tracing services."
      />
    </>
  );
};

export default LocateInvestigations;