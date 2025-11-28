import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Gavel, MapPin, IndianRupee, Calendar, Eye, FileText, Shield, CheckCircle2, AlertTriangle, Download, ExternalLink, Clock, User, Building2, ArrowRight } from 'lucide-react';
import './EAuction.css';
import { useNavigate } from "react-router-dom";

const EAuction = () => {
    const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const principles = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Open and transparent bidding',
      color: 'blue'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Equal opportunity for all participants',
      color: 'green'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Compliance with NHB / RBI and statutory guidelines',
      color: 'gold'
    }
  ];

  const auctionProperties = [
    {
      id: 1,
      title: 'Residential Property - Prime Location',
      location: 'Sector 21, Pune, Maharashtra',
      type: 'Residential',
      reservePrice: '45,00,000',
      emd: '4,50,000',
      auctionDate: '15 Feb 2025',
      inspectionDate: '10-12 Feb 2025',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Commercial Space - City Center',
      location: 'MG Road, Bangalore, Karnataka',
      type: 'Commercial',
      reservePrice: '1,20,00,000',
      emd: '12,00,000',
      auctionDate: '18 Feb 2025',
      inspectionDate: '13-15 Feb 2025',
      status: 'Active'
    },
    {
      id: 3,
      title: 'Plot - Upcoming Residential Area',
      location: 'Whitefield, Bangalore, Karnataka',
      type: 'Plot',
      reservePrice: '35,00,000',
      emd: '3,50,000',
      auctionDate: '20 Feb 2025',
      inspectionDate: '15-17 Feb 2025',
      status: 'Upcoming'
    },
     {
      id: 4,
      title: 'Residential Property - Prime Location',
      location: 'Sector 21, Pune, Maharashtra',
      type: 'Residential',
      reservePrice: '45,00,000',
      emd: '4,50,000',
      auctionDate: '15 Feb 2025',
      inspectionDate: '10-12 Feb 2025',
      status: 'Active'
    },
    {
      id: 5,
      title: 'Commercial Space - City Center',
      location: 'MG Road, Bangalore, Karnataka',
      type: 'Commercial',
      reservePrice: '1,20,00,000',
      emd: '12,00,000',
      auctionDate: '18 Feb 2025',
      inspectionDate: '13-15 Feb 2025',
      status: 'Active'
    },
    {
      id: 6,
      title: 'Plot - Upcoming Residential Area',
      location: 'Whitefield, Bangalore, Karnataka',
      type: 'Plot',
      reservePrice: '35,00,000',
      emd: '3,50,000',
      auctionDate: '20 Feb 2025',
      inspectionDate: '15-17 Feb 2025',
      status: 'Upcoming'
    }
  ];

  const participationSteps = [
    {
      number: '01',
      title: 'Review Property Details',
      description: 'Browse listings and confirm your interest',
      icon: <Eye className="w-5 h-5" />
    },
    {
      number: '02',
      title: 'Submit KYC Documents',
      description: 'Complete verification process',
      icon: <FileText className="w-5 h-5" />
    },
    {
      number: '03',
      title: 'Pay EMD & Register Deposit',
      description: 'Deposit earnest money within timeline',
      icon: <IndianRupee className="w-5 h-5" />
    },
    {
      number: '04',
      title: 'Get Login Credentials',
      description: 'Access the e-auction portal',
      icon: <User className="w-5 h-5" />
    },
    {
      number: '05',
      title: 'Participate in Bidding',
      description: 'Place bids during auction window',
      icon: <Gavel className="w-5 h-5" />
    }
  ];

  const importantPoints = [
    'Bidders are responsible for conducting their independent due diligence',
    'Final sale is subject to confirmation by the Company',
    'All payments must be made through permitted channels only'
  ];

  return (
    <div className="e-auction">
      {/* Hero Banner */}
      <section
  className="auction-hero relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/img/Banners/E-Auction.webp')" }}   // ← your bg image
>
  {/* DARK OVERLAY (adjust opacity here) */}
  <div className="absolute inset-0 bg-black/50"></div>
        
        
        
        <div className="auction-hero-bg"></div>
        <div className="auction-hero-content">
          <div className="auction-badge">
            <Gavel className="w-5 h-5" />
            <span>Legal & Compliant Process</span>
          </div>
          <h1 className="auction-title">E-Auction</h1>
          <p className="auction-subtitle">Transparent, fair, and compliant asset disposal process.</p>
          <p className="auction-tagline">
            Browse auction listings, review property details, and participate securely through our e-auction platform.
          </p>
          <div className="auction-hero-actions">
            {/* <Button className="auction-btn-primary">
              View Active Auctions
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="auction-btn-secondary">
              <Download className="w-5 h-5" />
              Download Guidelines
            </Button> */}
          </div>
        </div>
      </section>

      {/* Section 1: About E-Auction */}
      <section className="about-auction-section">
        <div className="section-container">
          <div className="about-auction-layout">
            <div className="about-auction-content">
              <span className="section-tag">Understanding the Process</span>
              <h2 className="section-title">What is an E-Auction?</h2>
              <div className="about-text">
                <p className="lead-paragraph">
                  E-Auctions are conducted as part of the lawful recovery process under applicable regulations.
                  Properties offered for auction are those secured against loans where the borrower has defaulted despite repeated reminders and support options.
                </p>
                <p className="secondary-paragraph">
                  The auction process is transparent, time-bound, and governed by regulatory guidelines, ensuring fairness to all participants.
                </p>
              </div>
            </div>

            <Card className="principles-card">
              <h3 className="principles-heading">Key Principles</h3>
              <div className="principles-list">
                {principles.map((principle, index) => (
                  <div key={index} className={`principle-item ${principle.color}`}>
                    <div className="principle-icon">{principle.icon}</div>
                    <p className="principle-text">{principle.title}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: Current Listings */}
      <section className="listings-section">
        <div className="section-container">
          <div className="listings-header">
            <div>
              <span className="section-tag">Property Listings</span>
              <h2 className="section-title">Available Properties for Auction</h2>
              <p className="section-description">
                The list of properties currently available for auction is updated regularly.
                Each listing includes details such as location, reserve price, inspection schedule, and contact information.
              </p>
            </div>
            {/* <div className="listings-filters">
              <button 
                className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Properties
              </button>
              <button 
                className={`filter-btn ${activeTab === 'active' ? 'active' : ''}`}
                onClick={() => setActiveTab('active')}
              >
                Active Auctions
              </button>
              <button 
                className={`filter-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming
              </button>
            </div> */}
          </div>

          <div className="properties-grid">
            {auctionProperties.map((property) => (
              <Card key={property.id} className="property-card">
                <div className="property-header">
                  <div className="property-status">
                    <div className={`status-badge ${property.status.toLowerCase()}`}>
                      {property.status}
                    </div>
                    <div className="property-type-badge">{property.type}</div>
                  </div>
                </div>
                
                <div className="property-content">
                  <h3 className="property-title">{property.title}</h3>
                  <div className="property-location">
                    <MapPin className="w-4 h-4" />
                    <span>{property.location}</span>
                  </div>

                  <div className="property-details">
                    <div className="detail-row">
                      <div className="detail-item">
                        <IndianRupee className="detail-icon" />
                        <div className="detail-info">
                          <span className="detail-label">Reserve Price</span>
                          <span className="detail-value">₹{property.reservePrice}</span>
                        </div>
                      </div>
                      <div className="detail-item">
                        <Building2 className="detail-icon" />
                        <div className="detail-info">
                          <span className="detail-label">EMD Amount</span>
                          <span className="detail-value">₹{property.emd}</span>
                        </div>
                      </div>
                    </div>

                    <div className="detail-row">
                      <div className="detail-item">
                        <Calendar className="detail-icon" />
                        <div className="detail-info">
                          <span className="detail-label">Auction Date</span>
                          <span className="detail-value">{property.auctionDate}</span>
                        </div>
                      </div>
                      <div className="detail-item">
                        <Clock className="detail-icon" />
                        <div className="detail-info">
                          <span className="detail-label">Inspection</span>
                          <span className="detail-value">{property.inspectionDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                   <Button className="property-view-btn"
                 onClick={() => navigate("/")}>
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </Button> 
                </div>
              </Card>
            ))}
          </div>

          <div className="listings-note">
            <FileText className="note-icon" />
            <p className="note-text">
              <strong>Note:</strong> Property documents and inspection can be arranged upon request. Contact the Authorized Officer for more information.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: How to Participate */}
      <section className="participation-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-tag">Getting Started</span>
            <h2 className="section-title">Steps to Take Part in the E-Auction</h2>
            <p className="section-description">
              Participation is open to all eligible bidders who meet the terms and conditions. Follow these simple steps to participate.
            </p>
          </div>

          <div className="participation-flow">
            {participationSteps.map((step, index) => (
              <div key={index} className="flow-step">
                <div className="flow-step-card">
                  <div className="flow-number">{step.number}</div>
                  <div className="flow-icon">{step.icon}</div>
                  <h3 className="flow-title">{step.title}</h3>
                  <p className="flow-description">{step.description}</p>
                </div>
                {index < participationSteps.length - 1 && (
                  <div className="flow-connector"></div>
                )}
              </div>
            ))}
          </div>

          <Card className="bidding-info-card">
            <Shield className="bidding-icon" />
            <div className="bidding-text">
              <h3 className="bidding-title">Secure & Transparent Bidding</h3>
              <p className="bidding-description">
                All bids are recorded and timestamped electronically. The process is monitored to ensure fairness and compliance.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Section 4: Terms & Regulatory Notice */}
      <section className="terms-section">
        <div className="section-container">
          <div className="terms-layout">
            <div className="terms-content">
              <span className="section-tag">Legal Information</span>
              <h2 className="section-title">Compliance & Legal Information</h2>
              <p className="terms-intro">
                The e-auction is conducted in accordance with applicable laws and regulatory guidelines.
                Participants are advised to read the detailed terms and conditions before placing bids.
              </p>

              <div className="important-points">
                <h3 className="important-heading">Important</h3>
                <ul className="important-list">
                  {importantPoints.map((point, index) => (
                    <li key={index} className="important-item">
                      <AlertTriangle className="important-icon" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Card className="regulatory-card">
              <div className="regulatory-header">
                <Shield className="regulatory-icon" />
                <h3 className="regulatory-title">Regulatory Advisory</h3>
              </div>
              <p className="regulatory-text">
                Disputes, if any, will be handled as per applicable legal provisions.
              </p>
              <div className="regulatory-actions">
                {/* <Button className="regulatory-btn">
                  <Download className="w-4 h-4" />
                  Download Terms & Conditions
                </Button> */}
                {/* <Button variant="outline" className="regulatory-btn">
                  Contact Team
                </Button> */}
                 <Button
                   variant="outline"
                    className="regulatory-btn"
                     onClick={() => navigate("/contact")}
                      >
                     Contact Team
                 </Button>             
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="auction-cta">
        <div className="auction-cta-container">
          <Gavel className="cta-gavel-icon" />
          <h2 className="cta-auction-title">Ready to Participate?</h2>
          <p className="cta-auction-text">
            Register now to receive notifications about upcoming auctions and property listings.
          </p>
          <div className="cta-auction-actions">
            <Button className="cta-auction-primary">
              Register for E-Auction
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="cta-auction-secondary">
              Contact Authorized Officer
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default EAuction;