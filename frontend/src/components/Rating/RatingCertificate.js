import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Award, Download, Shield, TrendingUp, FileCheck, Users, CheckCircle2, Eye, Target, BarChart3, Star, Calendar, ExternalLink, ArrowRight } from 'lucide-react';
import './RatingCertificate.css';
import { useNavigate } from "react-router-dom";

const RatingCertificate = () => {
   const navigate = useNavigate();
  const whyItMattersPoints = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Trustworthiness',
      description: 'Quick indicator of financial credibility'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Financial Health',
      description: 'Objective assessment of stability'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Growth Potential',
      description: 'Long-term sustainability indicator'
    }
  ];

  const certificateHighlights = [
    {
      icon: <Award className="w-5 h-5" />,
      label: 'Rating Agency',
      value: 'Recognised Independent Agency'
    },
    {
      icon: <Star className="w-5 h-5" />,
      label: 'Assigned Grade',
      value: 'AA+',
      highlight: true
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: 'Issued On',
      value: 'January 2025'
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      label: 'Validity Period',
      value: '12 Months'
    }
  ];

  const keyStrengths = [
    'Consistent earnings',
    'Strong capital adequacy',
    'Prudent risk management',
    'Robust governance practices'
  ];

  const ratingProcess = [
    {
      number: '01',
      title: 'Business Profile Review',
      description: 'Comprehensive analysis of operations and market position'
    },
    {
      number: '02',
      title: 'Financial Metrics Assessment',
      description: 'Detailed review of audited financials and ratios'
    },
    {
      number: '03',
      title: 'Governance & Management',
      description: 'Evaluation of leadership quality and practices'
    },
    {
      number: '04',
      title: 'Industry Benchmarking',
      description: 'Comparison against peer institutions'
    },
    {
      number: '05',
      title: 'Rating Issuance',
      description: 'Final grade based on rigorous criteria'
    }
  ];

  const benefits = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Greater Transparency',
      description: 'Clear insight into our financial credibility and operations'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Increased Assurance',
      description: 'Confidence for investment and lending decisions'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Better Terms',
      description: 'Enhanced ability to negotiate favorable conditions'
    }
  ];

  const commitmentPillars = [
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Robust Asset Quality',
      description: 'Prudent lending practices'
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Risk-Aware Growth',
      description: 'Strategies aligned with regulations'
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Digital Innovation',
      description: 'Real-time financial monitoring'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Ethical Governance',
      description: 'Integrity at every level'
    }
  ];

  return (
    <div className="rating-certificate">
      {/* Hero Banner */}
       <section
  className="rating-hero relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/img/Banners/Rating-Certificate.webp')" }}   // ← your bg image
>
  {/* DARK OVERLAY (adjust opacity here) */}
  <div className="absolute inset-0 bg-black/50"></div>
        
        
        
        <div className="rating-hero-bg"></div>
        <div className="rating-hero-content">
          <div className="certificate-badge-hero">
            <Award className="badge-icon" />
            <div className="badge-grade">AA+</div>
          </div>
          <h1 className="rating-hero-title">Our Credit Rating Certificate</h1>
          <p className="rating-hero-subtitle">A Mark of Financial Strength</p>
          {/* <p className="rating-hero-text">
            At Aham, our commitment to transparent financial performance is validated by independent rating agencies. 
            This certificate reflects our credibility, stability and investor confidence.
          </p> */}
          {/* <Button className="download-certificate-btn">
            <Download className="w-5 h-5" />
            Download the Certificate
          </Button> */}
        </div>
      </section>

      {/* Section 1: Why It Matters */}
      <section className="why-matters-section">
        <div className="section-container">
          <div className="why-matters-layout">
            <div className="why-matters-content">
              <span className="section-tag">Understanding the Value</span>
              <h2 className="section-title">Why A Credit Rating Certificate Matters</h2>
              <div className="why-matters-text">
                <p className="why-lead">
                  A credit rating certificate provides an objective assessment of a company's ability to meet its financial obligations and manage risk.
                </p>
                <p className="why-secondary">
                  For our stakeholders—investors, lenders, partners—it serves as a quick indicator of trustworthiness, financial health and the potential for long-term growth.
                </p>
                <p className="why-secondary">
                  In an increasingly complex capital market, this certificate enhances transparency, strengthens relationships and opens access to better financing terms.
                </p>
              </div>
            </div>

            <div className="why-matters-cards">
              {whyItMattersPoints.map((point, index) => (
                <Card key={index} className="why-card">
                  <div className="why-card-icon">{point.icon}</div>
                  <h3 className="why-card-title">{point.title}</h3>
                  <p className="why-card-description">{point.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Certificate Highlights */}
      <section className="highlights-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-tag">Our Credentials</span>
            <h2 className="section-title">Aham's Rating Certificate Highlights</h2>
          </div>

          <div className="highlights-display">
            <div className="certificate-visual">
              <div className="certificate-seal">
                <Award className="seal-icon" />
                <div className="seal-grade">AA+</div>
                <div className="seal-label">Credit Rating</div>
              </div>
            </div>

            <div className="highlights-grid">
              {certificateHighlights.map((item, index) => (
                <Card key={index} className={`highlight-card ${item.highlight ? 'featured' : ''}`}>
                  <div className="highlight-icon">{item.icon}</div>
                  <div className="highlight-info">
                    <span className="highlight-label">{item.label}</span>
                    <span className="highlight-value">{item.value}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="strengths-card">
            <h3 className="strengths-heading">Key Strengths Cited</h3>
            <div className="strengths-grid">
              {keyStrengths.map((strength, index) => (
                <div key={index} className="strength-item">
                  <CheckCircle2 className="strength-icon" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
            <p className="strengths-note">
              <strong>What it means for you:</strong> Better confidence in our ability to serve your financing needs reliably.
            </p>
          </Card>
        </div>
      </section>

      {/* Section 3: Rating Process */}
      <section className="process-section-rating">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-tag">Behind the Scenes</span>
            <h2 className="section-title">How the Rating Was Determined</h2>
            <p className="section-description">
              The process involves a detailed review of our business profile, financial metrics, governance practices and external environment.
              Analysts review audited financials, assess management quality, benchmark us against industry peers, and issue a rating based on rigorous criteria.
            </p>
          </div>

          <div className="process-timeline-rating">
            {ratingProcess.map((step, index) => (
              <div key={index} className="timeline-step-rating">
                <div className="step-number-rating">{step.number}</div>
                <div className="step-content-rating">
                  <h3 className="step-title-rating">{step.title}</h3>
                  <p className="step-description-rating">{step.description}</p>
                </div>
                {index < ratingProcess.length - 1 && (
                  <div className="step-connector-rating"></div>
                )}
              </div>
            ))}
          </div>

          <Card className="monitoring-card">
            <Shield className="monitoring-icon" />
            <div className="monitoring-content">
              <h3 className="monitoring-title">Continuous Monitoring</h3>
              <p className="monitoring-text">
                After issuance, the rating is monitored continuously — our commitment to maintaining high standards ensures that stakeholders 
                stay informed about any changes in outlook or performance.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Section 4: Benefits & Next Steps */}
      <section className="benefits-section-rating">
        <div className="section-container">
          <div className="benefits-layout">
            <div className="benefits-content">
              <span className="section-tag">Your Advantage</span>
              <h2 className="section-title">Your Benefits & How to Access the Certificate</h2>
              <p className="benefits-intro">
                With our credit rating certificate at hand, you gain:
              </p>

              <div className="benefits-cards">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="benefit-card-rating">
                    <div className="benefit-icon-rating">{benefit.icon}</div>
                    <div className="benefit-text">
                      <h3 className="benefit-title-rating">{benefit.title}</h3>
                      <p className="benefit-description-rating">{benefit.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="next-steps-card">
              <h3 className="next-steps-heading">Next Steps</h3>
              <div className="next-steps-list">
                <div className="next-step-item">
                  <div className="step-number-badge">1</div>
                  <p>Click <strong>Download the Certificate</strong> above to obtain the PDF</p>
                </div>
                <div className="next-step-item">
                  <div className="step-number-badge">2</div>
                  <p>Review the rating details and highlights</p>
                </div>
                <div className="next-step-item">
                  <div className="step-number-badge">3</div>
                  <p>For queries, contact our Investor Relations team</p>
                </div>
              </div>
              <div className="contact-info">
                <Users className="contact-icon" />
                <div>
                  <p className="contact-label">Investor Relations</p>
                  <a href="mailto:investors@ahamhfc.com" className="contact-link">investors@ahamhfc.com</a>
                </div>
              </div>
              <p className="update-note">
                <strong>Stay updated:</strong> We publish any rating revisions or outlook changes promptly, ensuring you're always in the know.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Commitment */}
      <section className="commitment-section">
        <div className="section-container">
          <div className="commitment-header">
            <span className="section-tag">Our Pledge</span>
            <h2 className="section-title-white">Our Promise — Sustaining Financial Integrity & Growth</h2>
            <p className="commitment-intro">
              At Aham, we view our credit rating not as a milestone, but as a responsibility. Each rating renewal motivates us to strengthen 
              our financial governance, enhance transparency, and uphold investor confidence.
            </p>
          </div>

          <div className="commitment-pillars">
            {commitmentPillars.map((pillar, index) => (
              <Card key={index} className="pillar-card">
                <div className="pillar-icon">{pillar.icon}</div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-description">{pillar.description}</p>
              </Card>
            ))}
          </div>

          <p className="commitment-footer">
            We remain committed to sustaining our high credit standards and ensuring our stakeholders can always trust the integrity of our financial ecosystem.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rating-cta">
        <div className="rating-cta-container">
          <Award className="cta-award-icon" />
          <h2 className="cta-rating-title">Access Our Credit Rating Certificate</h2>
          <p className="cta-rating-text">
            Download the complete certificate and review our financial strength indicators.
          </p>
          <div className="cta-rating-actions">
            <Button className="cta-rating-primary">
              <Download className="w-5 h-5" />
              Download Certificate
            </Button>
            <Button variant="outline" className="cta-rating-secondary"
 onClick={() => navigate('/contact')}>
              Contact Team
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RatingCertificate;