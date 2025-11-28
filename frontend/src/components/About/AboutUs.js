import React from "react";
import { motion } from "framer-motion";
import { Home, Users, Star, Building } from "lucide-react";
import { ChevronRight } from "lucide-react";

const AboutUs = () => {
  
   const youtubeLink = "https://www.youtube.com/@ahamhfc";

  const videos = [
    { id: 1, thumb: "https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg" },
    { id: 2, thumb: "https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg" },
    { id: 3, thumb: "https://img.youtube.com/vi/jfKfPfyJRdk/maxresdefault.jpg" },
  ];
  
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* ===== Hero Banner Section ===== */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-white">
        <img
          src="img/Banners/About-us.webp"
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-blue-100 font-light"
          >
            Building Dreams. Empowering Lives.
          </motion.p>
        </div>
      </section>

      {/* ===== About Company Section ===== */}
      <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 leading-tight">
              About{" "}
              <span className="text-blue-600">
                Aham Housing Finance Limited
              </span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Aham Housing Finance Limited</strong> is dedicated to
              fulfilling every individual’s housing dream. We aim to be a
              trusted brand that’s recognized for reliability, transparency, and
              customer-first service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our reach extends across Tier II and Tier III cities — where we
              empower families and individuals to achieve financial independence
              through accessible housing solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through our{" "}
              <span className="font-semibold text-blue-700">
                interview-based assessment
              </span>{" "}
              and proprietary scoring model, we make fair and informed lending
              decisions for every customer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="img/ahamMoments/Dummy/Business-analytics.webp"
                alt="Aham Housing"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-blue-800">
                  Empowering Home Dreams
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Simplifying home finance for those with limited access to
                  formal income proofs — ensuring everyone has a fair chance to
                  own their dream home.
                </p>
               <a
   href="https://aham.mbwhost.in/contact"
  className="mt-4 px-5 py-2 bg-[#ed2636] text-white rounded-lg shadow hover:bg-blue-700 transition inline-block"
>
  Contact Us
</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

{/* ===== Vision & Mission (Modern Dual Layout) ===== */}
<section className="relative py-24 bg-white overflow-hidden">
  {/* Decorative Gradient Backgrounds */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
  </div>

  <div className="relative max-w-6xl mx-auto text-center mb-16 px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-bold text-blue-800"
    >
      Our Vision & Mission
    </motion.h2>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      Driven by compassion, guided by integrity — we build homes and hopes.
    </p>
  </div>

  {/* Vision and Mission Blocks */}
  <div className="relative grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 md:px-12">
    {/* Vision Section */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-700 to-blue-500 text-white shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition duration-500"></div>
      <div className="relative p-10 space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
            <Star className="w-8 h-8 text-yellow-300" />
          </div>
          <h3 className="text-3xl font-bold tracking-wide">Our Vision</h3>
        </div>
        <p className="text-blue-50 text-lg leading-relaxed">
          To be India’s most trusted housing finance partner — enabling every
          aspiring homeowner to achieve their dream with dignity and
          transparency. We aim to redefine housing access through compassion,
          innovation, and trust.
        </p>
        <div className="h-1 w-1/3 bg-white/40 rounded-full mt-4"></div>
      </div>
    </motion.div>

    {/* Mission Section */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      viewport={{ once: true }}
      className="group relative rounded-3xl overflow-hidden bg-gradient-to-tr from-blue-100 to-blue-50 text-blue-900 shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093588401-22c77e9ba3a1?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition duration-500"></div>
      <div className="relative p-10 space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-blue-200 rounded-2xl">
            <Building className="w-8 h-8 text-blue-700" />
          </div>
          <h3 className="text-3xl font-bold tracking-wide">Our Mission</h3>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          To empower every Indian family with fair, accessible, and
          transparent financial solutions that make home ownership possible.
          We’re committed to building stronger communities — one home at a time.
        </p>
        <div className="h-1 w-1/3 bg-blue-300 rounded-full mt-4"></div>
      </div>
    </motion.div>
  </div>
</section>


{/* ===== Core Values Section ===== */}
<section className="relative bg-white py-24 text-gray-800 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <motion.h2
      className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#2d347c]"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Our Core Values
    </motion.h2>
    <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
      The foundation of our culture — guiding every step we take toward excellence.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Integrity",
          desc: "We act with honesty, transparency, and fairness in everything we do.",
          icon: "💎",
        },
        {
          title: "Innovation",
          desc: "We encourage creativity and adopt new ideas that drive growth.",
          icon: "⚡",
        },
        {
          title: "Collaboration",
          desc: "We believe in teamwork that empowers and achieves shared success.",
          icon: "🤝",
        },
        {
          title: "Excellence",
          desc: "We strive to deliver outstanding results and continuous improvement.",
          icon: "🏆",
        },
      ].map((value, index) => (
        <motion.div
          key={index}
          className="relative bg-[#2d347c] rounded-2xl p-10 text-center shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="text-5xl mb-2 opacity-90">{value.icon}</div>
            <h3 className="text-xl font-semibold text-white">{value.title}</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              {value.desc}
            </p>
          </div>

          {/* Soft inner overlay for balance */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-transparent opacity-60"></div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Gentle background texture */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,52,124,0.05),transparent_70%)] pointer-events-none"></div>
</section>






      {/* ===== YouTube Section ===== */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10">
          Watch Our Journey
        </h2>

        {/* AUTO SCROLL WRAPPER */}
        <div className="overflow-hidden py-4">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }}
          >
            {/* Duplicate items to create infinite loop */}
            {[...videos, ...videos].map((video, index) => (
              <div
                key={index}
                onClick={() => window.open(youtubeLink, "_blank")}
                className="min-w-[350px] md:min-w-[420px] cursor-pointer group"
              >
                <div className="relative rounded-xl overflow-hidden shadow-xl ">
                  <img
                    src={video.thumb}
                    alt="Aham Video"
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all"></div>

                  <div className="absolute bottom-4 right-4 bg-white text-blue-900 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg text-sm font-semibold">
                    Watch on YouTube <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
    </div>
  );
};

export default AboutUs;
