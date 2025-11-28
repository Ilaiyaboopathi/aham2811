import React, { useState } from "react";

const Directors = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleBio = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // 🧑‍💼 Static Directors Data
  const directors = [
    {
      id: 1,
      name: "S. V. Raja Vaidyanathan",
      designation: "Chairman",
      image: "/img/Directors/raja.jpg",
      bio: [
        "Shri S. V. Raja Vaidyanathan, B.Tech (IIT Madras), MBA (IIM Calcutta), AICWAI & ACS, is a dynamic professional with over 40 years of experience across industries such as financial services, media, telecom, and petrochemicals. He has successfully promoted and managed multiple ventures, including the renowned Asirvad Micro Finance Ltd. A visionary leader, he brings deep expertise in strategy, governance, and business transformation, driving the organisation toward sustainable growth and innovation.",
        
      ],
    },
    {
      id: 2,
      name: "Venkatesh Kannappan ",
      designation: "Managing Director",
      image: "/img/Directors/Venkatesh.jpg",
      bio: [
        "Shri Venkatesh Kannappan, B.E (EEE), MBA (Marketing & Systems), PGDSM (Software), has over 20 years of experience in the banking and financial services sector. He has a strong track record in business strategy, risk management, startup scaling, and product development. A senior industry professional and angel investor, he focuses on building scalable, profitable businesses and brings entrepreneurial insight and strategic vision to the Board. ",
       
      ],
    },
    {
      id: 3,
      name: "Srinivas Acharya",
      designation: " Independent Director",
      image: "/img/Directors/Srinivas.jpg",
      bio: [
        "Shri Srinivas Acharya brings 45 years of experience in banking and financial services, including nearly four decades in the Sundaram Finance Group. He served as Managing Director of Sundaram Home Finance for 10 years, where he managed strategic growth and international joint ventures, and previously held senior roles as Deputy MD of Sundaram Finance and MD of Lakshmi General Finance. Post-retirement, he continues to serve on multiple boards across financial services and manufacturing sectors, offering deep insights into governance, risk management, and strategic leadership.",
        
      ],
    },
      {
      id: 4,
      name: "Geetha Lakshmi Koduru",
      designation: "Independent Director",
      image: "/img/Directors/Geetha.jpg",
      bio: [
        "Ms. Geetha Lakshmi Koduru, a Chartered Accountant, has more than 30 years of experience in corporate audits, tax advisory, and compliance. She is the founding partner of Lily and Geetha Associates, a reputed firm specializing in direct and indirect taxes, FEMA compliance, and corporate audits. She also holds a Diploma in Insurance and Risk Management (D.I.R.M.), adding depth in financial risk and governance. Her expertise strengthens the Board’s focus on transparency and accountability.",
        
      ],
    },
      {
      id: 5,
      name: "Satish Mehta",
      designation: " Independent Director",
      image: "/img/Directors/Satish.jpg",
      bio: [
        "Shri Satish Mehta is a pioneer in housing finance and credit information with over 45 years of experience. He played a key role in establishing India’s first credit bureau – CIBIL, and has advised governments and global institutions such as the World Bank and IFC on developing credit infrastructure across Asia, the Middle East, and Africa. A Chartered Accountant with strong governance and compliance expertise, he now serves as a strategic advisor to fintech and housing finance companies, adding exceptional value to the Board.",
        
      ],
    },
      {
      id: 6,
      name: "D. R. Dogra",
      designation: "  Independent Director",
      image: "/img/Directors/Dogra.jpg",
      bio: [
        "Shri D. R. Dogra brings over 37 years of experience in banking and credit rating. As the former Managing Director & CEO of CARE Ratings, he played a pivotal role in making it India’s second-largest credit rating agency and successfully led its stock exchange listing. He has served on the boards of leading institutions including IDFC First Bank, L&T Finance, and Asirvad Microfinance, bringing expertise in risk management, governance, and strategic planning to the Board.",
        
      ],
    },
  ];

  return (
    <>
      {/* 🌟 Banner Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-32 px-6 lg:px-24 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(3, 18, 47, 0.7), rgba(3, 18, 47, 0.7)), url('/img/eligibility/management.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <div className="relative text-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Leadership & Vision
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Meet the Board of Directors guiding Aham Housing Finance toward
            excellence, innovation, and trust.
          </p>
        </div>
      </section>

      {/* 👇 Directors Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-100 py-20 px-6 lg:px-24">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl opacity-40 animate-pulse"></div>

        <div className="relative text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent tracking-tight">
            Board of Directors
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 mb-5 rounded-full"></div>
        </div>

        <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {directors.map((director, index) => (
            <div
              key={director.id}
              className="group relative bg-white/70 backdrop-blur-xl border border-blue-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.15)] transition-all duration-700 p-8 w-full max-w-sm overflow-hidden"
            >
              <div className="relative flex flex-col items-center text-center z-10">
                <div className="relative mb-6">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg ring-4 ring-blue-100 group-hover:ring-blue-400 transition-all duration-700 transform group-hover:scale-110"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors">
                  {director.name}
                </h3>
                <p className="text-blue-700 font-medium text-sm mb-4">
                  {director.designation}
                </p>

                <div
                  className={`text-gray-700 text-justify text-sm space-y-3 transition-all duration-700 ease-in-out ${
                    expandedIndex === index
                      ? "max-h-[600px] opacity-100"
                      : "max-h-[90px] opacity-70 overflow-hidden"
                  }`}
                >
                  {director.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <button
                  onClick={() => toggleBio(index)}
                  className="mt-4 text-blue-600 text-sm font-semibold hover:text-blue-800 transition-all duration-300 hover:underline"
                >
                  {expandedIndex === index ? "Show Less ▲" : "Read More ▼"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Directors;
