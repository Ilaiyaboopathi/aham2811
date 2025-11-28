// src/components/PMAY/PMAY2Page.jsx
import React from 'react';
import pmayImg from '../../img/pmay.jpg'; // <-- correct path to src/img/pmay.jpg

const PMAY2Page = () => {
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 text-gray-900"
      style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
    >
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white py-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 131, 246, 0.2), rgba(79, 70, 229, 0.9)),
            url('img/pmay/Pmay.webp')
          `,
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-4xl font-extrabold mb-4">
            Your Home, Your Future — Claim PMAY Benefits Up to ₹1.50 Lakhs
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Empowering urban families with affordable housing under the <strong>“Housing for All”</strong> mission.
          </p>
          <a
            href="https://aham.mbwhost.in/pmay2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full hover:bg-indigo-100 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Urban 2.0 Overview Section */}
      <div className="container mx-auto px-6 py-16 max-w-6xl flex flex-col lg:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-indigo-600">Urban 2.0</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            <strong className="text-indigo-600">Urban 2.0</strong> is a flagship government initiative for affordable housing
            for urban families in EWS, LIG, and MIG segments.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            It ensures secure, sustainable, and affordable homes with financial support to uplift families and empower communities.
          </p>

          <button
            onClick={() => (window.location.href = '/contact')}
            className="bg-[#ed2636] text-white px-6 py-3 rounded-lg shadow hover:bg-primary-700 transition"
          >
            Contact Us
          </button>
        </div>

        {/* Right Image Card */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            <img
              src={pmayImg}
              alt="Affordable Housing Scheme"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Supporting Urban Housing Needs
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creating affordable housing opportunities for all urban families, ensuring a safe & secure future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 pb-16">
        <div className="bg-white shadow-2xl rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">Eligibility Criteria</h2>
          <div className="overflow-x-auto rounded-xl">
            <table className="min-w-full border border-gray-200 text-base">
              <thead className="bg-indigo-800 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold rounded-tl-xl">CLSS Scheme Type</th>
                  <th className="py-4 px-6 text-left font-semibold">EWS</th>
                  <th className="py-4 px-6 text-left font-semibold">LIG</th>
                  <th className="py-4 px-6 text-left font-semibold rounded-tr-xl">MIG</th>
                </tr>
              </thead>
              <tbody className="bg-gray-50">
                <tr className="border-t border-gray-200">
                  <td className="py-4 px-6 font-medium">Annual Household Income</td>
                  <td className="py-4 px-6">Up to ₹3 lakh p.a.</td>
                  <td className="py-4 px-6">Up to ₹6 lakh p.a.</td>
                  <td className="py-4 px-6">Up to ₹9 lakh p.a.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 space-y-6">
            <h3 className="text-xl font-semibold text-indigo-800">House Ownership</h3>
            <p className="text-gray-600">
              Applicants must not own a pucca house in India. Property must be registered in the name of
              a <strong className="text-indigo-600">female head</strong> or jointly.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">Loan & Property Limits</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="bg-indigo-50 p-4 rounded-lg"><strong className="text-indigo-600">Max Loan:</strong> ₹25 lakh</li>
            <li className="bg-indigo-50 p-4 rounded-lg"><strong className="text-indigo-600">Max House Value:</strong> ₹35 lakh</li>
            <li className="bg-indigo-50 p-4 rounded-lg"><strong className="text-indigo-600">Max Carpet Area:</strong> 120 sqm</li>
          </ul>
        </div>

        <div className="bg-white shadow-2xl rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">Subsidy Details</h2>
          <ul className="space-y-3">
            <li>✔ <strong className="text-indigo-600">Interest Subsidy:</strong> 4% on first ₹8 lakh (up to 12 years).</li>
            <li>✔ <strong className="text-indigo-600">NPV:</strong> ₹1.50 lakh at 8.5% discount rate.</li>
            <li>✔ Subsidy released in 5 yearly installments.</li>
          </ul>
        </div>

        <div className="bg-white shadow-2xl rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">Additional Conditions</h2>
          <ul className="space-y-3">
            <li>✔ Aadhaar mandatory for all family members.</li>
            <li>✔ Self-declaration required.</li>
            <li>✔ Must apply via official PMAY portal.</li>
            <li>✔ Approved layout plans required.</li>
            <li>✔ Geo-tagging mandatory for disbursement.</li>
            <li>✔ Subsidy can be availed once only.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PMAY2Page;
