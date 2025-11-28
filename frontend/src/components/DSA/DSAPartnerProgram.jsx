import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon, 
  ChevronDownIcon, 
  ChevronUpIcon,
  UserGroupIcon,
  CurrencyRupeeIcon,
  ClockIcon,
  ChartBarIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
  BanknotesIcon,
  HomeIcon,
  BuildingOfficeIcon,
  UserIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from "react-router-dom";

const DSAPartnerProgram = () => {
  const [activeFAQ, setActiveFAQ] = useState(0);
const navigate = useNavigate();

  // Scroll to section helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  

  // Value Propositions
  const valuePropositions = [
    {
      icon: BanknotesIcon,
      title: 'Attractive Pay-outs & On-Time Payments',
      description: 'Earn competitive referral incentives with transparent and timely payouts on every disbursed loan.',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: ClockIcon,
      title: 'Quick Loan Approvals',
      description: 'Our interview-based scorecard assessment helps evaluate customers with informal income, leading to faster approvals and higher conversions.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: HomeIcon,
      title: 'High Demand Products',
      description: 'We specialize in affordable housing loans with flexible documentation options for various needs including purchase, construction, renovation, and more.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Simple, Hassle-Free Process',
      description: 'Share leads easily through WhatsApp, phone, or simple online form. Track updates through our team.',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  // Loan Products
  const loanProducts = [
    'Purchase of a new home/flat',
    'Purchase of a resale home/flat',
    'Home construction',
    'House renovation',
    'Home improvement (Painting, Interior work, Repair work etc.)',
    'Plot + construction',
    'Balance transfer',
    'Home loans for NRI (salaried only)',
    'Top-up loan',
    'Mortgage loan'
  ];

  // Partner Types
  const partnerTypes = [
    { icon: UserGroupIcon, title: 'Direct Selling Agents (DSAs)', color: 'text-blue-600' },
    { icon: BuildingOfficeIcon, title: 'Real estate brokers / developers / builders', color: 'text-green-600' },
    { icon: ChartBarIcon, title: 'Financial consultants', color: 'text-purple-600' },
    { icon: DocumentTextIcon, title: 'Chartered accountants', color: 'text-orange-600' },
    { icon: HomeIcon, title: 'Grocery shop owners', color: 'text-pink-600' },
    { icon: UserIcon, title: 'Community influencers', color: 'text-indigo-600' },
    { icon: BriefcaseIcon, title: 'Self-employed individuals', color: 'text-cyan-600' },
    { icon: UserIcon, title: 'Working professionals who want additional income', color: 'text-teal-600' },
    { icon: BuildingOfficeIcon, title: 'Technical vendor', color: 'text-red-600' },
    { icon: DocumentCheckIcon, title: 'Legal vendor', color: 'text-yellow-600' },
    { icon: ShieldCheckIcon, title: 'RCU Vendor', color: 'text-lime-600' },
    { icon: UserGroupIcon, title: 'Loan Referral Agents', color: 'text-emerald-600' }
  ];

  // Partnership Steps
  const partnershipSteps = [
    {
      step: '1',
      title: 'Register as a Partner',
      description: 'Fill out the online form and our team will connect with you.',
      icon: DocumentTextIcon,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '2',
      title: 'Share Customer Leads',
      description: 'Provide basic customer details via WhatsApp, form, or phone.',
      icon: UserGroupIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '3',
      title: 'We Process the Loan Quickly',
      description: 'Our credit team connects with the customer, evaluates eligibility, and processes the loan.',
      icon: ChartBarIcon,
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '4',
      title: 'You Earn Incentives',
      description: 'You get paid for every loan successfully disbursed. Fast, transparent, and reliable.',
      icon: CurrencyRupeeIcon,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  // Success Stories
  const successStories = [
    {
      name: 'Suresh',
      role: 'Real Estate Agent',
      location: 'Chennai',
      testimonial: 'Aham HFC helped me grow my DSA business with quick approvals and transparent payouts. Their support team is excellent.',
      rating: 5
    },
    {
      name: 'Rajan',
      role: 'Retail Business Owner',
      location: 'Bangalore',
      testimonial: 'As a small shop owner, referring customers was easy. The incentives helped me create another income stream.',
      rating: 5
    }
  ];

  // Registration Requirements
  const registrationRequirements = [
    'Basic KYC (Aadhaar, PAN)',
    'Bank details for payouts',
    'Signed partner agreement (shared after registration)'
  ];

  // Partner Resources
  const partnerResources = [
    { name: 'Product brochure', type: 'PDF', size: '2.5 MB' },
    { name: 'Partner agreement form', type: 'PDF', size: '1.2 MB' }
  ];

  // FAQs - Placeholder
  const faqs = [
    {
      question: 'What is the DSA partner program?',
      answer: 'The DSA (Direct Selling Agent) partner program allows individuals and organizations to earn attractive incentives by referring potential home loan customers to Aham Housing Finance. You act as a bridge between customers and our services.'
    },
    {
      question: 'How much can I earn as a partner?',
      answer: 'Your earnings depend on the number and value of loans disbursed through your referrals. We offer competitive pay-out structures with transparent terms. Contact our partnership manager for detailed incentive information.'
    },
    {
      question: 'Is there any registration fee?',
      answer: 'No, there is absolutely no registration fee to become an Aham HFC partner. The onboarding process is completely free of cost.'
    },
    {
      question: 'How do I track my referrals?',
      answer: 'Once you refer a customer, our dedicated relationship manager will keep you updated on the loan application status. You can also reach out to your assigned partner support contact anytime.'
    },
    {
      question: 'What kind of support and training do you provide?',
      answer: 'We provide comprehensive product training, marketing materials, dedicated relationship managers, and ongoing support to help you succeed as a partner. Regular updates on products and policies are also shared.'
    },
    {
      question: 'In which locations does Aham HFC operate?',
      answer: 'Aham Housing Finance currently serves customers across Tamil Nadu, Karnataka, Telangana, and Andhra Pradesh. We are continuously expanding our reach to serve more customers.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/ahamlife/Team-banner.webp')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-700/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Partner With Aham Housing Finance
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-medium max-w-4xl mx-auto leading-relaxed">
              Grow your income by helping families achieve their dream of home ownership
            </p>
            {/* <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('become-partner')}
                className="bg-white text-primary-600 hover:bg-primary-50 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                Register Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('why-partner')}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Sticky Navigation */}
      {/* <div className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200"> */}
      <div className="sticky top-[80px] z-50 bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide py-4 gap-2">
            {[
              { id: 'why-partner', label: 'Why Partner' },
              { id: 'who-can-join', label: 'Who Can Join' },
              { id: 'how-it-works', label: 'How It Works' },
              { id: 'support-training', label: 'Support & Training' },
              { id: 'success-stories', label: 'Success Stories' },
              { id: 'resources', label: 'Resources' },
              { id: 'requirements', label: 'Requirements' },
              { id: 'become-partner', label: 'Register' },
              { id: 'faq', label: 'FAQ' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className="whitespace-nowrap px-6 py-2 rounded-full font-semibold text-sm transition-all hover:bg-primary-100 hover:text-primary-700 text-gray-600"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xl text-gray-700 leading-relaxed">
              Aham Housing Finance invites channel partners or DSAs who can be real-estate agents, community leaders, 
              and individuals with strong local networks to join our partnership program. Refer customers looking for 
              <span className="font-semibold text-primary-600"> affordable home loans up to ₹50 lakhs</span>—even without formal income proofs—and 
              earn attractive incentives on every successful loan disbursement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sub Menu 1: Why Partner with Us */}
      <section id="why-partner" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Why Partner with Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strong value propositions that help you grow faster
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {valuePropositions.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${prop.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <prop.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* High Demand Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 max-w-5xl mx-auto bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-10"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              High Demand Products
            </h3>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We specialize in affordable housing loans for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {loanProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-soft"
                >
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{product}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-6 text-center italic">
              All with flexible documentation options
            </p>
          </motion.div>

          {/* Additional Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200"
            >
              <div className="w-14 h-14 rounded-xl bg-green-600 flex items-center justify-center mb-4">
                <SparklesIcon className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Simple, Hassle-Free Process
              </h4>
              <p className="text-gray-700">
                Share leads easily through WhatsApp, phone, or simple online form. Track updates through our team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                <AcademicCapIcon className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Dedicated Partner Support
              </h4>
              <p className="text-gray-700">
                You get access to relationship managers, product training, and constant guidance throughout the journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sub Menu 2: Who Can Become a Partner */}
      <section id="who-can-join" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Who Can Become a Partner?
            </h2>
            <p className="text-xl text-gray-600">
              Anyone with a good customer network can join!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl p-6 shadow-soft hover:shadow-large transition-all duration-300 border border-gray-100 hover:border-primary-200"
              >
                <type.icon className={`h-12 w-12 ${type.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-lg font-semibold text-gray-800">
                  {type.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg">
              <p className="text-lg font-semibold">
                ✨ No registration fee. No prior financial experience needed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sub Menu 3: How Partnership Works */}
      <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              How Partnership Works
            </h2>
            <p className="text-xl text-gray-600">
              A simple 4-step process designed for convenience
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-large hover:shadow-colored transition-all duration-300 border border-gray-100 h-full">
                    {/* Step Number */}
                    <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 ml-8`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for desktop */}
                  {index < partnershipSteps.length - 1 && index % 2 === 0 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <ArrowRightIcon className="h-8 w-8 text-primary-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-2xl font-semibold text-primary-600">
                Fast, transparent, and reliable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sub Menu 4: Support & Training */}
      <section id="support-training" className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Support & Training
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive resources to help you succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-large hover:shadow-colored transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6">
                <AcademicCapIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Product Training
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive training on all our loan products, eligibility criteria, documentation requirements, 
                and application processes to help you guide customers effectively.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-large hover:shadow-colored transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6">
                <UserGroupIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Dedicated Relationship Manager
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Each partner is assigned a dedicated relationship manager who provides ongoing support, 
                answers queries, and helps track application progress.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-large hover:shadow-colored transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6">
                <DocumentTextIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Marketing Materials
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access to professionally designed brochures, presentations, and digital marketing materials 
                to help you effectively promote our products to potential customers.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-large"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Ongoing Partner Development
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Regular updates on new products, policies, and market trends</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Quarterly webinars and training sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Performance incentives and recognition programs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">24/7 partner support helpline</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Sub Menu 5: Partner Success Stories */}
      <section id="success-stories" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Partner Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our successful partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-large hover:shadow-colored transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  "{story.testimonial}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-900 font-bold">— {story.name}</p>
                  <p className="text-gray-600 text-sm">{story.role} ({story.location})</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub Menu 6: Partner Resources */}
      <section id="resources" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Partner Resources
            </h2>
            <p className="text-xl text-gray-600">
              Download essential materials to get started
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {partnerResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 shadow-soft hover:shadow-large transition-all duration-300 border border-gray-200 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                    <DocumentTextIcon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {resource.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {resource.type} • {resource.size}
                    </p>
                  </div>
                </div>
                <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub Menu 7: Partner Registration Requirements */}
      <section id="requirements" className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Partner Registration Requirements
            </h2>
            <p className="text-xl text-gray-600">
              Simple documentation to get you started
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-large"
            >
              <p className="text-lg text-gray-700 mb-8 text-center">
                To onboard as an official partner, you simply need:
              </p>
              <div className="space-y-6">
                {registrationRequirements.map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-xl"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-lg font-semibold text-gray-800">{req}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <p className="text-lg font-semibold text-green-600">
                  ✓ No hidden fees. No complex documentation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sub Menu 8: Become a Partner (CTA Section) */}
     <section id="become-partner" className=" bg-gray-50">
  <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">

    {/* LEFT MAIN CARD */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="lg:col-span-2 bg-white shadow-lg rounded-2xl p-8 border border-gray-200"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-5">
        Partner with Aham Housing Finance
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Join our DSA network — fast digital onboarding, automated KYC verification,
        paperless e-sign and instant notifications.
      </p>

      {/* Who can apply */}
      <div className="mb-4">
        <p className="font-bold text-gray-800">Who can apply:</p>
        <p className="text-gray-700">
          Individuals, Proprietorships, Partnerships, Pvt. Ltd companies
        </p>
      </div>

      {/* Documents */}
      <div className="mb-4">
        <p className="font-bold text-gray-800">Documents:</p>
        <p className="text-gray-700">
          PAN, Aadhaar, Proof of Address, Cancelled Cheque, Photograph
        </p>
      </div>

      {/* Process */}
      <div className="mb-6">
        <p className="font-bold text-gray-800">Process:</p>
        <p className="text-gray-700">
          Register → Verify OTP → Basic & Bank details → Upload Documents → eSign Agreement
        </p>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-4 mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contact")}
          className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold shadow-md"
        >
          Partner With Us
        </motion.button>

        {/* <button className="border border-gray-300 px-7 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition">
          Download HTML
        </button> */}
      </div>
    </motion.div>

    {/* RIGHT SIDE BOXES */}
    <div className="flex flex-col gap-6">

      {/* QUICK START */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white shadow-lg border border-gray-200 rounded-xl p-6"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Start</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          Click start to begin the digital onboarding flow. This is a prototype — integrations are simulated.
        </p>

        <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-lg font-semibold">
          Start Registration
        </button>
      </motion.div>

      {/* SUPPORT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-white shadow-lg border border-gray-200 rounded-xl p-6"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-2">Support</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          For actual implementation, provide DigiLocker & eSign provider credentials
          to integrate live services.
        </p>
      </motion.div>

    </div>
  </div>
</section>


<section id="dsa-registration" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 max-w-5xl">

    {/* Tabs */}
    {/* <div className="flex flex-wrap gap-3 mb-8">
      {["Registration", "Basic", "Bank", "Documents", "Agreement"].map((tab) => (
        <button
          key={tab}
          className={`
            px-6 py-2 rounded-full font-semibold text-sm 
            ${tab === "Registration"
              ? "bg-primary-600 text-white shadow"
              : "bg-white border text-gray-600"} 
          `}
        >
          {tab}
        </button>
      ))}
    </div> */}

    {/* FORM CARD */}
    <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Register — Contact Verification
      </h3>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Full Name */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Your full name"
            className="border rounded-lg px-4 py-3 focus:ring-primary-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="border rounded-lg px-4 py-3 focus:ring-primary-500 focus:outline-none"
          />
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-1">Mobile Number</label>
          <input
            type="tel"
            placeholder="10-digit mobile"
            className="border rounded-lg px-4 py-3 focus:ring-primary-500 focus:outline-none"
          />
        </div>

        {/* PIN Code */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-1">PIN Code</label>
          <input
            type="number"
            placeholder="560001"
            className="border rounded-lg px-4 py-3 focus:ring-primary-500 focus:outline-none"
          />
        </div>

        {/* Sourcing City */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-1">Sourcing City</label>
          <input
            type="text"
            placeholder="City name"
            className="border rounded-lg px-4 py-3 focus:ring-primary-500 focus:outline-none"
          />
        </div>

        {/* Business Type */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-1">Business Type</label>
          <select className="border rounded-lg px-4 py-3 focus:ring-primary-500 focus:outline-none">
            <option>DSA</option>
            <option>Proprietorship</option>
            <option>Partnership Firm</option>
            <option>Pvt. Ltd Company</option>
          </select>
        </div>

        {/* Button Row */}
        <div className="md:col-span-2 flex  mt-6">
          <button
            type="submit"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  </div>
</section>



      {/* Sub Menu 9: FAQs */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our partner program
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {activeFAQ === index ? (
                    <ChevronUpIcon className="h-6 w-6 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon className="h-6 w-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {activeFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Partnership Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of successful partners earning with Aham Housing Finance
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('become-partner')}
              className="bg-white text-primary-600 hover:bg-primary-50 px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl inline-flex items-center gap-3"
            >
              Get Started Today
              <ArrowRightIcon className="h-6 w-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DSAPartnerProgram;
