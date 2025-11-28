import React, { useState } from "react";

const LeadershipPage = () => {
  const [activeTab, setActiveTab] = useState("team"); // team | directors
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedDirector, setSelectedDirector] = useState(null);

  // ---------------------------
  // TEAM MEMBERS DATA
  // ---------------------------
 const teamMembers = [
    {
      id: 1,
      name: "Venkatesh Kannappan",
      designation:
        "Founder, Managing Director & CEO",
      image: "/img/team/Venkatesh.jpg",
      bio: [
        "Mr. Venkatesh Kannappan is the Founder, Managing Director & CEO of Aham Housing Finance, a fast-growing affordable housing finance company committed to enabling low- and middle-income families to achieve their dream of homeownership. ",
        "Since founding Aham, Venkatesh has successfully led its transformation from a start-up into a trusted player in the affordable housing segment. Under his leadership, the company delivers innovative, low-cost housing finance solutions tsailored to underserved customer segments and is creating a meaningful social impact.",
         "At Aham Housing Finance, Venkatesh drives the company’s strategic growth, investor and stakeholder partnerships, operational excellence, regulatory compliance, and people development. His ability to combine business acumen with a strong social purpose is setting new benchmarks in the affordable housing finance industry.",
         //"Prior to founding Aham, Venkatesh held senior leadership roles in reputed financial institutions, where he played a pivotal role in scaling businesses and driving profitable growth.",
        ],
    },
    {
      id: 2,
      name: "Ajit Kumar Sarangi",
      designation: "Head Human Resources",
      image: "/img/team/Ajit.jpg",
      bio: [
        "Mr. Ajit Kumar Sarangi is the Head Human Resources at Aham Housing Finance, and a transformational HR leader with over 15 years of experience in shaping people strategies that drive organizational growth and cultural excellence. He holds a Post Graduate Program in Management from the Indira Group of Institutes and is currently pursuing his PhD from Lovely Professional University, reflecting his commitment to continuous learning and innovation in the HR domain.",
        //"Ajit has successfully led large-scale HR transformations across reputed organizations, including TVS Credit Services Limited, where he spearheaded initiatives to build leadership pipelines, enhance workforce productivity through AI and digital transformation, and embed a performance-driven culture. His professional journey also includes leadership roles at Siesta Hospitality & Services Limited and Mahindra Holidays & Resorts India Limited, where he developed expertise in organisational development, talent management, and employee engagement.",
      "At Aham Housing Finance, Ajit is driving a future-focused people strategy, fostering an inclusive and empowering workplace, and building capabilities that align with the company's vision for sustainable growth. His leadership is redefining HR as a key enabler of business success, balancing employee aspirations with organizational priorities.",
      "A passionate advocate for people-centric transformation, Ajit believes in leveraging HR innovation to unlock human potential and create workplaces where employees thrive and deliver exceptional outcomes. ",
      ],
    },
    {
      id: 3,
      name: "Ranju Abraham ",
      designation: "Business Head, Aham Housing Finance",
      image: "/img/team/Abraham.jpg",
      bio: [
        "Mr. Ranju Abraham brings over 13 years of rich experience in business development, construction finance, mortgage operations, and commercial credit. Known for his ability to lead large teams, manage strategic partnerships, and drive performance across regions, he is a strong addition to Aham’s leadership team.",
        "Before joining Aham, Ranju was Regional Manager – Home Loans at Axis Bank, where he successfully managed operations across Kerala and Karnataka. Earlier, at HDFC Ltd., he played a pivotal role in scaling the construction finance business, spearheading a vast sourcing network of over 250 staff, 200 bank branches, and 200+ channel partners. His expertise spans strategic planning, team building, credit evaluation, product training, and operational leadership.",
        "Academically, Ranju holds a PGDBM from Xavier Institute of Management & Entrepreneurship, a B.Tech. in Mechanical Engineering, and has cleared CFA Level 1.  ",
       
      ],
    },
     {
      id: 4,
      name: "Arunachalarajan",
      designation: "Chief Technology Officer, Aham Housing Finance",
      image: "/img/team/Arunachalarajan.jpg",
      bio: [
        "Mr. Arunachalarajan is the Chief Technology Officer at Aham Housing Finance, bringing over 17 years of expertise in driving large-scale IT transformations and delivering innovative technology solutions across diverse domains.",
        "With a decade in mid-level leadership roles, he has extensive experience in designing and executing IT initiatives in NBFCs and other sectors, including sales, collections, finance, compliance, HR, treasury, banking, and e-governance.",
        "Prior to joining Aham, Arunachalarajan held senior positions at TVS Credit Services Ltd., where he led over 26 IT projects, delivering impactful outcomes such as automating incentive payouts with Oracle Intelligent Advisor and developing WhatsApp-based systems to enhance collection efficiency.",
        "His earlier tenure at Tech Mahindra saw him manage IT application systems for marquee clients like State Bank of India and NISSAN North America, driving significant cost and efficiency gains.",
        //"At Aham Housing Finance, Arunachalarajan leads the company’s technology vision and digital transformation agenda. His expertise in customer-facing solutions and proficiency in modern technologies like PaaS, Salesforce, J2EE, and cloud platforms (AWS, OCI) are key to building scalable, secure, and future-ready systems that power business growth. ",
        
      ],
    },
     {
      id: 5,
      name: "Rajkumar PS",
      designation: "Head Internal Audit",
      image: "/img/team/Rajkumar.jpg",
      bio: [
        "Mr. Rajkumar brings with him deep expertise in credit, risk management, compliance, and internal controls, built over a career spanning leadership roles at Manappuram Home Finance, Hinduja Housing Finance, and L&T Housing Finance.",
        "With proven capability in credit risk evaluation, operational governance, fraud prevention, and regulatory compliance, he has successfully managed multi-location credit operations and delivered consistent results across diverse lending portfolios.",
        "Before taking charge as Head – Internal Audit & Risk at Aham Housing Finance, Rajkumar served as our National Credit Manager, where he developed a thorough understanding of Aham’s business model, operational framework, and governance priorities.",
        "In his current role, Rajkumar is responsible for establishing a comprehensive risk and audit framework aligned with NHB and RBI guidelines, conducting independent reviews of credit and operational processes, and proactively identifying potential risks. ",
        " ",
      ],
    },
     {
      id: 6,
      name: "Ganesh Janakiram",
      designation: "Senior Leadership, Aham Housing Finance",
      image: "/img/team/Ganesh.jpg",
      bio: [
        "Mr. Ganesh Janakiram brings with him over three decades of diverse experience in the financial services industry, spanning operations, credit, compliance, human resources, and business planning.",
        "He has successfully navigated both strategic and execution-driven roles at leading institutions such as Sundaram Home Finance, Hinduja Leyland Finance, Magma Fincorp, and Sundaram Finance Ltd.",
        "In his most recent role as Deputy General Manager – Operations at Sundaram Home Finance, Ganesh was instrumental in overseeing central processing operations, coordinating IT systems for credit and compliance, and managing post-disbursement services. ",
        "With a deep understanding of customer lifecycle processes, audit and compliance frameworks, and technology-enabled operational excellence, Ganesh adds significant strength to Aham’s leadership team. His expertise will be pivotal in building a robust operational backbone and scalable service infrastructure as Aham continues its growth journey. ",
        " ",
      ],
    },
     {
      id: 7,
      name: "Selvakumar P",
      designation: "National Credit Manager",
      image: "/img/team/Selvakumar.jpg",
      bio: [
        "Mr. Selvakumar brings with him over 18 years of extensive experience in credit underwriting, risk management, product and policy development, compliance, audit, and portfolio monitoring across leading banks and NBFCs.",
        "His wide exposure to lending products—including home loans, LAP, unsecured business loans, co-lending, leasing, and digital finance—positions him as a key driver of Aham’s credit and risk strategy.",
        "Before joining Aham, Selvakumar led the centralized credit and risk functions for SME products at Cholamandalam Investment and Finance Company, managing credit exposure up to ₹25 Cr. ",
        "With a proven ability to align business growth with robust risk frameworks, and deep expertise in digital LOS/LMS implementations, Selvakumar brings a strong balance of strategic foresight and execution.",
        " ",
      ],
    },
     {
      id: 8,
      name: "Srinivasababu R",
      designation: "National of Collections Manager",
      image: "/img/team/Srinivasababu.jpg",
      bio: [
        "Mr. Srinivasababu R brings over 16 years of extensive experience in portfolio and receivables management, risk recovery strategies, and legal collections across secured and unsecured lending products, including home loans, mortgages, and strategic SME loans. ",
        "Before joining Aham Housing Finance, he served as AVP – Zonal Collections Manager at SMFG India Home Finance Ltd., where he successfully led collections operations across Tamil Nadu and Karnataka.",
        "His expertise in secured recoveries and legal proceedings under SARFAESI and NI Act (Sec 138), combined with his ability to drive team efficiency and mitigate portfolio risk, makes him a pivotal leader in Aham’s credit and recovery ecosystem.",
        "Earlier in his career, Srinivasababu held key roles at Religare Finvest, Royal Bank of Scotland, and GE-SBI Cards, managing critical functions such as capital reporting, KYC systems, cheque clearing, and recovery agency operations.",
     //"At Aham Housing Finance, Srinivasababu leads the collections strategy with a focus on operational excellence, risk mitigation, and strengthening the company’s asset quality. ",
      ],
    },
    {
      id: 9,
      name: "Priya Datta Joshi ",
      designation: "Chief Compliance Officer, Aham Housing Finance",
      image: "/img/team/Priya.jpg",
      bio: [
        "Mr. Priya Datta Joshi is the Chief Compliance Officer at Aham Housing Finance and has been an integral part of the company since its inception. As one of the earliest members of the organization, he has played a foundational role in setting up the governance, regulatory, and compliance framework that underpins Aham’s operations today. ",
        "An associate member of the Institute of Company Secretaries of India (ICSI), Mr. Joshi holds bachelor’s degrees in Commerce and Law from Sambalpur University, Odisha. With a deep understanding of corporate law, regulatory compliance, and governance practices, he brings over a decade of expertise in managing secretarial functions for dynamic and growing organizations.",
        "At Aham Housing Finance, Joshi leads all secretarial, compliance, and governance functions with a sharp focus on ensuring the company operates in full alignment with statutory and regulatory requirements. ",
        "He oversees board processes, corporate filings, stakeholder communications, and the implementation of sound governance practices that inspire confidence among regulators, investors, and partners.  ",
      ],
    },
  ];

  // ---------------------------
  // DIRECTORS DATA
  // ---------------------------
  const directors = [
    {
      id: 1,
      name: "S. V. Raja Vaidyanathan",
      designation: "Chairman",
      image: "/img/Directors/raja.jpg",
      bio: [
        "Shri S. V. Raja Vaidyanathan, B.Tech (IIT Madras), MBA (IIM Calcutta), AICWAI & ACS, is a dynamic professional with over 40 years of experience across industries such as financial services, media, telecom, and petrochemicals. ",
        "He has successfully promoted and managed multiple ventures, including the renowned Asirvad Micro Finance Ltd. A visionary leader, he brings deep expertise in strategy, governance, and business transformation, driving the organisation toward sustainable growth and innovation.",
        
      ],
    },
    {
      id: 2,
      name: "Venkatesh Kannappan ",
      designation: "Managing Director",
      image: "/img/Directors/Venkatesh.jpg",
      bio: [
        "Shri Venkatesh Kannappan, B.E (EEE), MBA (Marketing & Systems), PGDSM (Software), has over 20 years of experience in the banking and financial services sector. He has a strong track record in business strategy, risk management, startup scaling, and product development.  ",
        "A senior industry professional and angel investor, he focuses on building scalable, profitable businesses and brings entrepreneurial insight and strategic vision to the Board.",
       
      ],
    },
    {
      id: 3,
      name: "Srinivas Acharya",
      designation: " Independent Director",
      image: "/img/Directors/Srinivas.jpg",
      bio: [
        "Shri Srinivas Acharya brings 45 years of experience in banking and financial services, including nearly four decades in the Sundaram Finance Group. ",
        "He served as Managing Director of Sundaram Home Finance for 10 years, where he managed strategic growth and international joint ventures, and previously held senior roles as Deputy MD of Sundaram Finance and MD of Lakshmi General Finance.",
        " Post-retirement, he continues to serve on multiple boards across financial services and manufacturing sectors, offering deep insights into governance, risk management, and strategic leadership.",
      ],
    },
      {
      id: 4,
      name: "Geetha Lakshmi Koduru",
      designation: "Independent Director",
      image: "/img/Directors/Geetha.jpg",
      bio: [
        "Ms. Geetha Lakshmi Koduru, a Chartered Accountant, has more than 30 years of experience in corporate audits, tax advisory, and compliance. ",
        "She is the founding partner of Lily and Geetha Associates, a reputed firm specializing in direct and indirect taxes, FEMA compliance, and corporate audits. ",
        "She also holds a Diploma in Insurance and Risk Management (D.I.R.M.), adding depth in financial risk and governance. Her expertise strengthens the Board’s focus on transparency and accountability.",
        
      ],
    },
      {
      id: 5,
      name: "Satish Mehta",
      designation: " Independent Director",
      image: "/img/Directors/Satish.jpg",
      bio: [
        "Shri Satish Mehta is a pioneer in housing finance and credit information with over 45 years of experience. He played a key role in establishing India’s first credit bureau – CIBIL, and has advised governments and global institutions such as the World Bank and IFC on developing credit infrastructure across Asia, the Middle East, and Africa. ",
        "A Chartered Accountant with strong governance and compliance expertise, he now serves as a strategic advisor to fintech and housing finance companies, adding exceptional value to the Board.",
      ],
    },
      {
      id: 6,
      name: "D. R. Dogra",
      designation: "Independent Director",
      image: "/img/Directors/Dogra.jpg",
      bio: [
        "Shri D. R. Dogra brings over 37 years of experience in banking and credit rating. As the former Managing Director & CEO of CARE Ratings, he played a pivotal role in making it India’s second-largest credit rating agency and successfully led its stock exchange listing. ",
        "He has served on the boards of leading institutions including IDFC First Bank, L&T Finance, and Asirvad Microfinance, bringing expertise in risk management, governance, and strategic planning to the Board.",
        
      ],
    },
  ];

  return (
        <>
     {/* --------------------------
    Banner Section
--------------------------- */}
<section
  className="relative bg-cover bg-center bg-no-repeat text-white py-32 px-6 lg:px-24 overflow-hidden"
  style={{
    backgroundImage:
      "linear-gradient(rgba(3, 18, 47, 0.7), rgba(3, 18, 47, 0.7)), url('/img/eligibility/management.jpg')",
  }}
>
  <div className="relative text-center z-10">
    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
      Leadership & Vision
    </h1>
    <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100 leading-relaxed">
      Meet our Leadership Team & Board of Directors
    </p>
  </div>
</section>

{/* --------------------------
    BUTTONS BELOW BANNER
--------------------------- */}
<div className="flex justify-center mt-[-40px] mb-16 z-20 relative">
  <div className="bg-white/90 backdrop-blur-lg px-6 py-3 rounded-full shadow-xl flex gap-4">

    <button
      className={`px-6 py-3 rounded-full font-semibold transition ${
        activeTab === "team"
          ? "bg-blue-700 text-white shadow-lg"
          : "bg-white text-blue-700 border border-blue-200"
      }`}
      onClick={() => setActiveTab("team")}
    >
      Management Team
    </button>

    <button
      className={`px-6 py-3 rounded-full font-semibold transition ${
        activeTab === "directors"
          ? "bg-blue-700 text-white shadow-lg"
          : "bg-white text-blue-700 border border-blue-200"
      }`}
      onClick={() => setActiveTab("directors")}
    >
      Board of Directors
    </button>

  </div>
</div>

      {/* --------------------------
          MANAGEMENT TEAM SECTION
      --------------------------- */}
      {activeTab === "team" && (
        <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100">

          <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            Our Management Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-16">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-100 object-cover"
                />

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.designation}
                  </p>

                  <button
                    onClick={() => setSelectedMember(member)}
                    className="text-red-600 font-medium hover:text-blue-800"
                  >
                    View Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>
      )}

      {/* --------------------------
          DIRECTORS SECTION
      --------------------------- */}
      {activeTab === "directors" && (
        <section className="relative py-20 px-6 lg:px-24 bg-gradient-to-b from-blue-50 via-white to-blue-100">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            Board of Directors
          </h2>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {directors.map((director) => (
              <div
                key={director.id}
                className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm"
              >
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-xl object-cover"
                />

                <h3 className="text-xl font-extrabold text-gray-900 text-center">
                  {director.name}
                </h3>
                <p className="text-blue-700 font-medium text-sm text-center mb-4">
                  {director.designation}
                </p>
                <div className="p-3 text-center">
                    <button
                      onClick={() => setSelectedDirector(director)}
                      className="mt-4 text-red-600 hover:text-blue-800  text-sm font-semibold"
                    >
                      View Profile →
                    </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* --------------------------
          TEAM MEMBER MODAL
      --------------------------- */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-4xl w-[90%] relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-gray-600 text-2xl"
              onClick={() => setSelectedMember(null)}
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={selectedMember.image}
                className="w-60 h-72 object-cover rounded-2xl shadow-lg"
                alt=""
              />

              <div>
                <h3 className="text-2xl font-bold text-blue-700">
                  {selectedMember.name}
                </h3>
                <p className="text-gray-700 font-medium mb-4">
                  {selectedMember.designation}
                </p>

                {selectedMember.bio.map((para, i) => (
                  <p key={i} className="text-gray-700 mb-3 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --------------------------
          DIRECTOR MODAL
      --------------------------- */}
      {selectedDirector && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-4xl w-[90%] relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-gray-600 text-2xl"
              onClick={() => setSelectedDirector(null)}
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={selectedDirector.image}
                className="w-60 h-72 object-cover rounded-2xl shadow-lg"
                alt=""
              />

              <div>
                <h3 className="text-2xl font-bold text-blue-700">
                  {selectedDirector.name}
                </h3>
                <p className="text-gray-700 font-medium mb-4">
                  {selectedDirector.designation}
                </p>

                {selectedDirector.bio.map((para, i) => (
                  <p key={i} className="text-gray-700 mb-3 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadershipPage;
