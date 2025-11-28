import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, AlertTriangle, Database } from "lucide-react";

const riskData = [
  { category: "High Risk", closed: 2, closedPercent: "1%", live: 32, livePercent: "3%", total: 34, totalPercent: "2%" },
  { category: "Low Risk", closed: 13, closedPercent: "4%", live: 24, livePercent: "2%", total: 37, totalPercent: "3%" },
  { category: "Medium Risk", closed: 355, closedPercent: "96%", live: 979, livePercent: "95%", total: 1334, totalPercent: "95%" },
  { category: "Grand Total", closed: 370, closedPercent: "26%", live: 1035, livePercent: "74%", total: 1405, totalPercent: "100%" },
];

const RiskClassification = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* ===== Hero Section ===== */}
      <section
        className="relative text-white min-h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(45,52,124,0.6), rgba(45,52,124,0.6)), url('img/Risk/Risk.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Soft Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)] animate-pulse pointer-events-none"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Risk Classification
          </h1>
          <p className="text-gray-200 text-lg md:text-xl">
            September 2025 Overview
          </p>
        </motion.div>
      </section>

      {/* ===== Risk Summary Cards ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <ShieldCheck className="w-8 h-8 text-white" />, title: "High Risk", value: "2%", color: "from-red-500 to-red-700" },
          { icon: <TrendingUp className="w-8 h-8 text-white" />, title: "Low Risk", value: "3%", color: "from-green-500 to-green-700" },
          { icon: <AlertTriangle className="w-8 h-8 text-white" />, title: "Medium Risk", value: "95%", color: "from-yellow-500 to-yellow-700" },
          { icon: <Database className="w-8 h-8 text-white" />, title: "Total Records", value: "1405", color: "from-blue-500 to-blue-700" },
        ].map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 text-center text-white shadow-lg`}
          >
            <div className="flex justify-center mb-4">{card.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
            <p className="text-3xl font-bold">{card.value}</p>
          </motion.div>
        ))}
      </section>

      {/* ===== Table Section ===== */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="overflow-x-auto shadow-2xl rounded-2xl border border-gray-100">
          <table className="w-full border-collapse text-center text-sm md:text-base">
            <thead className="bg-[#2d347c] text-white">
              <tr>
                <th className="p-4">Category</th>
                <th className="p-4">Closed (Units)</th>
                <th className="p-4">Closed (%)</th>
                <th className="p-4">Live (Units)</th>
                <th className="p-4">Live (%)</th>
                <th className="p-4">Risk Pool (Units)</th>
                <th className="p-4">Risk Pool (%)</th>
              </tr>
            </thead>
            <tbody>
              {riskData.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`${
                    index === riskData.length - 1
                      ? "bg-blue-50 font-semibold text-[#2d347c]"
                      : "bg-white"
                  } hover:bg-blue-100 transition-colors`}
                >
                  <td className="p-4 border-t">{row.category}</td>
                  <td className="p-4 border-t">{row.closed}</td>
                  <td className="p-4 border-t">{row.closedPercent}</td>
                  <td className="p-4 border-t">{row.live}</td>
                  <td className="p-4 border-t">{row.livePercent}</td>
                  <td className="p-4 border-t">{row.total}</td>
                  <td className="p-4 border-t">{row.totalPercent}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default RiskClassification;
