import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiClock, FiEye } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiEye} className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Emerging Investigations</span>
            </div>
            <p className="text-gray-300 text-sm">
              Professional private investigation services across Florida. Licensed, insured, and committed to delivering results.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiPhone} className="w-4 h-4 text-primary-400" />
                <a href="tel:813-291-3228" className="text-gray-300 hover:text-white transition-colors">
                  813-291-3228
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="w-4 h-4 text-primary-400" />
                <a href="mailto:info@emerginginv.com" className="text-gray-300 hover:text-white transition-colors">
                  info@emerginginv.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMapPin} className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">Serving All of Florida</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiClock} className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">24/7 Emergency Services</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Investigation Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/surveillance" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Surveillance Services
                </Link>
              </li>
              <li>
                <Link to="/services/background-checks" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Background Checks
                </Link>
              </li>
              <li>
                <Link to="/services/due-diligence" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Due Diligence Investigations
                </Link>
              </li>
              <li>
                <Link to="/services/locate-investigations" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Locate Investigations
                </Link>
              </li>
              <li>
                <Link to="/services/corporate-investigations" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Corporate Investigations
                </Link>
              </li>
              <li>
                <Link to="/services/asset-searches" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Asset Searches
                </Link>
              </li>
              <li>
                <Link to="/services/legal-support" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Legal Support Services
                </Link>
              </li>
              <li>
                <Link to="/services/claims-support" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Claims Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/locations/miami" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Miami Private Investigators
                </Link>
              </li>
              <li>
                <Link to="/locations/orlando" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Orlando Private Investigators
                </Link>
              </li>
              <li>
                <Link to="/locations/tampa" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Tampa Private Investigators
                </Link>
              </li>
              <li>
                <Link to="/locations/jacksonville" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Jacksonville Private Investigators
                </Link>
              </li>
            </ul>
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-white mb-2">Quick Links</h4>
              <ul className="space-y-1">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Free Consultation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Government Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Professional Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.myfloridalicense.com/wl11.asp?mode=0&SID=&brd=1503" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  FL License Verification
                </a>
              </li>
              <li>
                <a 
                  href="https://www.fdle.state.fl.us/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Florida Department of Law Enforcement
                </a>
              </li>
              <li>
                <a 
                  href="https://www.flcourts.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Florida Courts System
                </a>
              </li>
              <li>
                <a 
                  href="https://www.myfloridacfo.com/division/iff/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  FL Insurance Fraud Division
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2024 Emerging Investigations. All rights reserved. Licensed Private Investigation Agency.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;