import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import CTASection from '../components/common/CTASection';
import SEOHead from '../components/common/SEOHead';

const { FiShield, FiAward, FiUsers, FiClock, FiCheck, FiEye } = FiIcons;

const About = () => {
  const values = [
    {
      icon: FiShield,
      title: 'Integrity',
      description: 'We conduct all investigations with the highest ethical standards and legal compliance.'
    },
    {
      icon: FiAward,
      title: 'Excellence',
      description: 'Our commitment to quality ensures exceptional results for every client and case.'
    },
    {
      icon: FiUsers,
      title: 'Confidentiality',
      description: 'Client privacy and case confidentiality are our top priorities in every investigation.'
    },
    {
      icon: FiClock,
      title: 'Reliability',
      description: 'Dependable service delivery with timely results and professional communication.'
    }
  ];

  const certifications = [
    'Licensed Private Investigation Agency',
    'Florida Department of Law Enforcement Certified',
    'Professional Liability Insurance',
    'Continuing Education Certified',
    'Advanced Surveillance Training',
    'Digital Evidence Certification'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Emerging Investigations",
    "description": "Learn about Emerging Investigations, a licensed private investigation agency serving Florida with professional investigation services and experienced investigators.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Emerging Investigations",
      "description": "Licensed private investigation agency serving Florida with comprehensive investigation services including surveillance, background checks, and corporate investigations.",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "FL",
        "addressCountry": "US"
      },
      "telephone": "813-291-3228"
    }
  };

  return (
    <>
      <SEOHead
        title="About Emerging Investigations | Licensed Private Investigators Florida"
        description="Learn about Emerging Investigations, a licensed private investigation agency serving Florida. Professional investigators with years of experience in surveillance, background checks, and corporate investigations."
        keywords="about emerging investigations, licensed private investigators Florida, professional investigation agency, private detective company"
        canonical="https://emerginginv.com/about"
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
              About Emerging Investigations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Licensed private investigation agency serving Florida with professional investigation services, experienced investigators, and a commitment to delivering results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
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
                Professional Private Investigation Services
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Emerging Investigations is a licensed private investigation agency serving clients throughout Florida. Our team of experienced investigators provides comprehensive investigation services with a focus on professionalism, integrity, and results.
              </p>
              <p className="text-gray-600 mb-8">
                We specialize in <Link to="/services/surveillance" className="text-primary-600 hover:underline">surveillance services</Link>, <Link to="/services/background-checks" className="text-primary-600 hover:underline">background checks</Link>, <Link to="/services/corporate-investigations" className="text-primary-600 hover:underline">corporate investigations</Link>, and <Link to="/services/legal-support" className="text-primary-600 hover:underline">legal support services</Link>. Our investigators are licensed by the <a href="https://www.fdle.state.fl.us/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Florida Department of Law Enforcement</a> and maintain the highest professional standards.
              </p>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
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
                  <SafeIcon icon={FiEye} className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To provide professional private investigation services that deliver accurate, timely, and actionable results while maintaining the highest standards of ethics and confidentiality.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
                  <div className="text-gray-600 text-sm">Cases Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Emergency Services</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">Licensed</div>
                  <div className="text-gray-600 text-sm">& Insured</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">Statewide</div>
                  <div className="text-gray-600 text-sm">Florida Coverage</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every investigation we conduct and every client relationship we build.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Investigation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a full range of professional investigation services to meet your specific needs across Florida.
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
                  Surveillance Services
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Professional surveillance investigations with advanced equipment and experienced investigators.
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
                <Link to="/services/background-checks" className="hover:text-primary-600 transition-colors">
                  Background Investigations
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive background checks for employment, tenant screening, and personal safety.
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
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link to="/services/corporate-investigations" className="hover:text-primary-600 transition-colors">
                  Corporate Investigations
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Business fraud detection, employee misconduct, and corporate security investigations.
              </p>
              <Link
                to="/services/corporate-investigations"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Learn More →
              </Link>
            </motion.div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Standards & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our investigations are conducted in full compliance with Florida law and professional standards.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed Agency</h3>
              <p className="text-gray-600 mb-4">
                Licensed by the Florida Department of Business and Professional Regulation with full compliance to state regulations.
              </p>
              <a 
                href="https://www.myfloridalicense.com/wl11.asp?mode=0&SID=&brd=1503" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline text-sm"
              >
                Verify License →
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiIcons.FiLock} className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Insured & Bonded</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive professional liability insurance and bonding to protect our clients and their interests.
              </p>
              <span className="text-primary-600 text-sm">Full Coverage Protection</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiIcons.FiBookOpen} className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuing Education</h3>
              <p className="text-gray-600 mb-4">
                Regular training and certification updates to maintain expertise in the latest investigation techniques and legal requirements.
              </p>
              <a 
                href="https://www.fldoe.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline text-sm"
              >
                Florida Department of Education →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Work with Professional Investigators?"
        subtitle="Contact Emerging Investigations today to discuss your case with our experienced team of licensed private investigators."
      />
    </>
  );
};

export default About;