import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMenu, FiX, FiPhone, FiChevronDown } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const services = [
    { name: 'Surveillance Services', path: '/services/surveillance' },
    { name: 'Background Checks', path: '/services/background-checks' },
    { name: 'Due Diligence', path: '/services/due-diligence' },
    { name: 'Locate Investigations', path: '/services/locate-investigations' },
    { name: 'Corporate Investigations', path: '/services/corporate-investigations' },
    { name: 'Asset Searches', path: '/services/asset-searches' },
    { name: 'Legal Support', path: '/services/legal-support' },
    { name: 'Claims Support', path: '/services/claims-support' }
  ];

  const locations = [
    { name: 'Miami Private Investigators', path: '/locations/miami' },
    { name: 'Orlando Private Investigators', path: '/locations/orlando' },
    { name: 'Tampa Private Investigators', path: '/locations/tampa' },
    { name: 'Jacksonville Private Investigators', path: '/locations/jacksonville' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <SafeIcon icon={FiIcons.FiEye} className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Emerging Investigations</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-700 hover:text-primary-600 transition-colors ${
                location.pathname === '/' ? 'text-primary-600 font-semibold' : ''
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <SafeIcon icon={FiChevronDown} className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-semibold"
                    >
                      All Services
                    </Link>
                    <hr className="my-2" />
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Locations Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
                onMouseEnter={() => setIsLocationsOpen(true)}
                onMouseLeave={() => setIsLocationsOpen(false)}
              >
                <span>Locations</span>
                <SafeIcon icon={FiChevronDown} className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {isLocationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                    onMouseEnter={() => setIsLocationsOpen(true)}
                    onMouseLeave={() => setIsLocationsOpen(false)}
                  >
                    {locations.map((location, index) => (
                      <Link
                        key={index}
                        to={location.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 text-sm"
                      >
                        {location.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/about"
              className={`text-gray-700 hover:text-primary-600 transition-colors ${
                location.pathname === '/about' ? 'text-primary-600 font-semibold' : ''
              }`}
            >
              About
            </Link>
          </nav>

          {/* Call Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:813-291-3228"
              className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              <SafeIcon icon={FiPhone} className="w-4 h-4" />
              <span className="font-semibold">813-291-3228</span>
            </a>
            <Link
              to="/contact"
              className="bg-secondary-900 text-white px-4 py-2 rounded-lg hover:bg-secondary-800 transition-colors font-semibold"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-2">
              <Link
                to="/"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                Services
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:813-291-3228"
                  className="flex items-center justify-center space-x-2 bg-primary-600 text-white px-4 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <SafeIcon icon={FiPhone} className="w-4 h-4" />
                  <span className="font-semibold">Call 813-291-3228</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;