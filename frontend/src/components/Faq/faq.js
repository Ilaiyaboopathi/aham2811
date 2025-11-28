import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdOutlineFormatListBulleted } from "react-icons/md";

const FAQ_DATA = [
  { q: "Can I get a tax benefit on my Home Loan?", a: "Yes — tax benefits on principal & interest are available under Section 80C & 24(b) of the Income Tax Act, subject to the policy at the time.", cat: "Taxes" },
  { q: "Can I pre-close my loan?", a: "Pre-closure is allowed as per loan agreement. Prepayment charges (if any) depend on your loan terms.", cat: "Repayment" },
  { q: "How is interest calculated on my loan?", a: "Interest is calculated monthly based on the outstanding principal and the effective rate applicable to your loan slab.", cat: "Interest" },
  { q: "How long will it take to sanction my loan?", a: "Typical processing time is 3–7 business days once docs & verification are complete; complex cases may take longer.", cat: "Process" },
  { q: "What documents are needed for resale loan?", a: "KYC, income proof, property documents, sale agreement, EC, parent deeds (if required) and latest utility/tax receipts.", cat: "Documents" },
  { q: "Who can apply for a resale loan?", a: "Salaried and self-employed individuals meeting age, income and credit criteria may apply.", cat: "Eligibility" },
];

const RATES = [
  { cat: "Purchase New/Existing, LAP > 10L, Self Construction", superior: "15.00%", veryGood: "17.00%", good: "18.50%", medium: "19.50%" },
  { cat: "Composite Loan, LAP 7–10L, Refinance, BT & Top Up", superior: "16.50%", veryGood: "17.50%", good: "19.00%", medium: "20.50%" },
  { cat: "LAP > 7L, Land & Building w/o Plan Approval", superior: "19.50%", veryGood: "20.00%", good: "20.50%", medium: "21.50%" },
  { cat: "Home Improvement & Extension", superior: "16.50%", veryGood: "17.50%", good: "18.50%", medium: "19.50%" },
];

const categories = ["All", ...Array.from(new Set(FAQ_DATA.map(f => f.cat)))];

export default function Faq() {
  const [open, setOpen] = useState(null);
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQ_DATA.filter(f => {
      if (activeCat !== "All" && f.cat !== activeCat) return false;
      if (!q) return true;
      return f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
    });
  }, [query, activeCat]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900 font-sans">
      {/* HERO */}
      <header className="relative h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/faq/faq.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#02122f]/80 via-[#09306a]/55 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-slate-200/90">
              Everything you need to know about eligibility, process, documents, and rates.
            </p>
          </motion.div>
        </div>
      </header>

      {/* SEARCH FILTER */}
      <section className="max-w-7xl mx-auto px-6 -mt-14 relative z-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row gap-4 items-center font-sans">
          <div className="flex-1">
            <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-2 border border-slate-100">
              <FiSearch className="text-slate-400 text-xl ml-2" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search FAQs, e.g. 'tax benefit', 'documents', 'pre-close'..."
                className="w-full bg-transparent outline-none px-2 py-3 text-slate-900 placeholder:text-slate-400 font-medium"
              />
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                    activeCat === cat
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-300 text-slate-900 shadow"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full md:w-56 text-right">
            <div className="text-sm text-slate-500">Need more help?</div>
            <a href="/contact" className="inline-block mt-2 px-4 py-2 bg-[#ed2636] hover:bg-[#1f2654] text-white rounded-lg shadow hover:opacity-95 font-medium">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 mt-12 space-y-16 font-sans">

        {/* 1️⃣ FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">General FAQs</h2>
          <div className="space-y-4">
            {filtered.length === 0 && (
              <div className="p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg text-yellow-800">
                No results found. Try a different keyword or view all categories.
              </div>
            )}

            {filtered.map((f, i) => (
              <motion.div
                key={i}
                layout
                className="bg-white shadow-sm rounded-xl overflow-hidden border border-slate-100"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left p-5 flex items-start justify-between gap-4 hover:bg-slate-50"
                >
                  <div>
                    <div className="text-base font-semibold text-slate-900">{f.q}</div>
                    <div className="text-sm text-slate-500 mt-1">{f.cat}</div>
                  </div>
                  <div className="text-slate-500 mt-1">
                    {open === i ? <FiChevronUp size={22} /> : <FiChevronDown size={22} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="px-5 pb-5 pt-0 text-slate-700 bg-slate-50 leading-relaxed"
                    >
                      {f.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 2️⃣ Rate Matrix Section */}
        <section>
          <div className="bg-white rounded-xl shadow border border-slate-100 p-6 font-sans">
            <div className="flex items-center gap-3 mb-4">
              <MdOutlineFormatListBulleted className="text-2xl text-[#0b4aa8]" />
              <h3 className="text-2xl font-bold text-slate-900">Rate Matrix</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-[520px] w-full border border-slate-200 rounded-lg text-base text-slate-800">
                <thead>
                  <tr className="bg-[#0B3A63] text-white font-semibold">
                    <th className="py-3 px-3 text-left rounded-tl-lg">Category</th>
                    <th className="py-3 px-3 text-center">Superior</th>
                    <th className="py-3 px-3 text-center">Very Good</th>
                    <th className="py-3 px-3 text-center">Good</th>
                    <th className="py-3 px-3 text-center rounded-tr-lg">Medium</th>
                  </tr>
                </thead>
                <tbody>
                  {RATES.map((r, idx) => (
                    <tr
                      key={idx}
                      className={`${idx % 2 === 0 ? "bg-white" : "bg-slate-50"} hover:bg-slate-100 transition`}
                    >
                      <td className="py-3 px-3 font-medium">{r.cat}</td>
                      <td className="py-3 px-3 text-center">{r.superior}</td>
                      <td className="py-3 px-3 text-center">{r.veryGood}</td>
                      <td className="py-3 px-3 text-center">{r.good}</td>
                      <td className="py-3 px-3 text-center">{r.medium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-slate-600">
              <strong>Note:</strong> Rates are indicative and may vary based on credit assessment.
            </p>
          </div>
        </section>

        {/* 3️⃣ Deviations Section */}
        <section>
          <div className="bg-white rounded-xl shadow border border-slate-100 p-6 font-sans">
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Deviations</h4>
            <ul className="text-slate-700 list-disc pl-6 space-y-2 text-base leading-relaxed">
              <li>If ABS ≥ 1 EMI, rate can be waived up to 1%.</li>
              <li>If ABS ≥ 2 EMI, rate can be waived up to 2%.</li>
              <li>If ITR available for ≥ 2 years, rate can be waived up to 1%.</li>
              <li>Matrix applies for Direct deals; DSA deals may attract +0.50%.</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="mt-20 pb-12 text-center text-sm text-slate-500">
       
      </footer>
    </div>
  );
}
