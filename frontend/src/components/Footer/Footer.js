import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AhamLogo from '../../img/Aham_logo.png';

import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { getPhoneLink, scrollToSection } from '../../utils/helpers';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home Loans', href: '/home-construction-loan' },
    { label: 'PMAY 2.0', href: '/pmay2' },
    { label: 'EMI Calculator', href: '/emi-calculator' },
    { label: 'Eligibility Check', href: '/customer-360-eligibility-calculator' },
        { label: 'FAQ', href: '/faq' },
    { label: 'Risk Classification', href: '/risk-classification' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  const products = [
    'Home Construction Loan',
    'Home Purchase or Resale Loan',
    'Composite Loan',
    'Home Renovation Loan',
    'Home Extension Loan',
    'Existing Property (Resale)',
     'Balance Transfer Loan ',
     'NRI Home Loan',
    'Top-up Loan'
   
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/ahamhfc', icon: <FaFacebookF /> },
    //{ name: 'Twitter', href: 'https://twitter.com', icon: <FaTwitter /> },
    { name: 'Instagram', href: 'https://www.instagram.com/aham_housingfinance/', icon: <FaInstagram /> },
    { name: 'LinkedIn', href: 'linkedin.com/company/ahamhfc?originalSubdomain=in', icon: <FaLinkedinIn /> },
    { name: 'YouTube', href: 'https://www.youtube.com/@ahamhfc', icon: <FaYoutube /> }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #283079 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #4f46e5 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6 cursor-pointer"
                     onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <img src={AhamLogo} alt="AHAM Housing Finance Limited Logo" className="w-40 h-auto object-contain" />
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                  {t('footer.description')}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="h-5 w-5 text-primary-400 flex-shrink-0" />
                    <a href={getPhoneLink()} className="text-gray-300 hover:text-red-600 transition-colors">
                      {t('footer.phone')}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <EnvelopeIcon className="h-5 w-5 text-primary-400 flex-shrink-0" />
                    <a href="mailto:info@ahamhfc.com" className="text-gray-300 hover:text-red-600 transition-colors">
                      {t('footer.email')}
                    </a>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPinIcon className="h-5 w-5 text-primary-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{t('footer.address')}</span>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4 mt-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white w-10 h-10 rounded-lg transition-all duration-300 flex items-center justify-center text-xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-red transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
              <h4 className="text-lg font-semibold mb-6">{t('footer.products')}</h4>
              <ul className="space-y-3">
                {products.map((product, index) => (
                  <li key={index} className="text-gray-300 text-sm hover:text-white transition-colors duration-300">
                    {product}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">{t('footer.copyright')}</p>

            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white">Terms</a>
              <a href="/cookies" className="text-gray-400 hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUpIcon className="h-6 w-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
