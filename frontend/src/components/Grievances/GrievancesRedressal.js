import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { MessageSquare, AlertCircle, Phone, Mail, MapPin, Clock, Shield, CheckCircle2, ArrowRight, Building2, User, ExternalLink } from 'lucide-react';
import './GrievancesRedressal.css';

const GrievanceRedressal = () => {
  const branchMethods = [
    {
      icon: <User className="w-6 h-6" />,
      title: 'In Person',
      description: 'Speak to the Branch Manager, Area Head, or Zonal Head'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Written Complaint',
      description: 'Submit using the Complaint Register available at all branches'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email/Written',
      description: 'Send an email or written communication to the branch office'
    }
  ];

  const customerRights = [
    'Receive clear and transparent communication about products, charges, and terms.',
    'Be treated with courtesy and professionalism at every stage of your interaction with us.',
    'Raise concerns without fear of discrimination or negative impact on your services.',
    'Receive a fair, timely, and unbiased resolution to your grievance.',
    'Escalate unresolved matters through a structured grievance redressal process.'
  ];

  return (
    <div className="grievance-page">
      {/* Hero Banner */}
      <section
          className="grievance-hero bg-cover h-[60vh] bg-center bg-no-repeat w-full"
          style={{ backgroundImage: "url('/img/Banners/Grievance-Redressal.webp')" }}>

          {/* DARK OVERLAY FOR OPACITY */}
            <div className="absolute inset-0 bg-black/60"></div>
        
        
        
        <div className="hero-decoration-left"></div>
        <div className="hero-decoration-right"></div>
        <div className="hero-content-main">
          <div className="hero-icon-badge">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="grievance-main-title">Grievance Redressal</h1>
          <p className="grievance-subtitle">
            We are committed to addressing your concerns with transparency, fairness, and timely resolution.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="process-overview">
        <div className="section-container">
          <div className="overview-header">
            <h2 className="overview-title">Three-Step Resolution Process</h2>
            <p className="overview-subtitle">Clear pathways to resolve your concerns</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-icon-wrapper level-1">
                <Building2 className="step-icon" />
              </div>
              <h3 className="step-title">Branch Level</h3>
              <p className="step-desc">Register at your branch</p>
              <div className="step-timeline">
                <Clock className="w-4 h-4" />
                <span>15 working days</span>
              </div>
            </div>

            <div className="process-arrow">
              <ArrowRight className="arrow-icon" />
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-icon-wrapper level-2">
                <User className="step-icon" />
              </div>
              <h3 className="step-title">Grievance Officer</h3>
              <p className="step-desc">Escalate if unresolved</p>
              <div className="step-timeline">
                <Clock className="w-4 h-4" />
                <span>30 working days</span>
              </div>
            </div>

            <div className="process-arrow">
              <ArrowRight className="arrow-icon" />
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-icon-wrapper level-3">
                <Shield className="step-icon" />
              </div>
              <h3 className="step-title">National Housing Bank</h3>
              <p className="step-desc">Final escalation</p>
              <div className="step-timeline">
                <Clock className="w-4 h-4" />
                <span>As per NHB norms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Branch Level */}
      <section className="branch-section">
        <div className="section-container">
          <div className="section-header-centered">
            <div className="level-badge level-1-badge">
              <span className="badge-number">Level 1</span>
            </div>
            <h2 className="section-main-heading">How to Raise a Complaint</h2>
            <p className="section-lead-text">
              If you have any concerns, queries, or complaints regarding our services, we encourage you to share them with us. 
              You may register your grievance at the branch where your loan was availed.
            </p>
          </div>

          <div className="methods-grid">
            {branchMethods.map((method, index) => (
              <Card key={index} className="method-card">
                <div className="method-icon">{method.icon}</div>
                <h3 className="method-title">{method.title}</h3>
                <p className="method-description">{method.description}</p>
              </Card>
            ))}
          </div>

          <div className="resolution-info">
            <AlertCircle className="info-icon" />
            <p className="info-text">
              We aim to acknowledge and address your complaint at the branch level within <strong>15 working days</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Grievance Officer */}
      <section className="officer-section">
        <div className="section-container">
          <div className="officer-layout">
            <div className="officer-content">
              <div className="level-badge level-2-badge">
                <span className="badge-number">Level 2</span>
              </div>
              <h2 className="section-main-heading">Escalation to Grievance Redressal Officer</h2>
              <p className="section-lead-text">
                If you are not satisfied with the response received from the branch, or if no response is received within 15 working days, 
                you may escalate the matter to our Grievance Redressal Officer.
              </p>
            </div>

            <Card className="contact-card primary-contact">
              <div className="contact-header">
                <div className="contact-avatar">
                  <User className="w-8 h-8" />
                </div>
                <div className="contact-info">
                  <h3 className="contact-name">Venkatesh Kannanphan</h3>
                  <p className="contact-designation">Grievance Redressal Officer</p>
                </div>
              </div>
              
              <div className="contact-details">
                <div className="contact-item">
                  <Phone className="contact-item-icon" />
                  <div className="contact-item-content">
                    <span className="contact-label">Phone</span>
                    <a href="tel:09883385963" className="contact-value">09883385963</a>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail className="contact-item-icon" />
                  <div className="contact-item-content">
                    <span className="contact-label">Email</span>
                    <a href="mailto:venkey@ahamhfc.com" className="contact-value">venkey@ahamhfc.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <Clock className="contact-item-icon" />
                  <div className="contact-item-content">
                    <span className="contact-label">Resolution Time</span>
                    <span className="contact-value-highlight">Within 30 working days</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: NHB */}
      <section className="nhb-section">
        <div className="section-container">
          <div className="section-header-centered">
            <div className="level-badge level-3-badge">
              <span className="badge-number">Level 3</span>
            </div>
            <h2 className="section-main-heading">Approach to National Housing Bank</h2>
            <p className="section-lead-text">
              If you are not satisfied with the company's response, or if the issue remains unresolved beyond 30 working days, 
              you may approach the Complaint Redressal Cell of the National Housing Bank (NHB).
            </p>
          </div>

          <div className="nhb-options">
            <Card className="nhb-option-card online">
              <div className="option-header">
                <div className="option-icon">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <h3 className="option-title">Online (Preferred)</h3>
              </div>
              <p className="option-description">Lodge your complaint through the official NHB grievance portal</p>
              <a 
                href="https://grids.nhbonline.org.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="option-link"
              >
                https://grids.nhbonline.org.in
                <ExternalLink className="w-4 h-4" />
              </a>
            </Card>

            <Card className="nhb-option-card postal">
              <div className="option-header">
                <div className="option-icon">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="option-title">By Writing To</h3>
              </div>
              <p className="option-description">Send your complaint to the following address:</p>
              <div className="address-block">
                <p className="address-line"><strong>Complaint Redressal Cell</strong></p>
                <p className="address-line">Department of Regulation and Supervision</p>
                <p className="address-line">National Housing Bank</p>
                <p className="address-line">4th Floor, Core 5A, India Habitat Centre</p>
                <p className="address-line">Lodhi Road, New Delhi – 110003</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Customer Rights */}
      <section className="rights-section">
        <div className="section-container">
          <div className="rights-layout">
            <div className="rights-content">
              <h2 className="section-main-heading">Our Commitment to Fair and Transparent Service</h2>
              <p className="commitment-text">
                We are committed to treating every customer with dignity, fairness, and respect.
                Your feedback helps us improve and ensures that we continue to deliver responsible and customer-focused financial services.
              </p>

              <h3 className="rights-subheading">As a Customer, You Have the Right To:</h3>
              <ul className="rights-list">
                {customerRights.map((right, index) => (
                  <li key={index} className="rights-item">
                    <CheckCircle2 className="rights-icon" />
                    <span>{right}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="promise-card">
              <div className="promise-icon-wrapper">
                <Shield className="promise-icon" />
              </div>
              <h3 className="promise-title">Our Promise</h3>
              <p className="promise-text">
                We review all customer grievances with care and work towards resolution in a time-bound and transparent manner.
              </p>
              {/* <Button className="promise-button">
                Submit Your Feedback
                <ArrowRight className="w-5 h-5" />
              </Button> */}
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrievanceRedressal;