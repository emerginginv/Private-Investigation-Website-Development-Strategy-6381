import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import CTASection from '../components/common/CTASection';
import SEOHead from '../components/common/SEOHead';

const { FiEye, FiShield, FiUsers, FiFileText, FiSearch, FiPhone, FiCheckCircle, FiClock, FiAward, FiMapPin } = FiIcons;

const Home = () => {
  const services = [
    {
      icon: FiEye,
      title: 'Surveillance Services',
      description: 'Professional surveillance investigations with state-of-the-art equipment and experienced investigators.',
      link: '/services/surveillance'
    },
    {
      icon: FiFileText,
      title: 'Background Checks',
      description: 'Comprehensive background investigations for employment, tenant screening, and personal safety.',
      link: '/services/background-checks'
    },
    {
      icon: FiShield,
      title: 'Due Diligence Investigations',
      description: 'Thorough business and personal due diligence for mergers, acquisitions, and partnerships.',
      link: '/services/due-diligence'
    },
    {
      icon: FiSearch,
      title: 'Locate Investigations',
      description: 'Expert location services for missing persons, witnesses, and asset recovery.',
      link: '/services/locate-investigations'
    },
    {
      icon: FiUsers,
      title: 'Corporate Investigations',
      description: 'Business fraud detection, employee misconduct, and corporate security investigations.',
      link: '/services/corporate-investigations'
    },
    {
      icon: FiFileText,
      title: 'Legal Support Services',
      description: 'Litigation support, witness interviews, and evidence gathering for legal proceedings.',
      link: '/services/legal-support'
    }
  ];

  const locations = [
    { name: 'Miami', link: '/locations/miami' },
    { name: 'Orlando', link: '/locations/orlando' },
    { name: 'Tampa', link: '/locations/tampa' },
    { name: 'Jacksonville', link: '/locations/jacksonville' },
    { name: 'Naples', link: '/locations/naples' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Emerging Investigations",
    "description": "Expert private investigation services across Florida including surveillance, background checks, due diligence, and corporate investigations.",
    "url": "https://emerginginv.com",
    "telephone": "813-291-3228",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "27.9944024",
      "longitude": "-82.4453697"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "serviceArea": {
      "@type": "State",
      "name": "Florida"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Investigation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Surveillance Services",
            "description": "Expert surveillance investigations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Background Checks",
            "description": "Comprehensive background investigations"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Florida Private Investigator | Emerging Investigations | Free Consultation"
        description="Expert private investigation services across Florida. Surveillance, background checks, due diligence & more. Free consultation. Call 813.291.3228 today."
        keywords="private investigator Florida, surveillance services Florida, background checks Florida, due diligence investigations, locate missing person Florida"
        canonical="https://emerginginv.com"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Expert Private Investigation Services Florida
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Licensed private investigators serving all of Florida. Surveillance, background checks, due diligence, and corporate investigations with guaranteed results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="tel:813-291-3228"
                className="inline-flex items-center justify-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Call 813-291-3228 Now</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-secondary-900 text-white px-8 py-4 rounded-lg hover:bg-secondary-800 transition-colors font-semibold text-lg"
              >
                Schedule Free Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Private Investigation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team provides expert investigation services across Florida with cutting-edge technology and proven methodologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <SafeIcon icon={service.icon} className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  <Link to={service.link} className="hover:text-primary-600 transition-colors">
                    {service.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn More <SafeIcon icon={FiIcons.FiArrowRight} className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Emerging Investigations?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a licensed private investigation agency in Florida, we combine experience, technology, and dedication to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiCheckCircle} className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed by the <a href="https://www.myfloridalicense.com/wl11.asp?mode=0&SID=&brd=1503" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Florida Department of Business and Professional Regulation</a> with comprehensive insurance coverage.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiClock} className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">
                Emergency investigation services available around the clock to meet your urgent needs.
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
                <SafeIcon icon={FiAward} className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Years of experience with successful case outcomes and satisfied clients across Florida.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiMapPin} className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Statewide Coverage</h3>
              <p className="text-gray-600">
                Serving all of Florida with local expertise in major cities including Miami, Orlando, Tampa, Jacksonville, and Naples.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Private Investigator Services Across Florida
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Local expertise with statewide reach. Our private investigators serve major Florida cities and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiMapPin} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {location.name} Private Investigators
                </h3>
                <Link
                  to={location.link}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn More <SafeIcon icon={FiIcons.FiArrowRight} className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Expert Investigation Services?"
        subtitle="Contact Emerging Investigations today for your free consultation and case evaluation. Licensed private investigators serving all of Florida."
      />
    </>
  );
};

export default Home;