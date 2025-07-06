import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import CTASection from '../components/common/CTASection';
import SEOHead from '../components/common/SEOHead';

const { FiEye, FiShield, FiUsers, FiFileText, FiSearch, FiDollarSign, FiScale, FiClipboard } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiEye,
      title: 'Surveillance Services',
      description: 'Professional surveillance investigations using state-of-the-art equipment and experienced investigators. Comprehensive monitoring for legal, corporate, and personal matters.',
      features: ['24/7 Surveillance', 'Video Documentation', 'GPS Tracking', 'Covert Operations'],
      link: '/services/surveillance'
    },
    {
      icon: FiFileText,
      title: 'Background Checks',
      description: 'Thorough background investigations for employment screening, tenant verification, and personal safety. Comprehensive reports with verified information.',
      features: ['Criminal History', 'Employment Verification', 'Credit Reports', 'Reference Checks'],
      link: '/services/background-checks'
    },
    {
      icon: FiShield,
      title: 'Due Diligence Investigations',
      description: 'Business and personal due diligence for mergers, acquisitions, partnerships, and major transactions. Protect your investments with thorough investigations.',
      features: ['Financial Analysis', 'Asset Verification', 'Reputation Research', 'Risk Assessment'],
      link: '/services/due-diligence'
    },
    {
      icon: FiSearch,
      title: 'Locate Investigations',
      description: 'Expert location services for missing persons, witnesses, debtors, and assets. Advanced skip tracing techniques and database searches.',
      features: ['Missing Persons', 'Witness Location', 'Skip Tracing', 'Asset Recovery'],
      link: '/services/locate-investigations'
    },
    {
      icon: FiUsers,
      title: 'Corporate Investigations',
      description: 'Business fraud detection, employee misconduct investigations, and corporate security assessments. Protect your company from internal and external threats.',
      features: ['Fraud Detection', 'Employee Misconduct', 'Corporate Security', 'Intellectual Property'],
      link: '/services/corporate-investigations'
    },
    {
      icon: FiDollarSign,
      title: 'Asset Searches',
      description: 'Comprehensive asset investigation services for judgment recovery, divorce proceedings, and financial disputes. Locate hidden assets and financial holdings.',
      features: ['Bank Accounts', 'Real Estate', 'Investment Holdings', 'Business Interests'],
      link: '/services/asset-searches'
    },
    {
      icon: FiScale,
      title: 'Legal Support Services',
      description: 'Professional litigation support including witness interviews, evidence gathering, and process serving. Supporting attorneys and legal teams.',
      features: ['Witness Interviews', 'Evidence Collection', 'Process Serving', 'Court Support'],
      link: '/services/legal-support'
    },
    {
      icon: FiClipboard,
      title: 'Claims Support',
      description: 'Insurance claim investigations including fraud detection, accident reconstruction, and claim verification. Protecting insurance companies from fraudulent claims.',
      features: ['Insurance Fraud', 'Claim Verification', 'Accident Investigation', 'Surveillance'],
      link: '/services/claims-support'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private Investigation Services Florida",
    "description": "Comprehensive private investigation services including surveillance, background checks, due diligence, corporate investigations, and legal support across Florida.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Emerging Investigations",
      "telephone": "813-291-3228",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "FL",
        "addressCountry": "US"
      }
    },
    "serviceType": "Private Investigation",
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    }
  };

  return (
    <>
      <SEOHead
        title="Private Investigation Services Florida | Emerging Investigations"
        description="Comprehensive private investigation services across Florida. Surveillance, background checks, due diligence, corporate investigations, and legal support. Licensed investigators."
        keywords="private investigation services Florida, surveillance services, background checks, due diligence investigations, corporate investigations Florida"
        canonical="https://emerginginv.com/services"
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
              Professional Private Investigation Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Comprehensive investigation services across Florida by licensed private investigators. From surveillance to corporate investigations, we deliver results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
              >
                Get Free Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Investigation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Licensed private investigators providing professional services across Florida with cutting-edge technology and proven methodologies.
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
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      <Link to={service.link} className="hover:text-primary-600 transition-colors">
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <SafeIcon icon={FiIcons.FiCheck} className="w-4 h-4 text-primary-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Learn More
                      <SafeIcon icon={FiIcons.FiArrowRight} className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Investigation Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our private investigation services meet the highest professional standards and comply with all Florida regulations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiIcons.FiShield} className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Bonded</h3>
              <p className="text-gray-600">
                Licensed by the <a href="https://www.fdle.state.fl.us/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Florida Department of Law Enforcement</a> and fully bonded for your protection.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiIcons.FiLock} className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Confidential & Secure</h3>
              <p className="text-gray-600">
                All investigations are conducted with strict confidentiality and secure handling of sensitive information.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiIcons.FiFileText} className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Reports</h3>
              <p className="text-gray-600">
                Comprehensive investigation reports with evidence, documentation, and professional analysis.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Start Your Investigation?"
        subtitle="Contact our licensed private investigators today for a free consultation and case evaluation."
      />
    </>
  );
};

export default Services;