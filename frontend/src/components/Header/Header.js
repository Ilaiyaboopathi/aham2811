import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import AhamLogo from '../../img/Aham_logo.png';
import {
  PhoneIcon,
  MapPinIcon,
  StarIcon,
  MagnifyingGlassIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

import { getPhoneLink, scrollToSection } from '../../utils/helpers';
import { useNavigate, Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Header = ({ currentLanguage, onLanguageChange, onCreditScoreClick }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeLoanKey, setActiveLoanKey] = useState("construction");

    // ✅ Language Dropdown Control
  const [showLang, setShowLang] = useState(false); // ✅ Added

  // ✅ Stable hover delay (fix flicker issue)
  const openDropdown = (key) => {
    clearTimeout(window.__dropdownTimer);
    window.__dropdownTimer = setTimeout(() => setActiveDropdown(key), 120);
  };
  const closeDropdown = () => {
    clearTimeout(window.__dropdownTimer);
    window.__dropdownTimer = setTimeout(() => setActiveDropdown(null), 200);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ FULL MENU LIST (ALL MENUS RESTORED + Home Loans Mega Menu)
  const navigationItems = [
    {
      key: 'loans',
      label: 'Home Loans',
     //megaMenu:true,
      hasDropdown: true,
      submenu: [
        { key: 'construction', label: 'Home Construction Loan', href: '/home-construction-loan', description: 'Get the funds you need to build your dream home, released in easy stages as your construction grows.', image: '/img/megamenu/HomeConstructionLoan.jpg' },
        { key: 'purchase', label: 'Home Purchase or Resale Loan', href: '/home-purchase-loan', description: 'Finance to purchase a new or resale home, with flexible repayment options that suit your budget.',  image: '/img/megamenu/HomeConstructionLoan.jpg' },
        { key: 'composite', label: 'Composite Loan ', href: '/home-composite-loan', description: 'Buy your plot and build your home on it with a single, convenient loan structured in two stages.',  image: '/img/megamenu/HomeConstructionLoan.jpg' },
        { key: 'renovation', label: 'Home Renovation Loan', href: '/home-renovation-loan', description: 'Upgrade your existing home with funds for remodeling, interiors, repairs, and modern enhancements.', image: '/img/megamenu/HomeConstructionLoan.jpg' },
        { key: 'extension', label: 'Home Extension Loan', href: '/home-extension-loan', description: 'Add more space to your home to fit your lifestyle, whether it’s a new room, floor, or extended area.',  image: '/img/megamenu/HomeConstructionLoan.jpg' },
        { key: 'balance', label: 'Balance Transfer Loan', href: '/balance-transfer-loan', description: 'Move your existing home loan to us and reduce your EMIs with better interest rates and smoother repayment.',  image: '/img/megamenu/HomeConstructionLoan.jpg' },
        { key: 'nri', label: 'NRI Home Loan', href: '/nri-loan', description: 'Tailored financing solutions for NRIs to purchase, build, or improve a home in India with simplified documentation.',  image: '/img/megamenu/HomeConstructionLoan.jpg' },
        { key: 'topup', label: 'Top-up Loan', href: '/top-up-loan', description: 'Get additional funds on your existing loan for personal or home needs without extra paperwork.',  image: '/img/megamenu/HomeConstructionLoan.jpg' }
      ]
    },

    { key: 'mortgageLoans', label: 'Mortgage Loans', href: '/mortage-loan' },
    { key: 'pmay', label: 'PMAY 2.0', href: '/pmay2' },

    {
      key: 'partnerUs',
      label: 'Partner Us',
      hasDropdown: true,
      submenu: [
        { label: 'Partner Us', href: '/dsa-partner-program' },
        { label: 'DSA Onboarding', href: '/dsa-onboarding' },
      ]
    },

    {
      key: 'Governance',
      label: 'Governance',
      hasDropdown: true,
      submenu: [
        { key: 'governance', label: 'Governance', href: '/corporate-governance' },
        { key: 'grievances', label: 'Grievances', href: '/grievances' },
        { key: 'risk-classification', label: 'Risk Classification', href: '/risk-classification' },
      ],
    },

    {
      key: 'news',
      label:'News Room',
      hasDropdown: true,
      submenu: [
        { key: 'e-auction', label: 'E-auction', href: '/e-auction' },
        { key: 'ratings', label: 'Ratings Certificate', href: '/rating-certificate' },
        { key: 'information', label: 'Information on Secured Asset', href: '/secured-assets' },
        { key: 'new', label: 'What’s New in AHAM', href: '/blog' },
      ],
    },

    {
      key: 'careers',
      label:'Careers',
      hasDropdown: true,
      submenu: [
      { key: 'careers', label: 'Life @ Aham', href: '/life-at-aham' },
        { key: 'gallery', label: 'Gallery', href: '/aham-moments' },

        { key: 'openings', label: 'Current Openings', href: '/career' },
      ],
    },

    {
      key: 'about',
      label: t('header.navigation.aboutUs'),
      hasDropdown: true,
      submenu: [
        { key: 'aboutUs', label: 'About Aham', href: '/about' },
        { key: 'managementTeam', label: 'Key Principles', href: '/partnership' },
        { key: 'investorinfo', label: 'Investor Info', href: '/investor-info' },
      ],
    },
  ];

  const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/ahamhfc', icon: <FaFacebookF /> },
 //{ name: 'Twitter', href: 'https://twitter.com', icon: <FaTwitter /> },
  { name: 'Instagram', href: 'https://www.instagram.com/aham_housingfinance/', icon: <FaInstagram /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ahamhfc?originalSubdomain=in', icon: <FaLinkedinIn /> },
  { name: 'YouTube', href: 'https://www.youtube.com/@ahamhfc', icon: <FaYoutube /> }
];


  return (
    <>
      {/* TOP BAR (unchanged) */}
      {/* <div className="bg-primary-600 text-white py-2 text-sm flex justify-center gap-6">
        <a href={getPhoneLink()} className="flex items-center gap-2"><PhoneIcon className="h-4" />{t('header.call')}</a>
        <span>|</span>
        <button onClick={() => navigate('/contact')} className="flex items-center gap-2 bg-yellow-500 text-primary-900 px-3 py-1 rounded-full animate-pulse"><MapPinIcon className="h-4" />{t('header.branchLocator')}</button>
        <span>|</span>
         <button onClick={() => navigate('/blog')} className="flex items-center gap-2  ">{t('header.blog')}</button>
        <span>|</span>
        
        
        <button onClick={onCreditScoreClick} className="flex items-center gap-2 bg-yellow-500 text-primary-900 px-3 py-1 rounded-full animate-pulse"><StarIcon className="h-4" />{t('header.creditScore')}</button>
      
      </div> */}

      <div className="bg-primary-600 text-white py-2 text-sm">
  <div className="container mx-auto px-4 flex items-center">

    {/* LEFT SIDE — CENTERED */}
    <div className="flex-1 flex justify-center items-center gap-6">
      
            {/* <button onClick={() => navigate('/scorecard')} className="flex items-center gap-2 bg-yellow-500 text-primary-900 px-3 py-1 rounded-full animate-pulse">
        <StarIcon className="h-4" /> {t('header.annoncement')}
      </button> */}
      <button
          onClick={() => {
            if (window.location.pathname !== "/") {
              // Go home first
              navigate("/");
              // Wait a moment, then scroll
              setTimeout(() => {
                scrollToSection("important-news");
              }, 400);
            } else {
              // Already on home page → just scroll
              scrollToSection("important-news");
            }
          }}
          className="flex items-center gap-2 bg-yellow-500 text-primary-900 px-3 py-1 rounded-full animate-pulse"
        >
          <StarIcon className="h-4" /> {t('header.annoncement')}
        </button>

       <span>|</span>
      
      <a href={getPhoneLink()} className="flex items-center gap-2">
        <PhoneIcon className="h-4" /> {t('header.call')}
      </a>

      <span>|</span>

      <button onClick={() => navigate('/branch-locator')} className="flex items-center gap-2 ">
        <MapPinIcon className="h-4" /> {t('header.branchLocator')}
      </button>

      <span>|</span>

      <button onClick={() => navigate('/blog')} className="flex items-center gap-2">
        {t('header.blog')}
      </button>

      <span>|</span>

      <button onClick={onCreditScoreClick} className="flex items-center gap-2 bg-yellow-500 text-primary-900 px-3 py-1 rounded-full animate-pulse">
        <StarIcon className="h-4" /> {t('header.creditScore')}
      </button>
    </div>

    {/* RIGHT SIDE — SOCIAL ICONS */}
    <div className="flex justify-end items-center gap-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-300 text-lg transition"
        >
          {social.icon}
        </a>
      ))}
    </div>

  </div>
</div>



      {/* MAIN HEADER */}
      <header className={`sticky top-0 z-[9999] ${isScrolled ? 'bg-white/90 backdrop-blur shadow' : 'bg-white'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center h-20">

          <Link to="/"><img src={AhamLogo} className="w-32" alt="Aham" /></Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8">

            {navigationItems.map((item) => (
              <div key={item.key} className="relative"
                onMouseEnter={() => openDropdown(item.key)}
                onMouseLeave={() => closeDropdown()}
              >

                {/* ✅ HOME LOANS → MEGA MENU */}
                {item.megaMenu ? (
                  <>
                    <button className="flex items-center gap-1 hover:text-primary-600 font-medium">
                      {item.label}<ChevronDownIcon className={`h-4 transition ${activeDropdown === item.key ? 'rotate-180' : ''}`} />
                    </button>

                    {activeDropdown === item.key && (
                      <div className="absolute left-0 mt-3 w-[950px] bg-[#E8F3FF] rounded-xl shadow-lg p-6 flex gap-6 z-50">

                        {/* LEFT COLUMN */}
                        <div className="w-1/3 border-r pr-4">
                          {item.submenu.map((loan) => (
                            <div key={loan.key}
                              onMouseEnter={() => setActiveLoanKey(loan.key)}
                              className={`py-3 px-3 rounded-md text-sm cursor-pointer font-medium transition 
                              ${activeLoanKey === loan.key ? "bg-white text-primary-700 shadow" : "hover:bg-white hover:text-primary-700"}`}>
                              {loan.label}
                            </div>
                          ))}
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="w-2/3 flex gap-6 items-start">
                          <div className="w-2/3">
                            <h3 className="text-xl font-semibold text-primary-800 mb-2">
                              {item.submenu.find(l => l.key === activeLoanKey)?.label}
                            </h3>
                            <p className="text-gray-700 mb-4">
                              {item.submenu.find(l => l.key === activeLoanKey)?.description}
                            </p>

                            <div className="flex gap-3">
                              <Link to={item.submenu.find(l => l.key === activeLoanKey)?.href}>
                                <button className="bg-primary-600 text-white px-4 py-2 rounded-md">Explore More</button>
                              </Link>
                              <Link to="/contact">
                                <button className="bg-[#003B95] text-white px-4 py-2 rounded-md">Apply Now</button>
                              </Link>
                            </div>
                          </div>

                          <img src={item.submenu.find(l => l.key === activeLoanKey)?.image} alt=""
                            className="w-40 h-40 rounded-lg object-cover shadow" />

                        </div>

                      </div>
                    )}
                  </>
                ) : (
                  /* ✅ NORMAL DROPDOWNS (UNCHANGED) */
                  <>
                    {item.hasDropdown ? (
                      <>
                        <button className="flex items-center gap-1 hover:text-red-600 font-medium">
                          {item.label}<ChevronDownIcon className="h-4" />
                        </button>

                        {activeDropdown === item.key && (
                          <div className="absolute left-0 mt-3 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
                            {item.submenu.map((subItem, index) => (
                              <button key={index} onClick={() => navigate(subItem.href)}
                                className="block w-full text-left hover:text-red-600 px-4 py-3 text-sm hover:bg-gray-50">
                                {subItem.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <button onClick={() => navigate(item.href)} className="hover:text-red-600 font-medium">
                        {item.label}
                      </button>
                    )}
                  </>
                )}

              </div>
            ))}

          </nav>


          
  {/* ✅ RIGHT SIDE (Add Search + Language) */}
          <div className="hidden md:flex items-center gap-6">

            {/* ✅ Search Icon */}
            <button className="text-gray-700 hover:text-primary-600">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>

            {/* ✅ Language Selector */}
            <div className="relative">
              <button onClick={() => setShowLang(!showLang)} className="flex items-center gap-1 text-gray-700 hover:text-primary-600">
                <GlobeAltIcon className="h-5 w-5" />
                <span>{currentLanguage === "ta" ? "தமிழ்" : "English"}</span>
                <ChevronDownIcon className="h-4" />
              </button>

              <AnimatePresence>
                {showLang && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden z-50"
                  >
                    <button onClick={() => { onLanguageChange("en"); setShowLang(false); }} className="block px-4 py-2 text-left hover:bg-gray-100">
                      English
                    </button>
                    <button onClick={() => { onLanguageChange("#"); setShowLang(false); }} className="block px-4 py-2 text-left hover:bg-gray-100">
                      தமிழ்
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* LOGIN BUTTON ✅ unchanged */}
            <Link to="/customer-360-eligibility-calculator">
              <button className="bg-[#ed2636] text-white px-4 py-2 rounded-lg hover:bg-primary-700">
                {t('header.customerLogin')}
              </button>
            </Link>
          </div>

          {/* MOBILE MENU ICON */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2">
            {isMobileMenuOpen ? <XMarkIcon className="h-6" /> : <Bars3Icon className="h-6" />}
          </button>

        </div>

        {/* ✅ MOBILE MENU (UNCHANGED) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="lg:hidden bg-white shadow-md">
              <div className="px-4 py-3 space-y-2">
                {navigationItems.map((item, index) => (
                  <button key={index} onClick={() => navigate(item.href)} className="block w-full text-left py-2">
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>
    </>
  );
};

export default Header;
