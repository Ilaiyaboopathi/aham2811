import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Shield, Home, Lock, FileCheck, CheckCircle2, AlertTriangle, Key, Building2, Landmark, User, FileText, TrendingUp, Download, ArrowRight, Award, Bell, Eye, HandshakeIcon } from 'lucide-react';
import './SecuredAssets.css';
import { Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SecuredAssets = () => {
      const navigate = useNavigate();
  const securedAssetBenefits = [
    {
      icon: <User className="w-5 h-5" />,
      title: 'Borrower Rights',
      description: 'Ownership and right to use property'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Lender Protection',
      description: 'Legal interest as security'
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: 'Clear Obligations',
      description: 'Well-defined terms and conditions'
    },
    {
      icon: <Handshake className="w-5 h-5" />,
      title: 'Mutual Trust',
      description: 'Balanced interest protection'
    }
  ];

  const propertyTypes = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Residential Flats & Apartments',
      description: 'Newly built units in approved housing complexes',
      color: 'blue'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Under-Construction Projects',
      description: 'Projects with municipal approvals',
      color: 'gold'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Individual Houses',
      description: 'Independent units in approved layouts',
      color: 'green'
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: 'Urban Properties',
      description: 'Located in cities with market viability',
      color: 'purple'
    }
  ];

  const assessmentFactors = [
    'Clear title verification',
    'Strategic location analysis',
    'Build quality inspection',
    'Future resale value assessment',
    'Local regulation compliance',
      'Market demand evaluation'
  ];

  const borrowerRights = [
    {
      icon: <Home className="w-5 h-5" />,
      text: 'Full use and occupancy of the property with timely repayments'
    },
    {
      icon: <FileText className="w-5 h-5" />,
      text: 'Receive all statements, disclosures and updates on secured asset'
    },
    {
      icon: <Key className="w-5 h-5" />,
      text: 'Right to charge release after full repayment completion'
    }
  ];

  const borrowerResponsibilities = [
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      text: 'Ensure timely payment of instalments and charges'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: 'Maintain property in good condition with necessary repairs'
    },
    {
      icon: <Lock className="w-5 h-5" />,
      text: 'Do not pledge, sell or alter asset without lender consent'
    }
  ];

  const defaultProcess = [
    {
      step: '01',
      title: 'Notification',
      description: 'We notify you of payment default or breach',
      icon: <Bell className="w-5 h-5" />
    },
    {
      step: '02',
      title: 'Remediation Period',
      description: 'Reasonable time provided for resolution',
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      step: '03',
      title: 'Legal Notice',
      description: 'If unresolved, formal legal process initiated',
      icon: <FileText className="w-5 h-5" />
    },
    {
      step: '04',
      title: 'Asset Recovery',
      description: 'Prescribed auction or recovery measures',
      icon: <Landmark className="w-5 h-5" />
    },
    {
      step: '05',
      title: 'Settlement',
      description: 'Proceeds cover expenses, surplus returned to you',
      icon: <CheckCircle2 className="w-5 h-5" />
    }
  ];

  const releaseSteps = [
    {
      number: '1',
      title: 'Charge Release Process',
      description: 'Formal release of lender charge initiated'
    },
    {
      number: '2',
      title: 'NOC Issuance',
      description:  'No-objection certificate provided promptly'
    },
    {
      number: '3',
      title: 'Full Control',
      description:'Property free from any encumbrance'
    },
    {
      number: '4',
      title: 'Final Documentation',
      description: 'Complete statements and confirmation'
    }
  ];

  return (
    <div className="secured-assets">
      {/* Hero Banner */}
      <section
  className="assets-hero relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/img/Banners/Secured-Assets.webp')" }}   // ← your bg image
>
  {/* DARK OVERLAY (adjust opacity here) */}
  <div className="absolute inset-0 bg-black/50"></div>
        
        
        <div className="assets-hero-bg"></div>
        <div className="assets-hero-content">
          <div className="shield-badge">
            <Shield className="shield-icon" />
            <Lock className="lock-icon" />
          </div>
          <h1 className="assets-hero-title">Information on Your Secured Assets</h1>
          {/* <p className="assets-hero-text">
            At Aham HFC, transparency is core to our lending practices. This page provides clear and comprehensive information 
            on how your assets are secured, managed and protected throughout the life of your loan.
          </p> */}
          {/* <Button className="assets-hero-btn">
            <Download className="w-5 h-5" />
            Download Asset Guide
          </Button> */}
        </div>
      </section>

      {/* Section 1: What is a Secured Asset */}
      <section className="understanding-section">
        <div className="section-container">
          <div className="understanding-header">
            <span className="section-tag">Core Concept</span>
            <h2 className="section-title">Understanding Secured Assets in Home & Housing Finance</h2>
          </div>

          <div className="understanding-layout">
            <div className="understanding-content">
              <div className="definition-box">
                <Shield className="definition-icon" />
                <div className="definition-text">
                  <p className="definition-para">
                    A <strong>secured asset</strong> refers to the collateral pledged by the borrower, which serves as security for the loan granted by Aham HFC. 
                    In housing finance, this typically includes the property being financed — the bank or lending institution retains a charge (or mortgage) 
                    over the asset until the loan is repaid in full.
                  </p>
                </div>
              </div>

              <div className="mechanism-text">
                <h3 className="mechanism-heading">This mechanism ensures that both the borrower and lender have clearly defined rights and obligations:</h3>
              </div>
            </div>

            <div className="benefits-grid-secured">
              {securedAssetBenefits.map((benefit, index) => (
                <Card key={index} className="benefit-card-secured">
                  <div className="benefit-icon-secured">{benefit.icon}</div>
                  <h3 className="benefit-title-secured">{benefit.title}</h3>
                  <p className="benefit-description-secured">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <p className="protection-note">
            Through this arrangement, we aim to protect your interests, maintain regulatory compliance and enable responsible lending.
          </p>
        </div>
      </section>

      {/* Section 2: Types of Properties */}
      <section className="properties-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-tag">What We Finance</span>
            <h2 className="section-title">Types of Secured Properties We Finance</h2>
            <p className="section-description">
              At Aham HFC, the secured assets we accept cover a wide variety of residential properties, each undergoing rigorous eligibility and verification checks.
            </p>
          </div>

          <div className="property-types-grid">
            {propertyTypes.map((property, index) => (
              <Card key={index} className={`property-type-card ${property.color}`}>
                <div className="property-type-icon">{property.icon}</div>
                <h3 className="property-type-title">{property.title}</h3>
                <p className="property-type-description">{property.description}</p>
              </Card>
            ))}
          </div>

          <Card className="assessment-card">
            <h3 className="assessment-heading">Property Assessment Criteria</h3>
            <p className="assessment-intro">
              Every property is assessed on multiple factors to ensure the security remains robust for both you and us:
            </p>
            <div className="assessment-factors">
              {assessmentFactors.map((factor, index) => (
                <div key={index} className="factor-item">
                  <CheckCircle2 className="factor-icon" />
                  <span>{factor}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Section 3: Rights & Responsibilities */}
      <section className="rights-responsibilities-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-tag">Know Your Terms</span>
            <h2 className="section-title">What Borrowers Should Know</h2>
          </div>

          <div className="rights-resp-layout">
            <Card className="rights-card">
              <div className="card-header-rr">
                <Key className="header-icon" />
                <h3 className="card-title-rr">Your Rights</h3>
              </div>
              <div className="items-list">
                {borrowerRights.map((right, index) => (
                  <div key={index} className="item-row">
                    <div className="item-icon-wrapper green">{right.icon}</div>
                    <p className="item-text">{right.text}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="responsibilities-card">
              <div className="card-header-rr">
                <Shield className="header-icon" />
                <h3 className="card-title-rr">Your Responsibilities</h3>
              </div>
              <div className="items-list">
                {borrowerResponsibilities.map((resp, index) => (
                  <div key={index} className="item-row">
                    <div className="item-icon-wrapper gold">{resp.icon}</div>
                    <p className="item-text">{resp.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Default Process */}
      <section className="default-section">
        <div className="section-container">
          <div className="default-header">
            <AlertTriangle className="warning-icon" />
            <div>
              <span className="section-tag">Transparency & Clarity</span>
              <h2 className="section-title-white">What Happens in the Event of Default</h2>
              <p className="default-intro">
                While we strive to support all our borrowers and avoid distress situations, it's essential to understand how default scenarios are managed — 
                for transparency and clarity.
              </p>
            </div>
          </div>

          <div className="default-process-flow">
            {defaultProcess.map((item, index) => (
              <div key={index} className="process-card">
                <div className="process-step-badge">{item.step}</div>
                <div className="process-icon-wrapper">{item.icon}</div>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-description">{item.description}</p>
              </div>
            ))}
          </div>

          <Card className="commitment-note">
            <Eye className="commitment-icon" />
            <div className="commitment-text">
              <p>
                The proceeds from sale of the secured property will first cover charged expenses, loan outstanding, interest, and then any surplus will be returned to you.
              </p>
              <p><strong>We commit to keeping you informed at every step of this process.</strong></p>
            </div>
          </Card>
        </div>
      </section>

      {/* Section 5: Release of Security */}
      <section className="release-section">
        <div className="section-container">
          <div className="release-header">
            <Award className="award-icon" />
            <span className="section-tag">Successful Completion</span>
            <h2 className="section-title">When Your Loan Is Fully Repaid</h2>
            <p className="release-intro">
              Congratulations — once you've successfully completed repayment, here's what happens:
            </p>
          </div>

          <div className="release-process">
            {releaseSteps.map((step, index) => (
              <div key={index} className="release-step">
                <div className="release-number">{step.number}</div>
                <div className="release-content">
                  <h3 className="release-title">{step.title}</h3>
                  <p className="release-description">{step.description}</p>
                </div>
                {index < releaseSteps.length - 1 && (
                  <ArrowRight className="release-arrow" />
                )}
              </div>
            ))}
          </div>

          <Card className="success-card">
            <div className="success-icon-wrapper">
              <Award className="success-icon" />
            </div>
            <h3 className="success-heading">Your Achievement, Our Shared Success</h3>
            <p className="success-text">
              Free from encumbrance, you gain full control over your property — you may re-pledge, resell or use it as you wish (subject to local regulations).
              At Aham HFC, we strive to make this transition smooth, transparent and prompt.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="assets-cta">
        <div className="assets-cta-container">
          <Shield className="cta-shield-icon" />
          <h2 className="cta-assets-title">Need More Information?</h2>
          <p className="cta-assets-text">
            Download our complete guide on secured assets or contact our customer support team for personalized assistance.
          </p>
          <div className="cta-assets-actions">
            {/* <Button className="cta-assets-primary">
              <Download className="w-5 h-5" />
              Download Complete Guide
            </Button> */}

            <Button
             variant="outline"
              className="cta-assets-secondary"
              onClick={() => navigate("/contact")}
              >
                Contact Support Team
            </Button>


            {/* <Button variant="outline" className="cta-assets-secondary">
              Contact Support Team
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecuredAssets;