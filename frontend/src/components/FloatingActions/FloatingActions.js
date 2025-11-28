import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import { 
  PhoneIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  CalculatorIcon,
  XMarkIcon,
  PlayCircleIcon
} from '@heroicons/react/24/outline';

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

import { getPhoneLink, getWhatsAppLink } from '../../utils/helpers';

const FloatingActions = ({ onEnquiryClick }) => {
  const { t } = useTranslation();

  // Always visible (client requirement)
  const isVisible = true;

  // Scroll to section function
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // All items with same color (bg-primary-600)
   const stickyActionItems = [
    // {
    //   id: 'call',
    //   icon: PhoneIcon,
    //   label: t('floatingActions.call'),
    //   onClick: () => window.location.href = getPhoneLink(),
    // },
    {
      id: 'whatsapp',
      icon: FaWhatsapp,
      label: t('floatingActions.whatsapp'),
      onClick: () => window.location.href = getWhatsAppLink(),
    },
    {
      id: 'enquiry',
      icon: ChatBubbleBottomCenterTextIcon,
      label: t('floatingActions.enquiry'),
      onClick: onEnquiryClick,
    },
    {
      id: 'scorecard',
      icon: ClipboardDocumentCheckIcon,
      label: "Scorecard",
      onClick: () => scrollToSection("scorecard"),
    },
    {
      id: 'emi',
      icon: CalculatorIcon,
      label: "EMI Calculator",
      onClick: () => scrollToSection("emi-calculator"),
    },
    {
      id: 'youtube',
      icon: PlayCircleIcon,
      label: "YouTube",
      onClick: () => window.open("https://www.youtube.com/@ahamhfc", "_blank"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
        className="fixed right-4 top-60 z-40 space-y-3"
      >
        {stickyActionItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={item.onClick}
            className={`
              relative bg-primary-600 hover:bg-primary-700 
              text-white p-3 rounded-full shadow-medium 
              transition-all duration-300 group block
            `}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <item.icon className="h-6 w-6" />
            
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
              <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                {item.label}
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
              </div>
            </div>

            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white"></div>
          </motion.button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingActions;
