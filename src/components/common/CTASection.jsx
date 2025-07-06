import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPhone, FiMail } = FiIcons;

const CTASection = ({ 
  title = "Ready to Get Started?", 
  subtitle = "Contact us today for your free consultation and case evaluation.",
  showBothButtons = true 
}) => {
  return (
    <section className="py-16 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:813-291-3228"
              className="inline-flex items-center justify-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              <SafeIcon icon={FiPhone} className="w-5 h-5" />
              <span>Call 813-291-3228</span>
            </a>
            {showBothButtons && (
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-secondary-900 text-white px-8 py-4 rounded-lg hover:bg-secondary-800 transition-colors font-semibold text-lg"
              >
                <SafeIcon icon={FiMail} className="w-5 h-5" />
                <span>Free Consultation</span>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;