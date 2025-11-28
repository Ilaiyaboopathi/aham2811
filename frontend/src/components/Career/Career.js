import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, DollarSign, Users, Search, RotateCcw, X } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Sales Executive",
    location: "Chennai, India",
    type: "Full-Time",
    salary: "₹6,00,000 - ₹8,00,000",
    salaryValue: 600000,
    openings: 3,
    description:
      "Engage with clients, address queries, and promote loan products with excellent communication skills. Build strong client relationships and meet sales targets in a fast-paced environment.",
  },
  {
    id: 2,
    title: "Loan Officer",
    location: "Bangalore, India",
    type: "Full-Time",
    salary: "₹8,00,000 - ₹10,00,000",
    salaryValue: 800000,
    openings: 2,
    description:
      "Assess loan applications, ensure compliance, and manage risk with a focus on financial accuracy. Collaborate with clients to provide tailored loan solutions and maintain regulatory standards.",
  },
  {
    id: 3,
    title: "Marketing Manager",
    location: "Mumbai, India",
    type: "Full-Time",
    salary: "₹12,00,000 - ₹15,00,000",
    salaryValue: 1200000,
    openings: 1,
    description:
      "Craft and execute digital marketing campaigns to boost brand visibility and drive leads. Lead a team to develop creative strategies and analyze campaign performance for optimization.",
  },
  {
    id: 4,
    title: "Data Analyst",
    location: "Delhi, India",
    type: "Full-Time",
    salary: "₹7,00,000 - ₹9,00,000",
    salaryValue: 700000,
    openings: 2,
    description:
      "Analyze financial data to provide insights and support strategic decision-making processes. Use advanced analytics tools to identify trends and present actionable recommendations.",
  },
  {
    id: 5,
    title: "Customer Support Specialist",
    location: "Hyderabad, India",
    type: "Full-Time",
    salary: "₹4,00,000 - ₹6,00,000",
    salaryValue: 400000,
    openings: 5,
    description:
      "Provide exceptional customer service, resolving issues and ensuring client satisfaction. Handle inquiries via multiple channels and maintain a high standard of client care.",
  },
  {
    id: 6,
    title: "Software Engineer",
    location: "Pune, India",
    type: "Full-Time",
    salary: "₹10,00,000 - ₹14,00,000",
    salaryValue: 1000000,
    openings: 3,
    description:
      "Develop and maintain innovative financial applications to enhance user experience. Work with cross-functional teams to deliver scalable and secure software solutions.",
  },
  {
    id: 7,
    title: "HR Manager",
    location: "Kolkata, India",
    type: "Full-Time",
    salary: "₹9,00,000 - ₹12,00,000",
    salaryValue: 900000,
    openings: 1,
    description:
      "Oversee recruitment, employee relations, and foster a positive workplace culture. Implement HR policies and drive initiatives to enhance employee engagement and retention.",
  },
  {
    id: 8,
    title: "Financial Advisor",
    location: "Ahmedabad, India",
    type: "Full-Time",
    salary: "₹8,00,000 - ₹11,00,000",
    salaryValue: 800000,
    openings: 2,
    description:
      "Guide clients on financial planning and investment options to achieve their goals. Provide personalized advice and maintain strong client relationships to ensure trust and satisfaction.",
  },
  {
    id: 9,
    title: "Compliance Officer",
    location: "Jaipur, India",
    type: "Full-Time",
    salary: "₹7,00,000 - ₹9,00,000",
    salaryValue: 700000,
    openings: 1,
    description:
      "Ensure adherence to regulatory standards and internal policies in all operations. Conduct audits and provide compliance training to maintain organizational integrity.",
  },
  {
    id: 10,
    title: "Product Manager",
    location: "Gurgaon, India",
    type: "Full-Time",
    salary: "₹14,00,000 - ₹18,00,000",
    salaryValue: 1400000,
    openings: 1,
    description:
      "Lead product development cycles, aligning features with market needs and business goals. Collaborate with stakeholders to define product roadmaps and drive innovation.",
  },
];

const Career = () => {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", resume: null });
  const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Valid email is required";
    if (!formData.phone.match(/^[0-9]{10}$/)) newErrors.phone = "Valid 10-digit phone number is required";
    if (!formData.resume) newErrors.resume = "Resume is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      alert(`Application for ${selectedJob.title} submitted successfully!`);
      setFormData({ name: "", email: "", phone: "", resume: null });
      setErrors({});
      setSelectedJob(null);
      setIsSubmitting(false);
    }, 1000);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setFilterType("");
    setFilterLocation("");
    setSortBy("");
  };

  const filteredJobs = jobs
    .filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filterType ? job.type === filterType : true) &&
        (filterLocation ? job.location.includes(filterLocation) : true)
    )
    .sort((a, b) => {
      if (sortBy === "salary") return b.salaryValue - a.salaryValue;
      if (sortBy === "openings") return b.openings - a.openings;
      return 0;
    });

  const uniqueLocations = [...new Set(jobs.map((job) => job.location))];
  const uniqueTypes = [...new Set(jobs.map((job) => job.type))];

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-[Roboto,system-ui,-apple-system,sans-serif]">
      {/* Banner Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center text-white bg-cover bg-center"
        style={{
           backgroundImage: 'url(img/construction-loan/home-construction-loan.webp)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2557a7]/80 to-[#2557a7]/50"></div>
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
           {/* <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Find Your Dream Job</h1>
          <p className="text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Explore exciting opportunities to grow with our innovative team.
          </p> */}
           <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Dream Job
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Explore exciting opportunities to grow with our innovative team.

            </p>

                   {/* <div className="flex flex-col sm:flex-row gap-4">
            
                <a href="https://aham.mbwhost.in/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-large"
                >
                  Apply Now
                </motion.button>
              </a>
              </div> */}

              
          {/* <motion.a
            href="#openings"
            className="mt-6 inline-block bg-[#2f855a] text-white font-medium py-2.5 px-6 rounded-md hover:bg-[#276749] transition duration-300 shadow-md"
            whileHover={{ scale: 1.05, boxShadow: "0 6px 12px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Browse Jobs
          </motion.a> */}
        </motion.div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6 bg-white shadow-sm sticky top-0 z-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by job title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-md border border-[#e4e4e7] focus:ring-2 focus:ring-[#2557a7] focus:border-transparent outline-none text-sm bg-white"
              />
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-2.5 rounded-md border border-[#e4e4e7] focus:ring-2 focus:ring-[#2557a7] focus:border-transparent outline-none text-sm bg-white"
              >
                <option value="">Job Type</option>
                {uniqueTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="px-3 py-2.5 rounded-md border border-[#e4e4e7] focus:ring-2 focus:ring-[#2557a7] focus:border-transparent outline-none text-sm bg-white"
              >
                <option value="">Location</option>
                {uniqueLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2.5 rounded-md border border-[#e4e4e7] focus:ring-2 focus:ring-[#2557a7] focus:border-transparent outline-none text-sm bg-white"
              >
                <option value="">Sort By</option>
                <option value="salary">Salary (High to Low)</option>
                <option value="openings">Openings (High to Low)</option>
              </select>
              <motion.button
                onClick={resetFilters}
                className="p-2.5 rounded-md border border-[#e4e4e7] hover:bg-gray-100 transition duration-200 bg-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RotateCcw size={18} className="text-gray-500" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="openings" className="py-12 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 max-w-5xl">
          {filteredJobs.length === 0 ? (
            <motion.p className="text-center text-gray-500 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              No jobs match your criteria. Try adjusting your filters.
            </motion.p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, boxShadow: "0 6px 16px rgba(0,0,0,0.1)", borderColor: "#2557a7" }}
                  className="bg-white rounded-md p-6 border border-[#e4e4e7] transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedJob(job)}
                >
                  <h3 className="text-lg font-semibold text-[#2557a7] mb-3">{job.title}</h3>
                  <div className="space-y-1.5 text-gray-600 text-sm mb-4">
                    <div className="flex items-center"><MapPin size={16} className="mr-2 text-[#2557a7]" />{job.location}</div>
                    <div className="flex items-center"><Briefcase size={16} className="mr-2 text-[#2557a7]" />{job.type}</div>
                    <div className="flex items-center"><DollarSign size={16} className="mr-2 text-[#2557a7]" />{job.salary}</div>
                    <div className="flex items-center"><Users size={16} className="mr-2 text-[#2557a7]" />{job.openings} Openings</div>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">{job.description}</p>
                  <div className="flex gap-3">
                    <Link to={`/career/${job.id}`} className="flex-1 bg-[#f5f5f5] text-[#2557a7] py-2 px-4 rounded-md hover:bg-[#2557a7]/10 transition duration-300 text-sm font-medium text-center">
                      View Details
                    </Link>
                    <motion.button
                      onClick={() => setSelectedJob(job)}
                      className="flex-1 bg-[#2557a7] text-white py-2 px-4 rounded-md hover:bg-[#1d4688] transition duration-300 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
  {selectedJob && (
    <motion.div
      className="fixed inset-0 bg-black/50 z-50 flex justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => setSelectedJob(null)}
    >
      <motion.div
        className="bg-white w-full max-w-md h-full shadow-xl p-6 overflow-auto relative"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button
          onClick={() => setSelectedJob(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#2557a7] transition"
          whileHover={{ scale: 1.1 }}
        >
          <X size={24} />
        </motion.button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#2557a7] mb-1">{selectedJob.title}</h2>
          <p className="text-gray-500 text-sm">{selectedJob.location} • {selectedJob.type}</p>
          <p className="text-gray-600 text-sm mt-2 line-clamp-3">{selectedJob.description}</p>
        </div>

        {/* Sleek Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {["name", "email", "phone"].map((field) => (
    <div key={field} className="relative">
      <input
        type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
        value={formData[field]}
        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
        placeholder={field === "phone" ? "Phone Number" : field.charAt(0).toUpperCase() + field.slice(1)}
        className={`w-full border-b-2 py-3 px-3 placeholder-gray-400 focus:outline-none focus:border-[#2557a7] ${
          errors[field] ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
    </div>
  ))}
</div>


  {/* File Upload spans full width */}
  <div className="relative">
    <input
      type="file"
      onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
      accept=".pdf,.doc,.docx"
      className="peer w-full text-gray-600 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:bg-[#2557a7]/10 file:text-[#2557a7] hover:file:bg-[#2557a7]/20"
    />
    {formData.resume && <p className="text-gray-600 text-xs mt-1">Selected: {formData.resume.name}</p>}
    {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
  </div>

  <motion.button
    type="submit"
    disabled={isSubmitting}
    className={`w-full py-3 rounded-md text-white text-sm font-medium transition duration-300 ${
      isSubmitting ? "bg-[#2557a7]/50 cursor-not-allowed" : "bg-[#2557a7] hover:bg-[#1d4688]"
    }`}
    whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
    whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
  >
    {isSubmitting ? "Submitting..." : "Submit Application"}
  </motion.button>
</form>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default Career;