import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // Hero slides data with CTA links
  const slides = [
    {
      id: 1,
      title: t('hero.slide1.title'),
      subtitle: t('hero.slide1.subtitle'),
      cta: t('hero.slide1.cta'),
      backgroundImage: 'img/Home_banner/Aham_banner1.png',
      href: "https://aham.mbwhost.in/contact",
      highlights: ['No Income Proof Required', 'Quick Approval', 'Competitive Rates']
    },
    {
      id: 2,
      title: t('hero.slide2.title'),
      subtitle: t('hero.slide2.subtitle'),
      cta: t('hero.slide2.cta'),
      backgroundImage: 'img/Home_banner/Aham_banner2.png',
      href: "https://aham.mbwhost.in/customer-360-eligibility-calculator",
      highlights: ['Instant Assessment', '5-Minute Process', 'Personalized Results']
    },
    {
      id: 3,
      title: t('hero.slide3.title'),
      subtitle: t('hero.slide3.subtitle'),
      cta: t('hero.slide3.cta'),
      backgroundImage: 'img/Home_banner/Aham_banner3.png',
      href: "https://aham.mbwhost.in/pmay2",
      highlights: ['Government Subsidy', 'Up to ₹2.67 Lakhs', 'PMAY Certified']
    },
    {
      id: 4,
      title: t('hero.slide4.title'),
      subtitle: t('hero.slide4.subtitle'),
      cta: t('hero.slide4.cta'),
      backgroundImage: 'img/Home_banner/Aham_banner4.png',
      href: "https://aham.mbwhost.in/emi-calculator",
      highlights: ['Instant Calculation', 'Multiple Scenarios', 'Download Reports']
    }
  ];

  // Slide variants for animation
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  const setSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen max-h-[800px] min-h-[600px] overflow-hidden bg-gray-900">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/70 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-4xl">
              <div className="space-y-6">
                {/* Slide Number */}
                <div className="flex items-center space-x-2 text-white/80">
                  <span className="text-sm font-medium">
                    {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                  </span>
                  <div className="flex space-x-1">
                    {slides.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 transition-all duration-300 ${index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
                          }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Main Title */}
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  {slides[currentSlide].highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
                    >
                      <CheckCircleIcon className="h-4 w-4 text-green-400" />
                      <span className="text-white text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <a
                    href={slides[currentSlide].href}
                    className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-large"
                  >
                    {slides[currentSlide].cta}
                  </a>
                  {/* EMI Calculator Button */}
                  <button
                    onClick={() => {
                      const section = document.getElementById("emi-calculator");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 px-8 py-6 h-16 w-full sm:w-auto"
                  >
                    <span>EMI Calculator</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Uncomment if needed */}
      {/* <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button> */}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/60'
              }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <div className="flex flex-col items-center space-y-2 text-white/80">
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <div className="w-px h-8 bg-white/60 relative">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-0 left-0 w-px h-2 bg-white"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
