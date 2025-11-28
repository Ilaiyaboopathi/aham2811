import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, DollarSign, Users, ArrowLeft, Share2, X } from "lucide-react";

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
    responsibilities: [
      "Develop and maintain client relationships to drive sales growth.",
      "Meet or exceed monthly and quarterly sales targets.",
      "Collaborate with the marketing team to promote loan products.",
    ],
    qualifications: [
      "Bachelor’s degree in Business, Marketing, or related field.",
      "2+ years of experience in sales or client-facing roles.",
      "Excellent communication and negotiation skills.",
    ],
  },
  // ... (other job objects, ideally moved to src/data/jobs.js)
];

const JobDetails = ({ selectedJob, setSelectedJob }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobs.find((job) => job.id === parseInt(id));
  const [formData, setFormData] = useState({ name: "", email: "", resume: null });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!formData.resume || !formData.resume.name.match(/\.(pdf|doc|docx)$/)) {
      alert("Please upload a PDF, DOC, or DOCX file.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Application submitted successfully!");
      setFormData({ name: "", email: "", resume: null });
      setSelectedJob(null);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/career/${id}`;
    navigator.clipboard.writeText(shareUrl);
    alert("Job link copied to clipboard!");
  };

  if (!job) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
        <p className="text-gray-600 text-lg">Job not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#e6f0fa] to-[#f5f5f5] font-[Roboto,system-ui,-apple-system,sans-serif] py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-600">
          <ol className="flex items-center space-x-2">
            <li>
              <button
                onClick={() => navigate("/")}
                className="text-[#2557a7] hover:underline"
                aria-label="Go to home"
              >
                Home
              </button>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <button
                onClick={() => navigate("/career")}
                className="text-[#2557a7] hover:underline"
                aria-label="Go to careers"
              >
                Careers
              </button>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">{job.title}</li>
          </ol>
        </nav>

        {/* Job Card */}
        <motion.div
          className="bg-white rounded-lg shadow-xl border border-[#e4e4e7] p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-[#2557a7]">{job.title}</h1>
              <p className="text-gray-500 text-sm mt-1">Job ID: {job.id}</p>
            </div>
            <motion.button
              onClick={() => navigate("/career")}
              className="flex items-center text-[#2557a7] hover:text-[#1d4688] text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to careers"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Careers
            </motion.button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-sm mb-6">
            <p className="flex items-center">
              <MapPin size={16} className="mr-2 text-[#2557a7]" />
              {job.location}
            </p>
            <p className="flex items-center">
              <Briefcase size={16} className="mr-2 text-[#2557a7]" />
              {job.type}
            </p>
            <p className="flex items-center">
              <DollarSign size={16} className="mr-2 text-[#2557a7]" />
              {job.salary}
            </p>
            <p className="flex items-center">
              <Users size={16} className="mr-2 text-[#2557a7]" />
              {job.openings} Openings
            </p>
          </div>
          <div className="flex gap-4">
            <motion.button
              onClick={() => setSelectedJob(job)}
              className="flex-1 bg-[#2557a7] text-white py-3 px-4 rounded-md hover:bg-[#1d4688] transition duration-300 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Apply for ${job.title}`}
            >
              Apply Now
            </motion.button>
            <motion.button
              onClick={handleShare}
              className="flex-1 bg-gray-100 text-[#2557a7] py-3 px-4 rounded-md hover:bg-gray-200 transition duration-300 text-sm font-medium flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Share this job"
            >
              <Share2 size={16} className="mr-2" />
              Share Job
            </motion.button>
          </div>
        </motion.div>

        {/* Job Details */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Description</h2>
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
            </div>
            {job.responsibilities && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {job.qualifications && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Qualifications</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {job.qualifications.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Application Modal */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-white rounded-lg p-8 w-full max-w-md relative"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-[#2557a7] transition"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Close application modal"
                >
                  <X size={20} />
                </motion.button>

                <h2 className="text-xl font-semibold text-[#2557a7] mb-4">
                  Apply for {selectedJob.title}
                </h2>
                <div className="text-gray-600 mb-6 text-sm space-y-2">
                  <p className="flex items-center">
                    <MapPin size={16} className="mr-2 text-[#2557a7]" />
                    {selectedJob.location}
                  </p>
                  <p className="flex items-center">
                    <Briefcase size={16} className="mr-2 text-[#2557a7]" />
                    {selectedJob.type}
                  </p>
                  <p className="flex items-center">
                    <DollarSign size={16} className="mr-2 text-[#2557a7]" />
                    {selectedJob.salary}
                  </p>
                  <p className="flex items-center">
                    <Users size={16} className="mr-2 text-[#2557a7]" />
                    {selectedJob.openings} Openings
                  </p>
                  <p className="mt-3">{selectedJob.description}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full border border-[#e4e4e7] rounded-lg p-3 focus:ring-2 focus:ring-[#2557a7] focus:border-transparent outline-none text-sm transition duration-200 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full border border-[#e4e4e7] rounded-lg p-3 focus:ring-2 focus:ring-[#2557a7] focus:border-transparent outline-none text-sm transition duration-200 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Upload Resume
                    </label>
                    <input
                      type="file"
                      onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                      required
                      className="w-full border border-[#e4e4e7] rounded-lg p-3 text-gray-600 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-[#2557a7]/10 file:text-[#2557a7] hover:file:bg-[#2557a7]/15 transition"
                    />
                  </div>
                  <motion.button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg text-sm font-medium transition duration-300 ${
                      isSubmitting
                        ? "bg-[#2557a7]/50 text-white cursor-not-allowed"
                        : "bg-[#2557a7] text-white hover:bg-[#1d4688]"
                    }`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default JobDetails;