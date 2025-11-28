// src/App.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import HeroSection from './components/Hero/HeroSection';
import FloatingActions from './components/FloatingActions/FloatingActions';
import WhyChooseSection from './components/WhyChoose/WhyChooseSection';
import ProductsSection from './components/Products/ProductsSection';
import EMICalculatorSection from './components/EMICalculator/EMICalculatorSection';
import EligibilityScorecardSection from './components/EligibilityScorecard/EligibilityScorecardSection';
import TestimonialsSection from './components/Testimonials/TestimonialsSection';
import BlogSection from './components/Blog/BlogSection';
import ImportantNewsSection from './components/Annonuncement/ImportantNewsSection';  //new scrolling section
import Footer from './components/Footer/Footer';
import PMAY2Page from './components/PMAY/PMAY2Page';
import PartnerWithUs from './components/Partner/PartnerWithUs';
import Governance from './components/Goverence/goverence';
import EMICalculatorPage from './components/EMICalculator/EMICalculatorPage';
import Career from './components/Career/Career';
import AboutUs from './components/About/AboutUs';
import HomeConstructionLoanPage from './components/Loans/HomeConstructionLoanPage.jsx';
import JobDetails from './components/Career/JobDetails';
import ContactUs from "./components/Contact/ContactUs";
import Customer360EligibilityCalculator from "./components/Customer360EligibilityCalculator/Customer360EligibilityCalculator";
import ManagementTeamSection from './components/ManagementTeam/ManagementTeamSection';
import Directors from "./components/Directors/Directors";
import Blog from './components/Blog/Blog';
import RiskClassification from "./components/RiskClassification/RiskClassification";
import Faq from "./components/Faq/faq";
import LifeAham from "./components/Life@Aham/LifeAtAham.js";
import AhamMoments from "./components/Gallery/AhamMoments";
import InvestorInfo from "./components/InvestorInfo/InvestorInfo";
import Grievances from "./components/Grievances/GrievancesRedressal";
import DSAOnboarding from "./components/DSA/DSAOnboarding";

import EAuction from "./components/EAuction/EAuction";
import RatingCertificate from "./components/Rating/RatingCertificate";
import SecuredAssets from "./components/SecuredAssets/SecuredAssets";
import CorporateGovernance from "./components/Corporate/CorporateGovernance";
import Leadership from "./components/Partnership/LeadershipPage.jsx";


import HomeCompositeLoanPage from './components/Loans/CompositeLoanPage.jsx';
import NRILoanPage from './components/Loans/NRILoanPage.jsx';
import HomePurchaseLoanPage from './components/Loans/HomePurchaseLoanPage.jsx';
import HomeRenovationLoanPage from './components/Loans/HomeRenovationLoanpage.jsx';
import HomeExtensionLoanPage from './components/Loans/HomeExtensionLoanPage.jsx';
import BalanceTransferLoan from './components/Loans/BalanceTransferLoan.jsx';
import TopUpLoan from './components/Loans/TopUpLoan.jsx';
import MortgageLoan from './components/Loans/MortgageLoan.jsx';

import DSAPartnerProgram from "./components/DSA/DSAPartnerProgram";   
import BlogInner from './components/Blog/BlogInner';
import BranchLocator from "./components/BranchLocator/BranchLocator";

// Modals
import EnquiryModal from './components/Modals/EnquiryModal';
import CreditScoreModal from './components/Modals/CreditScoreModal';

// Utils
import { scrollToSection } from './utils/helpers';

function App() {
  const { i18n } = useTranslation();

  // State
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [showCreditScoreModal, setShowCreditScoreModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [selectedJob, setSelectedJob] = useState(null); // For career page

  // Language handling
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    document.documentElement.lang = lang;
    if (lang === 'ta') {
      document.body.classList.add('font-tamil');
    } else {
      document.body.classList.remove('font-tamil');
    }
  };

  useEffect(() => {
    handleLanguageChange(i18n.language);
  }, [i18n.language]);

  // Scroll to top on route change
  useEffect(() => {
    const handleRouteChange = () => window.scrollTo(0, 0);
    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#283079',
              color: '#ffffff',
              fontSize: '14px',
              borderRadius: '8px',
              padding: '12px 16px',
            },
            success: { iconTheme: { primary: '#10B981', secondary: '#ffffff' } },
            error: { iconTheme: { primary: '#EF4444', secondary: '#ffffff' } },
          }}
        />

        <Routes>
          {/* Home Page */}
          <Route
            path="/*"
            element={
              <>
                <Header
                  currentLanguage={currentLanguage}
                  onLanguageChange={handleLanguageChange}
                  onCreditScoreClick={() => setShowCreditScoreModal(true)}
                />
                <main className="overflow-hidden">
                  <HeroSection onEnquiryClick={() => setShowEnquiryModal(true)} />
                  <WhyChooseSection />
                  <ProductsSection />
                  <EMICalculatorSection />
                  <EligibilityScorecardSection />
                  <TestimonialsSection />
                  <BlogSection />
                     <ImportantNewsSection />
                </main>
                <Footer />
                <FloatingActions
                  onEnquiryClick={() => setShowEnquiryModal(true)}
                  onEMIClick={() => scrollToSection('emi-calculator')}
                  onScorecardClick={() => scrollToSection('eligibility-scorecard')}
                />
                {showEnquiryModal && (
                  <EnquiryModal isOpen={showEnquiryModal} onClose={() => setShowEnquiryModal(false)} />
                )}
                {showCreditScoreModal && (
                  <CreditScoreModal isOpen={showCreditScoreModal} onClose={() => setShowCreditScoreModal(false)} />
                )}
              </>
            }
          />

          {/* EMI Calculator Full Page */}
          <Route
            path="/emi-calculator"
            element={
              <>
                <Header
                  currentLanguage={currentLanguage}
                  onLanguageChange={handleLanguageChange}
                  onCreditScoreClick={() => setShowCreditScoreModal(true)}
                />
                <EMICalculatorPage />
                <Footer />
              </>
            }
          />

          {/* Home Construction Loan Page */}
          <Route
            path="/home-construction-loan"
            element={
              <>
                <Header
                  currentLanguage={currentLanguage}
                  onLanguageChange={handleLanguageChange}
                  onCreditScoreClick={() => setShowCreditScoreModal(true)}
                />
                <HomeConstructionLoanPage />
                <Footer />
              </>
            }
          />

          {/* Other Pages */}
          <Route
            path="/pmay2"
            element={
              <>
                <Header
                  currentLanguage={currentLanguage}
                  onLanguageChange={handleLanguageChange}
                  onCreditScoreClick={() => setShowCreditScoreModal(true)}
                />
                <PMAY2Page />
                <Footer />
              </>
            }
          />
          <Route
            path="/partner-with-us"
            element={
              <>
                <Header
                  currentLanguage={currentLanguage}
                  onLanguageChange={handleLanguageChange}
                  onCreditScoreClick={() => setShowCreditScoreModal(true)}
                />
                <PartnerWithUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/governance"
            element={
              <>
                <Header
                  currentLanguage={currentLanguage}
                  onLanguageChange={handleLanguageChange}
                  onCreditScoreClick={() => setShowCreditScoreModal(true)}
                />
                <Governance />
                <Footer />
              </>
            }
          />
          <Route
            path="/risk-classification"
            element={
              <>
                <Header
                  currentLanguage={currentLanguage}
                  onLanguageChange={handleLanguageChange}
                  onCreditScoreClick={() => setShowCreditScoreModal(true)}
                />
                <RiskClassification />
                <Footer />
              </>
            }
          />

          {/* Career List Page */}
          <Route
            path="/career"
            element={
              <>
                <Header
                  currentLanguage={currentLanguage}
                  onLanguageChange={handleLanguageChange}
                  onCreditScoreClick={() => setShowCreditScoreModal(true)}
                />
                <Career setSelectedJob={setSelectedJob} />
                <Footer />
              </>
            }
          />

          {/* Job Details Page */}
          <Route
            path="/career/:id"
            element={<JobDetails setSelectedJob={setSelectedJob} />}
          />

          {/* About Us Page – FIXED */}
          <Route
            path="/about"
            element={
              <>
                <Header
                  currentLanguage={currentLanguage}
                  onLanguageChange={handleLanguageChange}
                  onCreditScoreClick={() => setShowCreditScoreModal(true)}
                />
                <AboutUs />
                <Footer />
              </>
            }
          />

          <Route path="/contact" element={
            <>
              <Header
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
                onCreditScoreClick={() => setShowCreditScoreModal(true)}
              />
              <ContactUs />
              <Footer />
            </>
          } />

             <Route
            path="/customer-360-eligibility-calculator"
           element={
            <>
              <Header
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
                onCreditScoreClick={() => setShowCreditScoreModal(true)}
              />
              <Customer360EligibilityCalculator />
              <Footer />
            </>
          } />

             {/* ✅ Add this new route for management team */}
              <Route
                path="/management-team"
                element={
                  <>
                   <Header
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
                onCreditScoreClick={() => setShowCreditScoreModal(true)}
              />
                      <ManagementTeamSection />
                
                    <Footer />
                  </>
                }
              />

          {/* ✅ Added Route for Risk Classification */}

          <Route
            path="/risk-classification"
            element={
              <>
                <Header
                  currentLanguage={currentLanguage}
                  onLanguageChange={handleLanguageChange}
                  onCreditScoreClick={() => setShowCreditScoreModal(true)}
                />
                <RiskClassification />
                <Footer />
              </>
            }
          />

       {/* ✅ Add route for FAQ page */}
                        <Route
                          path="/faq"
                          element={
                            <>
                              <Header
                                currentLanguage={currentLanguage}
                                onLanguageChange={handleLanguageChange}
                                onCreditScoreClick={() => setShowCreditScoreModal(true)}
                              />
                              <main className="overflow-hidden">
                                <Faq />
                              </main>
                              <Footer />
                            </>
                          }
                        />

     {/* ✅ Add this new route for Directors page */}
                <Route
                  path="/directors"
                  element={
                    <>
                    
                          <Header
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
                onCreditScoreClick={() => setShowCreditScoreModal(true)}
              />
                  
                        <Directors /> 
                      
                      <Footer />
                    </>
                  }
                  />
                  <Route path="/blog"  element={
                    <>
                    
                          <Header
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
                onCreditScoreClick={() => setShowCreditScoreModal(true)}
              />
                  
                        <Blog/> 
                      
                      <Footer />
                    </>
                  }
/>

{/* ✅ Added Route for Life At Aham */}

                    <Route
                      path="/life-at-aham"
                      element={
                        <>
                          <Header
                            currentLanguage={currentLanguage}
                            onLanguageChange={handleLanguageChange}
                            onCreditScoreClick={() => setShowCreditScoreModal(true)}
                          />
                          <LifeAham  />
                          <Footer />
                        </>
                      }
                    />

                    
                   {/* ✅ Added Route for Gallery page */}

                    <Route
                      path="/aham-moments"
                      element={
                        <>
                          <Header
                            currentLanguage={currentLanguage}
                            onLanguageChange={handleLanguageChange}
                            onCreditScoreClick={() => setShowCreditScoreModal(true)}
                          />
                          <AhamMoments  />
                          <Footer />
                        </>
                      }
                    />

                       {/* ✅ Added Route for Investor Info page */}

                    <Route
                      path="/investor-info"
                      element={
                        <>
                          <Header
                            currentLanguage={currentLanguage}
                            onLanguageChange={handleLanguageChange}
                            onCreditScoreClick={() => setShowCreditScoreModal(true)}
                          />
                          <InvestorInfo  />
                          <Footer />
                        </>
                      }
                    />

                     {/* ✅ Added Route for Grievances Page*/}

                    <Route
                      path="/grievances"
                      element={
                        <>
                          <Header
                            currentLanguage={currentLanguage}
                            onLanguageChange={handleLanguageChange}
                            onCreditScoreClick={() => setShowCreditScoreModal(true)}
                          />
                          <Grievances  />
                          <Footer />
                        </>
                      }
                    />

                  

                     {/* ✅ Added Route for Grievances Page*/}

                    <Route
                      path="/dsa-onboarding"
                      element={
                        <>
                          <Header
                            currentLanguage={currentLanguage}
                            onLanguageChange={handleLanguageChange}
                            onCreditScoreClick={() => setShowCreditScoreModal(true)}
                          />
                          <DSAOnboarding  />
                          <Footer />
                        </>
                      }
                    />


  {/* ✅ Added Route for E-Auction Page*/}

                    <Route
                      path="/e-auction"
                      element={
                        <>
                          <Header
                            currentLanguage={currentLanguage}
                            onLanguageChange={handleLanguageChange}
                            onCreditScoreClick={() => setShowCreditScoreModal(true)}
                          />
                          <EAuction  />
                          <Footer />
                        </>
                      }
                    />

                     {/* ✅ Added Route for Rating Certificate Page*/}

                    <Route
                      path="/rating-certificate"
                      element={
                        <>
                          <Header
                            currentLanguage={currentLanguage}
                            onLanguageChange={handleLanguageChange}
                            onCreditScoreClick={() => setShowCreditScoreModal(true)}
                          />
                          <RatingCertificate  />
                          <Footer />
                        </>
                      }
                    />
   
                    
                    {/* ✅ Added Route for Secured Assets Page*/}

                    <Route
                      path="/secured-assets"
                      element={
                        <>
                          <Header
                            currentLanguage={currentLanguage}
                            onLanguageChange={handleLanguageChange}
                            onCreditScoreClick={() => setShowCreditScoreModal(true)}
                          />
                          <SecuredAssets  />
                          <Footer />
                        </>
                      }
                    />

                      

                        {/* ✅ Added Route for Secured Assets Page*/}

                    <Route
                      path="/corporate-governance"
                      element={
                        <>
                          <Header
                            currentLanguage={currentLanguage}
                            onLanguageChange={handleLanguageChange}
                            onCreditScoreClick={() => setShowCreditScoreModal(true)}
                          />
                          <CorporateGovernance  />
                          <Footer />
                        </>
                      }
                    />

   {/* ✅ Added Route for partnerships Page*/}

                    <Route
                      path="/partnership"
                      element={
                        <>
                          <Header
                            currentLanguage={currentLanguage}
                            onLanguageChange={handleLanguageChange}
                            onCreditScoreClick={() => setShowCreditScoreModal(true)}
                          />
                          <Leadership  />
                          <Footer />
                        </>
                      }
                    />

{/* ✅ Added Route for DSA Partner Program Page */}
                    <Route
                      path="/dsa-partner-program"
                      element={
                        <>
                          <Header
                            currentLanguage={currentLanguage}
                            onLanguageChange={handleLanguageChange}
                            onCreditScoreClick={() => setShowCreditScoreModal(true)}
                          />
                          <DSAPartnerProgram />
                          <Footer />
                        </>
                      }
                    />

                    {/* Home Composite Loan Page */}
          <Route
            path="/home-composite-loan"
            element={
              <>
                <Header
                  currentLanguage={currentLanguage}
                  onLanguageChange={handleLanguageChange}
                  onCreditScoreClick={() => setShowCreditScoreModal(true)}
                />
                <HomeCompositeLoanPage />
                 <FloatingActions
                  onEnquiryClick={() => setShowEnquiryModal(true)}
                  onEMIClick={() => scrollToSection('emi-calculator')}
                  onScorecardClick={() => scrollToSection('eligibility-scorecard')}
                />
                <Footer />
              </>
            }
          />

                     {/* Home NRI Loan Page */}
          <Route
            path="/nri-loan"
            element={
              <>
                <Header
                  currentLanguage={currentLanguage}
                  onLanguageChange={handleLanguageChange}
                  onCreditScoreClick={() => setShowCreditScoreModal(true)}
                />
                <NRILoanPage />
                 <FloatingActions
                  onEnquiryClick={() => setShowEnquiryModal(true)}
                  onEMIClick={() => scrollToSection('emi-calculator')}
                  onScorecardClick={() => scrollToSection('eligibility-scorecard')}
                />
                <Footer />
              </>
            }
          />

                           {/* Home Home purchase Loan Page */}
          <Route
            path="/home-purchase-loan"
            element={
              <>
                <Header
                  currentLanguage={currentLanguage}
                  onLanguageChange={handleLanguageChange}
                  onCreditScoreClick={() => setShowCreditScoreModal(true)}
                />
                <HomePurchaseLoanPage />
                 <FloatingActions
                  onEnquiryClick={() => setShowEnquiryModal(true)}
                  onEMIClick={() => scrollToSection('emi-calculator')}
                  onScorecardClick={() => scrollToSection('eligibility-scorecard')}
                />
                <Footer />
              </>
            }
          />

                            {/* Home Home Renovation Loan Page */}
          <Route
            path="/home-renovation-loan"
            element={
              <>
                <Header
                  currentLanguage={currentLanguage}
                  onLanguageChange={handleLanguageChange}
                  onCreditScoreClick={() => setShowCreditScoreModal(true)}
                />
                <HomeRenovationLoanPage />
                 <FloatingActions
                  onEnquiryClick={() => setShowEnquiryModal(true)}
                  onEMIClick={() => scrollToSection('emi-calculator')}
                  onScorecardClick={() => scrollToSection('eligibility-scorecard')}
                />
                <Footer />
              </>
            }
          />

          
                            {/* Home  Extension Loan Page */}
          <Route
            path="/home-extension-loan"
            element={
              <>
                <Header
                  currentLanguage={currentLanguage}
                  onLanguageChange={handleLanguageChange}
                  onCreditScoreClick={() => setShowCreditScoreModal(true)}
                />
                <HomeExtensionLoanPage />
                 <FloatingActions
                  onEnquiryClick={() => setShowEnquiryModal(true)}
                  onEMIClick={() => scrollToSection('emi-calculator')}
                  onScorecardClick={() => scrollToSection('eligibility-scorecard')}
                />
                <Footer />
              </>
            }
          />

                             {/* Home  balance Transfer Loan Page */}
                        <Route
                          path="/balance-transfer-loan"
                          element={
                            <>
                              <Header
                                currentLanguage={currentLanguage}
                                onLanguageChange={handleLanguageChange}
                                onCreditScoreClick={() => setShowCreditScoreModal(true)}
                              />
                              <BalanceTransferLoan />
                              <FloatingActions
                                onEnquiryClick={() => setShowEnquiryModal(true)}
                                onEMIClick={() => scrollToSection('emi-calculator')}
                                onScorecardClick={() => scrollToSection('eligibility-scorecard')}
                              />
                              <Footer />
                            </>
                          }
                        />
                           {/* Home  balance Transfer Loan Page */}
                        <Route
                          path="/top-up-loan"
                          element={
                            <>
                              <Header
                                currentLanguage={currentLanguage}
                                onLanguageChange={handleLanguageChange}
                                onCreditScoreClick={() => setShowCreditScoreModal(true)}
                              />
                              <TopUpLoan />
                              <FloatingActions
                                onEnquiryClick={() => setShowEnquiryModal(true)}
                                onEMIClick={() => scrollToSection('emi-calculator')}
                                onScorecardClick={() => scrollToSection('eligibility-scorecard')}
                              />
                              <Footer />
                            </>
                          }
                        />

                         {/* Home mortage Loan Page */}
                        <Route
                          path="/mortage-loan"
                          element={
                            <>
                              <Header
                                currentLanguage={currentLanguage}
                                onLanguageChange={handleLanguageChange}
                                onCreditScoreClick={() => setShowCreditScoreModal(true)}
                              />
                              <MortgageLoan />
                              <FloatingActions
                                onEnquiryClick={() => setShowEnquiryModal(true)}
                                onEMIClick={() => scrollToSection('emi-calculator')}
                                onScorecardClick={() => scrollToSection('eligibility-scorecard')}
                              />
                              <Footer />
                            </>
                          }
                        />

                      <Route path="/blog/:id" element={<BlogInner />} />

                      {/* Branch Locator Page */}
                    <Route path="/branch-locator" element={
                      <>
                        <Header
                          currentLanguage={currentLanguage}
                          onLanguageChange={handleLanguageChange}
                          onCreditScoreClick={() => setShowCreditScoreModal(true)}
                        />
                        <BranchLocator />
                        <Footer />
                      </>
                    } />



        </Routes>
      </div>
    </Router>
  );
}

export default App;