import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Shield, FileText, Download, CheckCircle2, Users, BarChart3, Target, Award, Eye, Lock, TrendingUp, BookOpen, UserCheck, AlertCircle, ShieldCheck, FileCheck, ExternalLink, Search } from 'lucide-react';
import './CorporateGovernance.css';
import { useNavigate } from "react-router-dom";

const CorporateGovernance = () => {
    const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const governancePrinciples = [
    {
      icon: <Shield className="w-7 h-7" />,
      title: 'Integrity',
      description: 'In decision-making and business conduct',
      color: 'blue'
    },
    {
      icon: <Eye className="w-7 h-7" />,
      title: 'Transparency',
      description: 'In communication with all stakeholders',
      color: 'green'
    },
    {
      icon: <UserCheck className="w-7 h-7" />,
      title: 'Accountability',
      description: 'Of leadership and management',
      color: 'gold'
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: 'Fairness',
      description: 'Toward employees, partners, and communities',
      color: 'purple'
    }
  ];

  const governanceDocuments = [
    { name: 'Registration Certificate', icon: <FileText className="w-5 h-5" />, category: 'Certificates' },
    { name: 'CIBIL Membership Certificate', icon: <Award className="w-5 h-5" />, category: 'Certificates' },
    { name: 'Fair Practice Code', icon: <Shield className="w-5 h-5" />, category: 'Policies' },
    { name: 'Interest Rate Policy', icon: <BarChart3 className="w-5 h-5" />, category: 'Policies' },
    { name: 'Policy on Related Party Transactions', icon: <Users className="w-5 h-5" />, category: 'Policies' },
    { name: 'Co-Lending Policy', icon: <TrendingUp className="w-5 h-5" />, category: 'Policies' },
    { name: 'POSH Policy', icon: <Shield className="w-5 h-5" />, category: 'Policies' },
    { name: 'Whistleblower Policy', icon: <AlertCircle className="w-5 h-5" />, category: 'Policies' },
    { name: 'Customer Education Literature', icon: <BookOpen className="w-5 h-5" />, category: 'Resources' },
    { name: 'Corporate Governance Guidelines', icon: <FileText className="w-5 h-5" />, category: 'Guidelines' },
    { name: 'ESOP Policy', icon: <Award className="w-5 h-5" />, category: 'Policies' },
    { name: 'Independent Director Appointment Letter', icon: <UserCheck className="w-5 h-5" />, category: 'Governance' }
  ];

  const committees = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      name: 'Audit Committee',
      description: 'Ensures financial integrity and internal control',
      color: 'blue'
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: 'Remuneration Committee',
      description: 'Upholds fairness in leadership selection',
      color: 'green'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      name: 'Risk Management Committee',
      description: 'Monitors exposure and strategic risk',
      color: 'gold'
    },
    {
      icon: <Award className="w-6 h-6" />,
      name: 'CSR Committee',
      description: 'Aligns corporate initiatives with social responsibility',
      color: 'purple'
    }
  ];

  const complianceAreas = [
    { text: 'Adherence to RBI and NHB guidelines', icon: <CheckCircle2 className="w-5 h-5" /> },
    { text: 'Implementation of Anti-Money Laundering (KYC & AML) protocols', icon: <Lock className="w-5 h-5" /> },
    { text: 'Clear escalation paths through Whistleblower and Grievance mechanisms', icon: <AlertCircle className="w-5 h-5" /> },
    { text: 'Periodic independent audits to strengthen internal control environment', icon: <BarChart3 className="w-5 h-5" /> },
      // ⭐ New Items
  { text: 'Robust Data Protection and Privacy safeguards to ensure secure customer information handling', icon: <ShieldCheck className="w-5 h-5" /> },
  { text: 'Comprehensive Regulatory Reporting framework ensuring transparency ', icon: <FileCheck className="w-5 h-5" /> }
  ];

  const improvementCommitments = [
    'Periodically review and update all internal policies',
    'Publish relevant information to keep stakeholders informed',
    'Conduct board evaluations and compliance assessments annually',
    'Encourage transparent feedback from customers, employees, and regulators'
  ];

  const filteredDocuments = governanceDocuments.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="corporate-governance">
      {/* Hero Banner */}
     <section
          className="governance-hero bg-cover h-[70vh] bg-center bg-no-repeat w-full"
          style={{ backgroundImage: "url('/img/Banners/Corporate-Governance.webp')" }}>

          {/* DARK OVERLAY FOR OPACITY */}
            <div className="absolute inset-0 bg-black/60"></div>
        <div className="governance-hero-bg"></div>
        <div className="governance-hero-content">
          <div className="governance-seal">
            <Shield className="seal-shield" />
            <div className="seal-text">GOVERNANCE</div>
          </div>
          <h1 className="governance-hero-title">Corporate Governance</h1>
          <p className="governance-hero-subtitle">Integrity. Transparency. Accountability.</p>
          {/* <p className="governance-hero-text">
            At Aham, we believe good governance is the foundation of lasting trust.
            Our policies and disclosures reflect our dedication to ethical leadership, regulatory compliance, and fair treatment of all stakeholders.
          </p> */}
          {/* <Button className="governance-hero-btn">
            Explore Policies & Disclosures
            <ArrowRight className="w-5 h-5" />
          </Button> */}
        </div>
      </section>

      {/* Section 1: Governance Philosophy */}
      <section className="philosophy-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-tag">Our Foundation</span>
            <h2 className="section-title">Built on Principles that Inspire Confidence</h2>
            <p className="section-description">
              Corporate governance at Aham HFC goes beyond compliance — it is a value system that drives responsible growth.
            </p>
          </div>

          <div className="principles-grid">
            {governancePrinciples.map((principle, index) => (
              <Card key={index} className={`principle-card ${principle.color}`}>
                <div className="principle-icon-wrapper">{principle.icon}</div>
                <h3 className="principle-title">{principle.title}</h3>
                <p className="principle-description">{principle.description}</p>
              </Card>
            ))}
          </div>

          <p className="philosophy-note">
            We continuously strengthen these principles to deliver sustainable value and uphold public confidence.
          </p>
        </div>
      </section>

      {/* Section 2: Key Documents */}
      <section className="documents-section">
        <div className="section-container">
          <div className="documents-header">
            <div>
              <span className="section-tag">Transparency</span>
              <h2 className="section-title">Policies & Certificates</h2>
              <p className="documents-intro">
                Our governance structure is supported by clear, documented policies and disclosures.
                Key publicly available documents include:
              </p>
            </div>
            <div className="search-box">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <div className="documents-grid">
            {filteredDocuments.map((doc, index) => (
              <Card key={index} className="document-card">
                <div className="document-icon">{doc.icon}</div>
                <div className="document-content">
                  <span className="document-category">{doc.category}</span>
                  <h3 className="document-name">{doc.name}</h3>
                </div>
                {/* <Button className="document-download-btn">
                  <Download className="w-4 h-4" />
                </Button> */}
              </Card>
            ))}
          </div>

          {filteredDocuments.length === 0 && (
            <div className="no-results">
              <FileText className="no-results-icon" />
              <p>No documents found matching your search.</p>
            </div>
          )}

          {/* <p className="documents-note">
            Each document may be downloaded or viewed for full details.
          </p> */}
        </div>
      </section>

      {/* Section 3: Leadership & Committees */}
      <section className="leadership-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-tag">Oversight & Structure</span>
            <h2 className="section-title">Empowered Leadership, Accountable Governance</h2>
            <p className="section-description">
              Our governance model is anchored by a strong and independent Board of Directors.
              They oversee key committees that ensure transparency and fairness across all operations.
            </p>
          </div>

          <div className="committees-grid">
            {committees.map((committee, index) => (
              <Card key={index} className={`committee-card ${committee.color}`}>
                <div className="committee-header">
                  <div className="committee-icon">{committee.icon}</div>
                </div>
                <h3 className="committee-name">{committee.name}</h3>
                <p className="committee-description">{committee.description}</p>
                {/* <Button variant="outline" className="committee-btn">
                  View Charter
                  <ExternalLink className="w-4 h-4" />
                </Button> */}
              </Card>
            ))}
          </div>

          <Card className="charter-note">
            <Target className="charter-icon" />
            <p className="charter-text">
              Each committee functions under clearly defined charters, meeting regularly to uphold transparency and fairness across all operations.
            </p>
          </Card>
        </div>
      </section>

      {/* Section 4: Ethical Conduct */}
      <section className="ethics-section">
        <div className="section-container">
          <div className="ethics-layout">
            <div className="ethics-content">
              <span className="section-tag">Culture of Ethics</span>
              <h2 className="section-title-white">Doing the Right Thing — Always</h2>
              <p className="ethics-intro">
                We foster a culture of ethical behavior through continuous awareness, training, and internal vigilance systems.
              </p>
            </div>

            <div className="compliance-cards">
              {complianceAreas.map((area, index) => (
                <Card key={index} className="compliance-card">
                  <div className="compliance-icon">{area.icon}</div>
                  <p className="compliance-text">{area.text}</p>
                </Card>
              ))}
            </div>
          </div>

          <p className="ethics-footer">
            By promoting honesty and accountability, we ensure that every employee is an ambassador of trust.
          </p>
        </div>
      </section>

      {/* Section 5: Continuous Improvement */}
      {/* <section className="improvement-section">
        <div className="section-container">
          <div className="improvement-header">
            <RefreshCw className="refresh-icon" />
            <div>
              <span className="section-tag">Evolution & Growth</span>
              <h2 className="section-title">Commitment to Ongoing Governance Excellence</h2>
              <p className="improvement-intro">
                Governance is not static — it evolves with changing expectations and regulatory frameworks.
              </p>
            </div>
          </div>

          <div className="improvement-grid">
            {improvementCommitments.map((commitment, index) => (
              <Card key={index} className="improvement-card">
                <div className="improvement-number">{(index + 1).toString().padStart(2, '0')}</div>
                <p className="improvement-text">{commitment}</p>
                <CheckCircle2 className="improvement-check" />
              </Card>
            ))}
          </div>

          <Card className="governance-quote">
            <div className="quote-icon-wrapper">
              <Shield className="quote-icon" />
            </div>
            <blockquote className="quote-text">
              "True governance is achieved when integrity becomes a habit, not a requirement."
            </blockquote>
            <p className="quote-author">— Aham HFC</p>
          </Card>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="governance-cta">
        <div className="governance-cta-container">
          <Shield className="cta-governance-icon" />
          <h2 className="cta-governance-title">Access Our Governance Framework</h2>
          <p className="cta-governance-text">
            Download complete policies, view committee charters, or contact our governance team for detailed information.
          </p>
          <div className="cta-governance-actions">
            {/* <Button className="cta-governance-primary">
              <Download className="w-5 h-5" />
              Download All Documents
            </Button> */}
            {/* <Button variant="outline" className="cta-governance-secondary">
              Contact Governance Team
            </Button> */}

             <Button
             variant="outline"
              className="cta-governance-secondary"
                onClick={() => navigate("/contact")}
                 >
                 Contact Team
             </Button>       
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateGovernance;