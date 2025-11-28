// frontend/src/components/Customer360EligibilityCalculator/Customer360EligibilityCalculator.js
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const PROFILES = [
  "Select Profile",
  "Salaried - IT/ITeS",
  "Salaried - Banking/Finance",
  "Salaried - Government",
  "Self Employed - Proprietor",
  "Self Employed - Partnership",
  "Professional (Doctor/Lawyer/Chartered)",
];

const formatINR = (val) =>
  "₹" + Number(val || 0).toLocaleString("en-IN", { maximumFractionDigits: 0 });

export default function Customer360EligibilityCalculator() {
  /* ---------- ELIGIBILITY STATE ---------- */
  const [employmentType, setEmploymentType] = useState("Salaried");
  const [age, setAge] = useState("");
  const [profile, setProfile] = useState(PROFILES[0]);
  const [organization, setOrganization] = useState("");
  const [netIncome, setNetIncome] = useState("");
  const [existingEmi, setExistingEmi] = useState("");
  const [tenureYears, setTenureYears] = useState(20);
  const [coApplicant, setCoApplicant] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState("");

  /* ---------- CONTACT FORM STATE ---------- */
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
    org: "",
    landline: "",
    mobile: "",
    query: "",
  });
  const [contactErrors, setContactErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  /* ---------- DERIVED VALUES (Eligibility) ---------- */
  const incomeNum = Number(netIncome || 0);
  const existingEmiNum = Number(existingEmi || 0);
  const coIncomeNum = coApplicant ? Number(coApplicant.netIncome || 0) : 0;
  const coExistingEmiNum = coApplicant ? Number(coApplicant.existingEmi || 0) : 0;

  const totalIncome = incomeNum + coIncomeNum;
  const totalExistingEmi = existingEmiNum + coExistingEmiNum;

  const interestRate = 8.5;
  const monthlyRate = interestRate / 12 / 100;

  const maxAllowedEmi = useMemo(() => {
    const disposable = Math.max(0, totalIncome - totalExistingEmi);
    return disposable * 0.5;
  }, [totalIncome, totalExistingEmi]);

  const estimatedLoanAmount = useMemo(() => {
    if (maxAllowedEmi <= 0 || monthlyRate === 0 || tenureYears <= 0) return 0;
    const n = tenureYears * 12;
    const factor = (1 - Math.pow(1 + monthlyRate, -n)) / monthlyRate;
    return Math.round(maxAllowedEmi * factor);
  }, [maxAllowedEmi, monthlyRate, tenureYears]);

  const recommendedTenure = useMemo(() => {
    if (maxAllowedEmi <= 0 || monthlyRate === 0) return tenureYears;
    let bestTenure = tenureYears;
    let bestLoan = 0;
    for (let t = 5; t <= 30; t++) {
      const n = t * 12;
      const factor = (1 - Math.pow(1 + monthlyRate, -n)) / monthlyRate;
      const loan = maxAllowedEmi * factor;
      if (loan >= estimatedLoanAmount * 0.9 && loan > bestLoan) {
        bestLoan = loan;
        bestTenure = t;
      }
    }
    return bestTenure;
  }, [maxAllowedEmi, monthlyRate, estimatedLoanAmount, tenureYears]);

  /* ---------- VALIDATION (Eligibility) ---------- */
  const validateEligibility = () => {
    const e = {};
    const a = Number(age);
    if (!age || a < 18 || a > 70) e.age = "Age must be 18–70.";
    if (!netIncome || incomeNum <= 0) e.netIncome = "Enter a valid monthly income.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  useEffect(() => {
    const hasBasicInfo = age && netIncome && Number(age) >= 18 && Number(age) <= 70 && incomeNum > 0;
    if (hasBasicInfo && validateEligibility()) {
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  }, [age, netIncome, existingEmi, tenureYears, coApplicant]);

  /* ---------- CO-APPLICANT HELPERS ---------- */
  const addCoApplicant = () =>
    setCoApplicant({ age: "", relationship: "", netIncome: "", existingEmi: "" });
  const removeCoApplicant = () => setCoApplicant(null);
  const updateCoApplicant = (key, value) =>
    setCoApplicant((prev) => ({ ...prev, [key]: value }));

  /* ---------- CONTACT FORM VALIDATION & SUBMIT ---------- */
  const validateContact = () => {
    const e = {};
    if (!contact.firstName.trim()) e.firstName = "First name is required.";
    if (!contact.lastName.trim()) e.lastName = "Last name is required.";
    if (!contact.email || !/^\S+@\S+\.\S+$/.test(contact.email))
      e.email = "Valid email is required.";
    if (!contact.mobile || contact.mobile.length < 10)
      e.mobile = "Valid 10-digit mobile number required.";
    setContactErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleContactChange = (field, value) => {
    setContact((prev) => ({ ...prev, [field]: value }));
    setContactErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (validateContact()) {
      setSubmitted(true);
      console.log("Contact Form Submitted:", contact);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  /* ---------- RENDER ---------- */
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ==== HERO ==== */}
      <section
        className="relative w-full py-28 md:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #6366f1 45%, #a78bfa 100%)",
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: "radial-gradient(circle at 20% 80%, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
          >
            Instant Loan Eligibility Check
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-lg text-white/85"
          >
            Just a few details to estimate your home loan eligibility in seconds.
          </motion.p>
        </div>
      </section>

      {/* ==== SECTION 1: ELIGIBILITY CALCULATOR ==== */}
      <section className="relative max-w-6xl mx-auto px-6 -mt-20 mb-20 z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-6 md:p-12 overflow-visible border border-gray-100"
        >
          <div className="absolute left-1/2 -top-5 -translate-x-1/2 bg-white shadow-lg border border-indigo-100 px-5 py-1.5 rounded-full text-sm font-semibold text-indigo-700 z-30">
            Enter Applicant Details
          </div>

          {/* ELIGIBILITY FORM */}
          <form className="space-y-8">
            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <FloatingLabel
                label="Your Age"
                id="age"
                type="number"
                min="18"
                max="70"
                value={age}
                onChange={setAge}
                error={errors.age}
                focused={focusedField === "age"}
                onFocus={() => setFocusedField("age")}
                onBlur={() => setFocusedField("")}
              />
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-3">Employment Type</label>
                <div className="flex bg-gray-50 rounded-full p-1 border border-gray-200">
                  {["Salaried", "Self Employed"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEmploymentType(type)}
                      className={clsx(
                        "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full font-medium transition-all",
                        employmentType === type
                          ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md"
                          : "text-gray-700"
                      )}
                    >
                      {type === "Salaried" ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM5 18h10a2 2 0 002-2v-1a5 5 0 00-5-5H8a5 5 0 00-5 5v1a2 2 0 002 2z" />
                        </svg>
                      )}
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <FloatingLabel
                id="profile"
                type="select"
                value={profile}
                onChange={setProfile}
                options={PROFILES}
                focused={focusedField === "profile"}
                onFocus={() => setFocusedField("profile")}
                onBlur={() => setFocusedField("")}
              />
              <FloatingLabel
                label="Your Organization"
                id="organization"
                type="text"
                value={organization}
                onChange={setOrganization}
                focused={focusedField === "organization"}
                onFocus={() => setFocusedField("organization")}
                onBlur={() => setFocusedField("")}
              />
              <FloatingLabel
                label="Net Monthly Income"
                id="netIncome"
                type="number"
                min="0"
                value={netIncome}
                onChange={setNetIncome}
                error={errors.netIncome}
                focused={focusedField === "netIncome"}
                onFocus={() => setFocusedField("netIncome")}
                onBlur={() => setFocusedField("")}
                suffix="INR"
              />
            </div>

            {/* Existing EMI */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <FloatingLabel
                  label="Existing Monthly EMI Obligations"
                  id="existingEmi"
                  type="number"
                  min="0"
                  value={existingEmi}
                  onChange={setExistingEmi}
                  focused={focusedField === "existingEmi"}
                  onFocus={() => setFocusedField("existingEmi")}
                  onBlur={() => setFocusedField("")}
                />
              </div>
              <p className="text-xs text-gray-500">Adding a co-applicant can boost eligibility.</p>
            </div>

            {/* CO-APPLICANT */}
            <motion.div layout className="border border-dashed border-indigo-200 rounded-xl p-5 bg-indigo-50/30">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-800">Co-Applicant (Optional)</h3>
                <button
                  type="button"
                  onClick={coApplicant ? removeCoApplicant : addCoApplicant}
                  className={clsx(
                    "text-sm font-medium transition",
                    coApplicant ? "text-red-600 hover:text-red-700" : "text-indigo-600 hover:text-indigo-700"
                  )}
                >
                  {coApplicant ? "− Remove" : "+ Add"}
                </button>
              </div>
              <AnimatePresence>
                {coApplicant && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 overflow-hidden"
                  >
                    <FloatingLabel label="Age" id="coAge" type="number" min="18" max="70" value={coApplicant.age} onChange={(v) => updateCoApplicant("age", v)} focused={focusedField === "coAge"} onFocus={() => setFocusedField("coAge")} onBlur={() => setFocusedField("")} />
                    <FloatingLabel label="Relationship" id="coRelation" type="text" value={coApplicant.relationship} onChange={(v) => updateCoApplicant("relationship", v)} focused={focusedField === "coRelation"} onFocus={() => setFocusedField("coRelation")} onBlur={() => setFocusedField("")} />
                    <FloatingLabel label="Net Monthly Income" id="coIncome" type="number" min="0" value={coApplicant.netIncome} onChange={(v) => updateCoApplicant("netIncome", v)} focused={focusedField === "coIncome"} onFocus={() => setFocusedField("coIncome")} onBlur={() => setFocusedField("")} suffix="INR" />
                    <FloatingLabel label="Existing EMI" id="coEmi" type="number" min="0" value={coApplicant.existingEmi} onChange={(v) => updateCoApplicant("existingEmi", v)} focused={focusedField === "coEmi"} onFocus={() => setFocusedField("coEmi")} onBlur={() => setFocusedField("")} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* TENURE SLIDER */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Preferred Tenure: <span className="font-bold text-indigo-700">{tenureYears} years</span>
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${((tenureYears - 5) / 25) * 100}%, #e5e7eb ${((tenureYears - 5) / 25) * 100}%, #e5e7eb 100%)`,
                  }}
                />
                <span
                  className="absolute -top-8 -translate-x-1/2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full pointer-events-none"
                  style={{ left: `${((tenureYears - 5) / 25) * 100}%` }}
                >
                  {tenureYears} yr
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>5 yrs</span>
                <span>30 yrs</span>
              </div>
            </div>
          </form>

          {/* ELIGIBILITY RESULT */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-10"
              >
                <div className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 rounded-2xl p-6 md:p-10 shadow-xl border border-indigo-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { title: "Estimated Eligible Loan", value: formatINR(estimatedLoanAmount), sub: "At 50% FOIR" },
                      { title: "Max EMI Allowed", value: formatINR(Math.round(maxAllowedEmi)), sub: "50% of disposable income" },
                      { title: "Recommended Tenure", value: `${recommendedTenure} years`, sub: `@ ${interestRate}% p.a.` },
                    ].map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="text-center">
                        <p className="text-sm text-gray-600">{item.title}</p>
                        <p className="mt-2 text-3xl font-extrabold text-indigo-700">{item.value}</p>
                        <p className="mt-1 text-xs text-gray-500">{item.sub}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>Eligibility Strength</span>
                      <span className="font-medium">
                        {totalIncome > 0 ? Math.min(100, Math.round((estimatedLoanAmount / (totalIncome * 120)) * 100)) : 0}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(100, (estimatedLoanAmount / (totalIncome * 120)) * 100)}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-violet-600"
                      />
                    </div>
                    <p className="mt-2 text-xs text-gray-500 text-center">Banks typically lend up to 120x monthly income</p>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <p className="text-sm text-gray-600">Need a precise quote? Upload documents to start the application.</p>
                    <div className="flex gap-3">
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-2.5 rounded-lg bg-indigo-600 text-white font-medium shadow-md">
                        Start Application
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium">
                        Download Summary
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ==== SECTION 2: CONTACT FORM (Separated) ==== */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-100"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
            <p className="mt-2 text-gray-600">We'd love to hear from you. Fill in your details below.</p>
          </div>

          <form onSubmit={handleContactSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FloatingLabel
              label="First Name"
              id="firstName"
              type="text"
              value ={contact.firstName}
              onChange={(v) => handleContactChange("firstName", v)}
              error={contactErrors.firstName}
              focused={focusedField === "firstName"}
              onFocus={() => setFocusedField("firstName")}
              onBlur={() => setFocusedField("")}
            />
            <FloatingLabel
              label="Last Name"
              id="lastName"
              type="text"
              value={contact.lastName}
              onChange={(v) => handleContactChange("lastName", v)}
              error={contactErrors.lastName}
              focused={focusedField === "lastName"}
              onFocus={() => setFocusedField("lastName")}
              onBlur={() => setFocusedField("")}
            />
            <FloatingLabel
              label="Email"
              id="email"
              type="email"
              value={contact.email}
              onChange={(v) => handleContactChange("email", v)}
              error={contactErrors.email}
              focused={focusedField === "email"}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField("")}
            />
            <FloatingLabel
              label="Designation"
              id="designation"
              type="text"
              value={contact.designation}
              onChange={(v) => handleContactChange("designation", v)}
              focused={focusedField === "designation"}
              onFocus={() => setFocusedField("designation")}
              onBlur={() => setFocusedField("")}
            />
            <FloatingLabel
              label="Organization"
              id="org"
              type="text"
              value={contact.org}
              onChange={(v) => handleContactChange("org", v)}
              focused={focusedField === "org"}
              onFocus={() => setFocusedField("org")}
              onBlur={() => setFocusedField("")}
            />
            <FloatingLabel
              label="Landline No"
              id="landline"
              type="text"
              value={contact.landline}
              onChange={(v) => handleContactChange("landline", v)}
              focused={focusedField === "landline"}
              onFocus={() => setFocusedField("landline")}
              onBlur={() => setFocusedField("")}
            />
            <FloatingLabel
              label="Mobile No"
              id="mobile"
              type="tel"
              value={contact.mobile}
              onChange={(v) => handleContactChange("mobile", v)}
              error={contactErrors.mobile}
              focused={focusedField === "mobile"}
              onFocus={() => setFocusedField("mobile")}
              onBlur={() => setFocusedField("")}
            />
            <div className="md:col-span-2">
              <FloatingLabel
                label="Query / Feedback"
                id="query"
                type="textarea"
                value={contact.query}
                onChange={(v) => handleContactChange("query", v)}
                focused={focusedField === "query"}
                onFocus={() => setFocusedField("query")}
                onBlur={() => setFocusedField("")}
              />
            </div>

            <div className="md:col-span-2 flex justify-center mt-6">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-12 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                {submitted ? "Submitted!" : "Submit"}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>
    </main>
  );
}

/* ================== FLOATING LABEL (Supports textarea) ================== */
function FloatingLabel({
  label,
  id,
  type = "text",
  value,
  onChange,
  error,
  focused,
  onFocus,
  onBlur,
  min,
  max,
  suffix,
  options,
}) {
  const isSelect = type === "select";
  const isTextarea = type === "textarea";
  const hasValue = value !== "" && value !== null && (!options || value !== options[0]);

  return (
    <div className={isTextarea ? "relative" : "relative h-14"}>
      {isSelect ? (
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          className={clsx(
            "block w-full h-12 px-4 text-base rounded-lg border bg-white appearance-none transition pt-3",
            error ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-500",
            "focus:outline-none focus:ring-2 focus:ring-indigo-200"
          )}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : isTextarea ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          rows={4}
          className={clsx(
            "block w-full px-4 pt-8 pb-3 text-base rounded-lg border transition resize-none",
            error ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-500",
            "focus:outline-none focus:ring-2 focus:ring-indigo-200"
          )}
        />
      ) : (
        <input
          id={id}
          type={type}
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder=" "
          className={clsx(
            "block w-full h-12 px-4 pt-3 text-base rounded-lg border transition peer",
            error ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-500",
            "focus:outline-none focus:ring-2 focus:ring-indigo-200"
          )}
        />
      )}

      <label
        htmlFor={id}
        className={clsx(
          "absolute left-4 origin-left transition-all duration-200 pointer-events-none",
          isTextarea ? "top-3" : "top-3.5",
          (focused || hasValue)
            ? isTextarea ? "-top-3 scale-75 text-indigo-600" : "-translate-y-6 scale-75 text-indigo-600"
            : "text-gray-500"
        )}
      >
        {label}
      </label>

      {suffix && (
        <span className="absolute right-4 top-3.5 text-sm text-gray-400">{suffix}</span>
      )}

      {error && (
        <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mt-1 text-xs text-red-600">
          {error}
        </motion.p>
      )}
    </div>
  );
}

/* Slider Thumb Styling */
const style = document.createElement("style");
style.innerHTML = `
  input[type=range].slider::-webkit-slider-thumb {
    -webkit-appearance: none; appearance: none;
    width: 20px; height: 20px; background: #6366f1; border-radius: 50%;
    cursor: pointer; box-shadow: 0 2px 6px rgba(0,0,0,.2);
  }
  input[type=range].slider::-moz-range-thumb {
    width: 20px; height: 20px; background: #6366f1; border-radius: 50%;
    cursor: pointer; border: none; box-shadow: 0 2px 6px rgba(0,0,0,.2);
  }
`;
document.head.appendChild(style);