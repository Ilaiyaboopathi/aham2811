import React from "react";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const ImportantNewsSection = () => {
  const messages = [
    "Security Alert: Fraudsters are misusing the name of AHAM Housing Finance.",
    "Do not share personal information or transfer money to unknown persons.",
    "Verify all offers only through our official website or branch.",
    "Stay alert and report suspicious calls immediately."
  ];

  return (
    <div id="important-news"  className="bg-red-100 border-y border-red-300 py-3 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center gap-3">
        <AlertTriangle className="text-yellow-700 w-5 h-5 flex-shrink-0" />

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 50,
              ease: "linear",
            }}
          >
            {[...messages, ...messages].map((msg, idx) => (
              <p key={idx} className="text-yellow-800 font-medium text-sm md:text-base">
                {msg}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ImportantNewsSection;
