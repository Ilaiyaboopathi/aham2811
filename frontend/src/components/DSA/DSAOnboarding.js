import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Briefcase, Users, TrendingUp, Award, Shield, Clock, BookOpen, FileText, CheckCircle2, ArrowRight, User, Building2, CreditCard, MapPin, Camera, FileCheck } from 'lucide-react';
import './DSAOnboarding.css';
import { useNavigate } from "react-router-dom";

const DSAOnboarding = () => {
    const navigate = useNavigate();
  const partnerTypes = [
    {
      icon: <User className="w-7 h-7" />,
      title: 'Independent loan consultants',
      color: 'blue'
    },
    {
      icon: <Briefcase className="w-7 h-7" />,
      title: 'Financial service professionals',
      color: 'gold'
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: 'Small and mid-sized business owners',
      color: 'green'
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Real estate advisors and channel partners',
      color: 'purple'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Competitive Payouts',
      description: 'Competitive & timely payout structures that value your contribution'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Transparent System',
      description: 'Transparent approval and processing system with no hidden conditions'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Dedicated Support',
      description: 'Dedicated support from our relationship teams at every step'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Quick Processing',
      description: 'Quick and secure digital documentation workflows'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Training & Knowledge',
      description: 'Access to training & product knowledge sessions'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Growth Opportunities',
      description: 'Recognition programs and performance incentives'
    }
  ];

  const onboardingSteps = [
    {
      number: '01',
      title: 'Submit DSA Application',
      description: 'Apply online or through our representative',
      icon: <FileText className="w-6 h-6" />
    },
    {
      number: '02',
      title: 'Document Verification',
      description: 'Due diligence & verification process',
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      number: '03',
      title: 'Agreement Signing',
      description: 'Agreement signing & code allocation',
      icon: <Shield className="w-6 h-6" />
    },
    {
      number: '04',
      title: 'Training Session',
      description: 'Onboarding & product knowledge training',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      number: '05',
      title: 'Start Sourcing',
      description: 'Begin sourcing eligible customer leads',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const eligibilityCriteria = [
    'Indian citizen or registered entity',
    'Good financial track record',
    'Understanding of lending and customer service'
  ];

  const documents = [
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: 'PAN & Aadhaar',
      subtitle: 'Individual / Authorized Signatory'
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'GST Certificate / Business Registration',
      subtitle: 'If applicable'
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: 'Cancelled Cheque',
      subtitle: 'For payouts'
    },
    {
      icon: <Camera className="w-5 h-5" />,
      title: 'Passport-size Photograph',
      subtitle: 'Recent photograph'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Address Proof',
      subtitle: 'Individual or registered office'
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: 'Partnership/Company Documents',
      subtitle: 'For firms'
    }
  ];

  return (
    <div className="dsa-onboarding">
      {/* Hero Banner */}
     <section
          className="dsa-hero bg-cover h-[60vh] bg-center bg-no-repeat w-full"
          style={{ backgroundImage: "url('/img/Banners/OnBoarding.webp')" }}>

          {/* DARK OVERLAY FOR OPACITY */}
            <div className="absolute inset-0 bg-black/60"></div>


        <div className="hero-bg-pattern"></div>
        <div className="hero-content-container">
          <div className="hero-badge">
            <Briefcase className="w-5 h-5" />
            <span>Partnership Opportunity</span>
          </div>
          <h1 className="dsa-hero-title">DSA Onboarding</h1>
          <p className="dsa-hero-subtitle">
            Partner with Aham to deliver financial solutions that create real impact.
          </p>
          <p className="dsa-hero-tagline">
            Join a trusted network of Direct Selling Agents committed to customer-first service and ethical lending practices.
          </p>
          {/* <div className="hero-actions">
            <Button className="hero-btn-main">
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="hero-btn-outline">
              Download Brochure
            </Button>
          </div> */}
        </div>
      </section>

      {/* Section 1: Who Can Partner */}
      <section className="partner-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-tag">Partnership Criteria</span>
            <h2 className="section-title">Build With Us</h2>
            <p className="section-description">
              We invite committed individuals and organizations to join us as Direct Selling Agents (DSAs). 
              Whether you're a freelance loan consultant, a financial advisor, or a business entity with customer reach — 
              this partnership helps you serve more customers and grow your business sustainably.
            </p>
          </div>

          <div className="partner-types-grid">
            {partnerTypes.map((partner, index) => (
              <Card key={index} className={`partner-type-card ${partner.color}`}>
                <div className="partner-icon-wrapper">{partner.icon}</div>
                <p className="partner-type-title">{partner.title}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Benefits */}
      <section className="benefits-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-tag">Why Choose Aham</span>
            <h2 className="section-title">Benefits of Becoming a DSA</h2>
            <p className="section-description">
              We believe in building partnerships that create shared value. When you onboard with Aham, 
              you gain transparent processes, timely payouts, and end-to-end support.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Card key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Onboarding Process */}
      <section className="process-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-tag">Getting Started</span>
            <h2 className="section-title">Simple and Streamlined Onboarding</h2>
            <p className="section-description">
              We follow a clear, structured onboarding process to ensure compliance and smooth engagement from day one.
            </p>
          </div>

          <div className="process-steps-compact">
            {onboardingSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="process-step-compact">
                  <div className="step-number-compact">{step.number}</div>
                  <div className="step-icon-compact">{step.icon}</div>
                  <h3 className="step-title-compact">{step.title}</h3>
                  <p className="step-desc-compact">{step.description}</p>
                </div>
                {index < onboardingSteps.length - 1 && (
                  <div className="step-arrow">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Eligibility & Documents */}
      <section className="eligibility-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-tag">Requirements</span>
            <h2 className="section-title">Who Can Apply & What You Need</h2>
            <p className="section-description">
              To ensure transparency and regulatory compliance, we require basic documentation and verification.
            </p>
          </div>

          <div className="eligibility-layout">
            <Card className="eligibility-card">
              <h3 className="eligibility-heading">Eligibility Criteria</h3>
              <ul className="eligibility-list">
                {eligibilityCriteria.map((criteria, index) => (
                  <li key={index} className="eligibility-item">
                    <CheckCircle2 className="eligibility-icon" />
                    <span>{criteria}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="documents-card">
              <h3 className="documents-heading">Documents Required</h3>
              <div className="documents-grid">
                {documents.map((doc, index) => (
                  <div key={index} className="document-item">
                    <div className="document-icon">{doc.icon}</div>
                    <div className="document-info">
                      <p className="document-title">{doc.title}</p>
                      <p className="document-subtitle">{doc.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="documents-note">
                <Shield className="note-icon" />
                <p className="note-text">
                  <strong>Note:</strong> All applications are subject to due diligence and approval.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dsa-cta">
        <div className="cta-container-dsa">
          <div className="cta-content-dsa">
            <h2 className="cta-title-dsa">Ready to Partner With Us?</h2>
            <p className="cta-text-dsa">
              Start your journey as an Aham DSA partner today and help customers achieve their dreams while growing your business.
            </p>
            <div className="cta-buttons-dsa">
              <Button
                variant="outline"
                className="cta-btn-primary-dsa"
                onClick={() => navigate("/contact")}
              >
                Contact Team
              </Button>

              {/* <Button className="cta-btn-primary-dsa">
                Begin Application
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="cta-btn-secondary-dsa">
                Contact Team
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DSAOnboarding;