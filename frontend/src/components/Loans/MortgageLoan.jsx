import React, { useState, useEffect  } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { CheckCircle, User, Briefcase, DollarSign, Ruler , FileText, Globe, Star, Shield, Home } from "lucide-react";
import { 
  HomeIcon, 
  CurrencyRupeeIcon, 
  ClockIcon, 
  ShieldCheckIcon,
  DocumentTextIcon,
  ChartBarIcon,
  BanknotesIcon
} from '@heroicons/react/24/solid';

import { useTranslation } from 'react-i18next';

const MortgageLoan = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [activeTab, setActiveTab] = useState('common');
  const [activeFAQ, setActiveFAQ] = useState(0);  // OPEN FIRST FAQ BY DEFAULT
  const [activeCalc, setActiveCalc] = useState("overview");
  

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  // Key Benefits Data
  const benefits = [
    {
      icon: BanknotesIcon,
      title: 'Loan up to ₹30 Lakhs',
      description: 'Get substantial funding for your dream home construction'
    },
    {
      icon: ClockIcon,
      title: 'Tenure up to 20 Years',
      description: 'Flexible repayment options that suit your financial planning'
    },
    {
      icon: ChartBarIcon,
      title: 'Disbursement Linked to Progress',
      description: 'Funds released based on construction milestones'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Competitive Interest Rates',
      description: 'Enjoy attractive rates designed for your benefit'
    },
    {
      icon: CurrencyRupeeIcon,
      title: 'No Prepayment Penalty',
      description: 'Pay off your loan early without any additional charges'
    },
    {
      icon: HomeIcon,
      title: 'Covers Renovation & Repair',
      description: 'Finance both new construction and home improvements'
    }
  ];

  // Eligibility Criteria
  const eligibility = [
    'Age: 21 to 65 years',
    'Indian Residents or NRIs',
    'Salaried, Self-Employed, or Business Professionals',
    'Stable income source',
    'Approved construction plan and building permit',
    'Clear land title',
    'Good credit history preferred but not mandatory',
      "Minimum plot size requirement",
  ];
  // Matching icons & colors for each item
const icons = [
  { icon: <User />, from: "from-blue-500", to: "to-cyan-400" },
  { icon: <Globe />, from: "from-green-500", to: "to-lime-400" },
  { icon: <Briefcase />, from: "from-pink-500", to: "to-rose-400" },
  { icon: <DollarSign />, from: "from-orange-500", to: "to-amber-400" },
  { icon: <FileText />, from: "from-purple-500", to: "to-indigo-400" },
  { icon: <Shield />, from: "from-teal-500", to: "to-emerald-400" },
  { icon: <Star />, from: "from-yellow-500", to: "to-orange-400" },
  { icon: <Ruler />, from: "from-red-500", to: "to-orange-400" },
];

  // Documents Required
  const documents = {
    common: [
      'Identity Proof (Aadhaar, PAN, Passport, Voter ID)',
      'Address Proof (Utility Bills, Aadhaar)',
      'Recent Passport-size Photographs',
      'Bank Statements (Last 6 months)'
    ],
    salaried: [
      'Last 3 Months Salary Slips',
      'Form 16 / IT Returns (Last 2 Years)',
      'Employment Letter / Appointment Letter',
      'Employee ID Card'
    ],
    selfEmployed: [
      'Business Registration Documents',
      'IT Returns / Audited Financials (Last 2-3 Years)',
      'GST Returns (if applicable)',
      'Business Address Proof',
      'Bank Statements of Business Account',
       "Business License / Trade License" 
    ],
    nri: [
      'Valid Passport & Visa',
      'Overseas Address Proof',
      'NRE/NRO Bank Statements',
      'Employment Contract / Proof of Income Abroad',
      'Power of Attorney (if applicable)',
       "OCI/PIO Card (if applicable)"
    ],
    property: [
      'Land Purchase Agreement / Sale Deed',
      'Title Deed & Encumbrance Certificate',
      'Approved Building Plan from Local Authority',
      'NOC from Society / Local Authority',
      'Construction Estimate / Cost Sheet',
      'Property Tax Receipts',
      'Land Survey Documents',
      "Soil Test Report (if applicable)" 
    ]
  };

  // FAQs
  const faqs = [
    {
      question: 'What is a Home Construction Loan?',
      answer: 'A Home Construction Loan helps you build a new house on a plot of land you already own. AHAM Housing Finance provides funds in stages as construction progresses, ensuring financial support throughout your building journey.'
    },
    {
      question: 'Do I need income proof to apply?',
      answer: 'At AHAM, we understand that not everyone has traditional income documents. While having ITR or salary slips helps expedite approval, we also consider alternative income verification methods to support your loan application.'
    },
    {
      question: 'How is the loan amount disbursed?',
      answer: 'The loan is disbursed in stages based on construction progress. Typically: 20% on completion of foundation, 35% on completion of lintel level, 25% on completion of roof, and 20% on final completion. Our team conducts site inspections before each disbursement.'
    },
    {
      question: 'What is the maximum loan tenure?',
      answer: 'AHAM offers flexible repayment tenures of up to 20 years, allowing you to choose a repayment schedule that aligns with your financial capabilities and future plans.'
    },
    {
      question: 'Can I prepay my loan without penalty?',
      answer: 'Yes! AHAM Housing Finance does not charge any prepayment penalty. You can pay off your loan partially or fully at any time without incurring additional costs, helping you save on interest.'
    },
    {
      question: 'What if I already own land?',
      answer: 'Perfect! Our Home Construction Loan is designed for individuals who own a plot or land and wish to construct a residential property on it. Just ensure you have clear land title and approved building plans.'
    },
    {
      question: 'Are NRIs eligible for this loan?',
      answer: 'Yes, NRIs are eligible to apply for Home Construction Loans from AHAM. You will need to provide documents such as passport, visa, overseas address proof, and NRE/NRO bank statements along with standard property documents.'
    },
    {
      question: 'How long does the approval process take?',
      answer: 'AHAM strives for quick and efficient processing. Once all documents are submitted, loan approval typically takes 7-10 working days. Our dedicated team works to minimize delays and keep you informed throughout the process.'
    },
    {
      question: 'Can I use the loan for renovation or extension?',
      answer: 'Yes! In addition to new construction, AHAM Home Construction Loans can also be used for significant home renovations, extensions, or repairs to your existing property, giving you flexibility in how you use the funds.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };


  // Scroll Event Listener to auto-switch active tab
useEffect(() => {
  const handleScroll = () => {
    const sections = ["overview","benefits", "eligibility", "documents", "interest","faq"];

    sections.forEach((sec) => {
      const element = document.getElementById(sec);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveCalc(sec);
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (!element) return;

  const headerHeight = 120; // top navbar + sticky navbar height

  const elementPosition =
    element.getBoundingClientRect().top + window.pageYOffset;

  const offsetPosition = elementPosition - headerHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};



  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="relative h-[650px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(img/loan-banners/Mortgage-loan.webp)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/80 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Unlock Your Property’s Value with AHAM Mortgage Loan
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get high-value funding for business or personal needs by pledging your residential property at competitive rates.

            </p>
           <div className="flex flex-col sm:flex-row gap-4">

  <a href="https://aham.mbwhost.in/contact">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-large"
    >
      Apply Now
    </motion.button>
  </a>

  <a href="https://aham.mbwhost.in/customer-360-eligibility-calculator">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
    >
      Check Eligibility
    </motion.button>
  </a>

      </div>

          </motion.div>
        </div>
      </section>


      {/* Sticky Finance Navigation */}
<div className="w-full  py-3 sticky top-[80px] z-50">
  <div className="container mx-auto px-1">
   
    <div className="w-full bg-white rounded-full shadow-lg flex flex-wrap justify-center gap-2 md:gap-6 py-3 px-4">

      {[
         { id: "overview", label: "Overview" },
        { id: "benefits", label: "Benefits" },
        { id: "eligibility", label: "Loan Eligibility Calculator" },
        { id: "documents", label: "Documents" },
        { id: "interest", label: "Interest" },
         { id: "faq", label: "FAQ" }
      ].map((tab) => (
       <button
  key={tab.id}
  onClick={() => {
    setActiveCalc(tab.id);
    scrollToSection(tab.id); // ONLY this — smooth scroll with offset
  }}
  className={`
    px-6 py-2 rounded-full font-semibold transition-all 
    ${
      activeCalc === tab.id
        ? "bg-yellow-400 text-blue-800 shadow-lg scale-105"
        : "text-gray-500 hover:text-blue-700"
    }
  `}
>
  {tab.label}
</button>

      ))}
    </div>
  </div>
</div>


      {/* Overview Section */}
      <section id="overview" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Home Construction Loan
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Building your dream home is a significant milestone, and AHAM Housing Finance is here to make it easier. Our <strong>Home Construction Loan</strong> is designed to provide financial assistance for constructing a new house on land you already own.
                </p>
                <p>
                  Whether you're planning a simple structure or a luxury villa, we offer flexible loan options tailored to your construction needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                    <span><strong>No strict income proof requirements</strong> – We understand your unique financial situation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                    <span><strong>Flexible disbursement</strong> – Funds released in stages as construction progresses</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                    <span><strong>Competitive interest rates</strong> – Affordable rates designed to suit your budget</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                    <span><strong>Quick approval process</strong> – Fast-track processing to get you started sooner</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="img/loan-overview/Mortgage-loan.webp"
                alt="Home Construction"
                className="rounded-2xl shadow-large w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>





      {/* Key Benefits Section */}
     <section id="benefits" className="relative py-24 overflow-hidden">

      {/* 🔥 Background – gradient + subtle pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-1"
        style={{
          backgroundImage:
            "url('/img/ahamlife/Team-banner.webp')",
        }}
      ></div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-white/70 to-white"></div>

      <div className="relative container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl text-white font-extrabold bg-gradient-to-r from-primary-700 to-primary-500 text-transparent bg-clip-text drop-shadow-lg">
            Key Benefits & Features
          </h2>
          <p className="text-xl text-white mt-4 max-w-3xl mx-auto leading-relaxed">
            Discover why AHAM Home Construction Loan is the right choice for
            building your dream home
          </p>
        </motion.div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Floating Glow */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full blur-3xl opacity-20"></div>

              {/* Icon */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <benefit.icon className="h-9 w-9 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="/contact">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#ed2636] hover:bg-primary-700 text-white px-10 py-4 rounded-2xl font-semibold text-xl shadow-xl transition-all"
            >
              Request a Quote
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>

      {/* Eligibility Criteria Section */}
        <section id="eligibility" className="py-24 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">

      {/* Soft Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-300/20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-1.5 bg-primary-100 text-primary-700 rounded-full font-medium shadow-sm"
          >
            Loan Eligibility
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold text-gray-900 mt-4 tracking-tight"
          >
            Eligibility Criteria
          </motion.h2>

          <p className="text-lg text-gray-600 mt-3">
            Find out if you're eligible for AHAM Home Construction Loan
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eligibility.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                group backdrop-blur-xl bg-white/70 
                border border-white/40 shadow-xl rounded-2xl 
                p-6 flex items-start gap-5 
                hover:-translate-y-2 hover:shadow-2xl 
                transition-all duration-300
              "
            >
              {/* Gradient Icon */}
              <div
                className={`
                  w-14 h-14 rounded-xl flex items-center justify-center 
                  bg-gradient-to-br ${icons[index].from} ${icons[index].to}
                  text-white shadow-lg group-hover:scale-105 transition
                `}
              >
                {icons[index].icon}
              </div>

              <div className="flex-1">
                <p className="text-gray-800 font-semibold text-lg">
                  {item}
                </p>
              </div>

              {/* Right Check Icon */}
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
           <a href="/customer-360-eligibility-calculator">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="
              px-10 py-4 rounded-full text-white font-semibold 
             bg-[#ed2636]
              shadow-lg hover:bg-primary-600 transition
            "
          >
            Check Your Eligibility Now
          </motion.button>
          </a>
        </div>

      </div>
    </section>

      {/* Documents Required Section */}
     <section id="documents" className="py-24 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">

  {/* Background blur circles */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-300/20 blur-3xl rounded-full"></div>

  <div className="container mx-auto px-6 relative z-10">
    
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
        Documents Required
      </h2>
      <p className="text-xl text-gray-600">
        Keep these documents ready for a smooth application process
      </p>
    </motion.div>

    <div className="max-w-6xl mx-auto">

      {/* Premium Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          { key: "common", label: "Common", icon: <FileText /> },
          { key: "salaried", label: "Salaried", icon: <Briefcase /> },
          { key: "selfEmployed", label: "Self-Employed", icon: <User /> },
          { key: "nri", label: "NRI", icon: <Globe /> },
          { key: "property", label: "Property", icon: <Home /> },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-xl
              border border-white/40 shadow-lg
              ${activeTab === tab.key
                ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white scale-105 shadow-primary/50"
                : "bg-white/70 text-gray-700 hover:bg-white/90"
              }
            `}
          >
            <span className="text-lg">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Card */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-xl bg-white/70 p-10 rounded-3xl border border-white/40 shadow-xl"
      >
        <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents[activeTab].map((doc, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="
                flex items-start gap-4 
                p-5 bg-gradient-to-br from-white to-gray-50 
                rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200
              "
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center shadow-inner">
                <FileText className="h-6 w-6" />
              </div>
              <span className="text-gray-900 font-semibold">{doc}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

    </div>
  </div>
</section>


      {/* Interest Rates Section */}
     <section
  id="interest"
  className="relative py-24 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden"
>
  {/* Decorative Blurs */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl opacity-40"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl opacity-30"></div>

  <div className="container mx-auto px-6 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto text-center"
    >
      {/* Title */}
      <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight drop-shadow-xl">
        Affordable Home Loan 
        <span className="block text-primary-200 mt-2">Interest Rates</span>
      </h2>

      {/* Description Section */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 md:p-14 shadow-2xl">
        <p className="text-xl text-white/90 leading-relaxed mb-6">
          AHAM Housing Finance brings you transparent, competitive, and customer-friendly interest rates designed to make home construction affordable and stress-free.
        </p>

        <div className="grid md:grid-cols-3 gap-8 my-10">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-lg shadow-lg"
          >
            <div className="text-3xl mb-3">🏠</div>
            <h4 className="text-xl font-semibold mb-2">Flexible Rates</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              Rates tailored based on loan amount, tenure, credit profile & location.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-lg shadow-lg"
          >
            <div className="text-3xl mb-3">🔍</div>
            <h4 className="text-xl font-semibold mb-2">100% Transparency</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              No hidden fees. No surprise charges. Complete clarity from start to finish.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-lg shadow-lg"
          >
            <div className="text-3xl mb-3">🤝</div>
            <h4 className="text-xl font-semibold mb-2">Dedicated Support</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              Our expert team guides you at every stage of your construction journey.
            </p>
          </motion.div>
        </div>

        {/* Final Message */}
        <p className="text-lg text-white/85 mb-10 leading-relaxed">
          Begin your home construction journey with confidence and clarity.  
          AHAM ensures the process is smooth, transparent, and tailored to your needs.
        </p>

        {/* CTA Button */}
        <motion.a
          href="https://aham.mbwhost.in/emi-calculator"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#ed2636] text-white-700 hover:text-black hover:bg-primary-50 px-10 py-4 rounded-xl font-semibold text-xl transition-all duration-300 shadow-xl"
        >
          Calculate EMI
        </motion.a>
      </div>
    </motion.div>
  </div>
</section>


      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about Home Construction Loan
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeFAQ === index
                      ? 'bg-primary-50 border-2 border-primary-600'
                      : 'bg-gray-50 border-2 border-transparent hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {activeFAQ === index ? (
                      <ChevronUpIcon className="h-6 w-6 text-primary-600 flex-shrink-0" />
                    ) : (
                      <ChevronDownIcon className="h-6 w-6 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                  {activeFAQ === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-700 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(img/construction-loan/home-construction-loan.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Building Your Dream Home?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
              Take the first step towards constructing your perfect home with AHAM's hassle-free loan process
            </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
  {/* <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-large"
  >
    Apply Now
  </motion.button> */}
<motion.a
href="https://aham.mbwhost.in/contact"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[#ed2636] text-white-600 hover:text-black hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-large"
  >
   Talk to Our Loan Expert
  </motion.a>
  
  {/* <motion.a
      href="https://aham.mbwhost.in/contact"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-block"
  >
    Talk to Our Loan Expert
  </motion.a> */}
</div>

          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default MortgageLoan;