import React, { useState } from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const ContactUs = () => {
  const [loanType, setLoanType] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("Anakapally");

  const branches = [
    {
      name: "Anakapally",
      region: "AP",
      inception: "25-Mar-25",
      address: "10-06-68/1, II Floor, Pillavaari Veedhi, Anakapalli - 531001",
      contact: "9176032225",
      mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=83.0000%2C17.6800%2C83.0100%2C17.6900&amp;layer=mapnik&amp;marker=17.6850%2C83.0050",
      largerMapUrl: "https://www.openstreetmap.org/?mlat=17.6850&mlon=83.0050#map=15/17.6850/83.0050",
    },
    {
      name: "Guntur",
      region: "AP",
      inception: "11-Feb-22",
      address: "6-4-9/1, Arundelpet, Guntur - 522001",
      contact: "7824852579",
      mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=80.4300%2C16.3000%2C80.4400%2C16.3100&amp;layer=mapnik&amp;marker=16.3050%2C80.4350",
      largerMapUrl: "https://www.openstreetmap.org/?mlat=16.3050&mlon=80.4350#map=15/16.3050/80.4350",
    },
    {
      name: "Nellore",
      region: "AP",
      inception: "20-Mar-23",
      address: "3rd floor, Sridhar's Krishna Towers, Annamayya circle, Mini By Pass Road, Nellore - 524003",
      contact: "7824045935",
      mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=79.9700%2C14.4300%2C79.9800%2C14.4400&amp;layer=mapnik&amp;marker=14.4350%2C79.9750",
      largerMapUrl: "https://www.openstreetmap.org/?mlat=14.4350&mlon=79.9750#map=15/14.4350/79.9750",
    },
    {
      name: "Rajamundry",
      region: "AP",
      inception: "26-Feb-25",
      address: "DNO:79-02-04/1B, Tilak Road Revenue Ward No:30, Rajahmundry, Andhra Pradesh - 533103",
      contact: "9989796410",
      mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=81.7600%2C16.9900%2C81.7700%2C17.0000&amp;layer=mapnik&amp;marker=16.9950%2C81.7650",
      largerMapUrl: "https://www.openstreetmap.org/?mlat=16.9950&mlon=81.7650#map=15/16.9950/81.7650",
    },
  ];

  const selectedBranchData = branches.find((branch) => branch.name === selectedBranch);

  return (
    <div className="bg-gray-50 font-sans text-gray-900 overflow-hidden">
      {/* Hero Section (unchanged) */}
      <section className="relative h-[28rem] md:h-[32rem] bg-gradient-to-t from-blue-900 to-blue-600 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-25"></div>
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="relative z-10 text-center px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg"
          >
            Contact AHAM Housing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-white/90 text-lg md:text-xl max-w-lg mx-auto"
          >
            Let us help you find the perfect home financing solution today.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Section (unchanged) */}
      <section className="max-w-7xl mx-auto px-4 -mt-28 md:-mt-40 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="bg-white rounded-2xl p-6 md:p-10 shadow-xl space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Connect With Us</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our dedicated team is ready to assist you with your housing finance needs. Get in touch now.
            </p>
            <div className="grid gap-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center space-x-4 bg-blue-50 rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
              >
                <MapPinIcon className="h-7 w-7 text-blue-700" />
                <div>
                  <h3 className="font-semibold text-blue-900">Address</h3>
                  <p className="text-gray-600">
                    G129, Ground Floor, Phase 3,<br />
                    Spencer Plaza Mall, 786-789, Anna Salai,<br />
                    Chennai, Tamil Nadu 600002
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center space-x-4 bg-blue-50 rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
              >
                <PhoneIcon className="h-7 w-7 text-blue-700" />
                <div>
                  <h3 className="font-semibold text-blue-900">Phone</h3>
                  <p className="text-gray-600">+91 123 456 7890</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center space-x-4 bg-blue-50 rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
              >
                <EnvelopeIcon className="h-7 w-7 text-blue-700" />
                <div>
                  <h3 className="font-semibold text-blue-900">Email</h3>
                  <p className="text-gray-600">support@ahamhousing.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="bg-white rounded-2xl p-6 md:p-10 shadow-xl space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Start Your Loan Journey</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Fill out the form below to get started with your loan application.
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Type*
                </label>
                <select
                  id="loanType"
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 transition"
                  required
                >
                  <option value="">Select Loan Type</option>
                  <option value="homeConstruction">Home Construction Loan</option>
                  <option value="plotConstruction">Plot + Construction Loan</option>
                  <option value="nriHome">NRI Home Loan</option>
                  <option value="homeRenovation">Home Renovation Loan</option>
                  <option value="homeExtension">Home Extension Loan</option>
                  <option value="mortgage">Mortgage Loan</option>
                </select>
              </div>
              <div>
                <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Amount (INR)*
                </label>
                <input
                  type="number"
                  id="loanAmount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="Enter loan amount"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Provide any additional information (e.g., purpose of loan)"
                  rows="4"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 transition"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-blue-900 text-white rounded-xl font-semibold shadow-md hover:bg-blue-800 transition-all"
              >
                Submit Application
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Branch Locator Section */}
      <section className="mt-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8 text-center"
          >
            Find Our Branches
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl border border-blue-100 p-6 sm:p-8"
          >
            <div className="mb-8">
              <label
                htmlFor="branchSelect"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Select a Branch
              </label>
              <motion.select
                id="branchSelect"
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                whileHover={{ scale: 1.02 }}
                className="w-full sm:w-80 p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white shadow-sm transition-all duration-300"
                aria-label="Select a branch"
              >
                {branches.map((branch) => (
                  <option key={branch.name} value={branch.name}>
                    {branch.name}
                  </option>
                ))}
              </motion.select>
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Column: Branch Details */}
              <motion.div
                key={selectedBranch}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-md border border-blue-100"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{selectedBranchData.name}</h3>
                <div className="space-y-3 text-gray-700 text-base leading-relaxed">
                  <p className="flex items-start">
                    <span className="font-semibold text-blue-800 mr-2">Region:</span>
                    {selectedBranchData.region}
                  </p>
                  <p className="flex items-start">
                    <span className="font-semibold text-blue-800 mr-2">Inception:</span>
                    {selectedBranchData.inception}
                  </p>
                  <p className="flex items-start">
                    <span className="font-semibold text-blue-800 mr-2">Address:</span>
                    <span>{selectedBranchData.address}</span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-semibold text-blue-800 mr-2">Contact:</span>
                    <a
                      href={`tel:${selectedBranchData.contact}`}
                      className="text-blue-600 hover:underline"
                    >
                      {selectedBranchData.contact}
                    </a>
                  </p>
                </div>
              </motion.div>
              {/* Right Column: Map */}
              <motion.div
                key={selectedBranch + "-map"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <iframe
                  width="100%"
                  height="350"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src={selectedBranchData.mapUrl}
                  className="rounded-xl shadow-md border border-blue-100"
                  title={`Map of ${selectedBranchData.name} Branch`}
                ></iframe>
                <div className="text-center mt-4">
                  <a
                    href={selectedBranchData.largerMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
                  >
                    View Larger Map
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;