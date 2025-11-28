import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { TrendingUp, Target, Shield, CheckCircle2, ArrowRight, BarChart3, Users, FileText } from 'lucide-react';
import './InvestorInfo.css';
import { useNavigate } from "react-router-dom";

const InvestorInfo = () => {
  const navigate = useNavigate();
  const visionPoints = [
    { icon: <Target className="w-5 h-5" />, text: 'Purpose-led growth strategy' },
    { icon: <BarChart3 className="w-5 h-5" />, text: 'Strong operational discipline' },
    { icon: <Users className="w-5 h-5" />, text: 'Customer-first problem solving' }
  ];

  const performanceHighlights = [
    'Stable year-on-year operational expansion',
    'Strengthened product & technology foundation',
    'Scalable processes to support future growth'
  ];

  const governanceHighlights = [
    'Transparent leadership accountability',
    'Clear policies & compliance frameworks',
    'Ethical decision-making culture',
      'Risk management with proactive controls',
     'Regular audit reviews for performance transparency'
  ];

  return (
    <div className="investor-info">
      {/* Hero Banner */}
       <section
          className="investor-hero bg-cover h-[55vh] bg-center bg-no-repeat w-full"
          style={{ backgroundImage: "url('/img/Banners/Investor-Info.webp')" }}>

          {/* DARK OVERLAY FOR OPACITY */}
            <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="hero-background-pattern"></div>
        <div className="hero-content-wrapper">
          <div className="hero-label">Investor Information</div>
          <h1 className="hero-main-title">Transparent growth.<br />Strong foundations.</h1>
          <p className="hero-main-tagline">A future we build with confidence.</p>
          {/* <div className="hero-cta-group">
            <Button className="hero-btn-primary">
              <FileText className="w-5 h-5" />
              View Financial Reports
            </Button>
            <Button variant="outline" className="hero-btn-secondary">
              Contact Investor Relations
            </Button>
          </div> */}
        </div>
        
        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-value">49,979+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value">129+</div>
            <div className="stat-label">Branches</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value">21+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value">₹2,614+ Cr</div>
            <div className="stat-label">Disbursed</div>
          </div>
        </div>
      </section>

      {/* Section 1: Vision & Purpose */}
      <section className="vision-section">
        <div className="section-container">
          <div className="vision-layout">
            <div className="vision-content">
              <div className="section-header">
                <span className="section-tag">Our Foundation</span>
                <h2 className="section-heading">Building Value With Purpose</h2>
              </div>
              
              <div className="vision-text">
                <p className="lead-text">
                  At Aham, our growth is driven by clarity of purpose and long-term thinking.
                  We focus on creating real solutions, strong relationships, and sustainable impact across every milestone.
                </p>
                <p className="secondary-text">
                  For us, success is not just about numbers — it is about meaningful value and trust built over time.
                </p>
              </div>

              <div className="key-points-grid">
                {visionPoints.map((point, index) => (
                  <div key={index} className="key-point-card">
                    <div className="key-point-icon">{point.icon}</div>
                    <p className="key-point-text">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="vision-visual">
              <div className="visual-card primary">
                <img 
                  src="/img/Investor/Building-growth.webp"
                  alt="Building growth"
                  className="visual-image"
                />
                <div className="visual-badge">
                  <TrendingUp className="w-5 h-5" />
                  <span>Sustainable Growth</span>
                </div>
              </div>
              <div className="visual-card secondary">
                <img 
                  src="/img/Investor/Business-analytics.webp"
                  alt="Business analytics"
                  className="visual-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Performance & Progress */}
      <section className="performance-section">
        <div className="section-container">
          <div className="performance-layout">
            <div className="performance-visual">
              <img 
                 src="/img/Investor/Performance-metrics.webp"
                alt="Performance metrics"
                className="performance-image"
              />
              <div className="performance-overlay">
                <div className="overlay-stat">
                  <TrendingUp className="overlay-icon" />
                  <div className="overlay-text">
                    <div className="overlay-value">Driven by market insights.</div>
                    <div className="overlay-label">Built for long-term advantage.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="performance-content">
              <div className="section-header">
                <span className="section-tag">Our Progress</span>
                <h2 className="section-heading">Consistent Performance, Measured Progress</h2>
              </div>
              
              <p className="lead-text">
                We believe in measurable progress backed by transparent reporting.
                Our performance reflects our commitment to efficiency, responsible investments, and continuous improvement.
              </p>

              <Card className="highlights-card">
                <h3 className="highlights-title">Key Highlights</h3>
                <ul className="highlights-list">
                  {performanceHighlights.map((highlight, index) => (
                    <li key={index} className="highlight-item">
                      <CheckCircle2 className="highlight-icon" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Governance & Trust */}
      <section className="governance-section">
        <div className="section-container">
          <div className="governance-header-center">
            <span className="section-tag">Trust & Integrity</span>
            <h2 className="section-heading">Responsible Governance, Strong Ethics</h2>
            <p className="section-intro">
              Our governance approach ensures that every decision aligns with our values, regulatory standards, and long-term vision.
              We maintain clarity, compliance, and responsibility across our leadership and operational model.
            </p>
          </div>

          <div className="governance-content">
            <div className="governance-visual">
              <img 
                src="/img/Investor/Corporate-governance.webp"
                alt="Corporate governance"
                className="governance-image"
              />
            </div>

            <div className="governance-cards">
              {governanceHighlights.map((item, index) => (
                <Card key={index} className="governance-card">
                  <Shield className="governance-icon" />
                  <p className="governance-text">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="investor-cta">
        <div className="cta-content-box">
          <div className="cta-icon-wrapper">
            <Users className="cta-icon" />
          </div>
          <h2 className="cta-heading">We welcome investors who believe in responsible growth and long-term partnership.</h2>
          <p className="cta-subtext">Want to learn more or connect with our investor relations team? Let's start a conversation.</p>
          <div className="cta-action-buttons">
            {/* <Button className="cta-btn-primary">
              Schedule a Meeting
              <ArrowRight className="w-5 h-5" />
            </Button> */}
            <Button
             variant="outline" 
             className="cta-btn-outline"
             onClick={() => navigate('/contact') }>
              Contact
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorInfo;