import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/solid';

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      text: 'AHAM made my dream of owning a home come true! Their no-income-proof process was exactly what I needed as a freelance consultant. The team was supportive throughout.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      loanType: 'Home Construction Loan'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Bangalore, Karnataka',
      rating: 5,
      text: 'Excellent service and quick processing! I got my home loan approved in just 10 days. The interest rates were competitive and the staff was very professional.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      loanType: 'Plot + Construction Loan'
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      text: 'As an NRI, I was worried about the documentation process. But AHAM team handled everything smoothly. I could complete most formalities online.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      loanType: 'NRI Home Loan'
    },
    {
      id: 4,
      name: 'Sunita Reddy',
      location: 'Hyderabad, Telangana',
      rating: 5,
      text: 'I renovated my entire house with their renovation loan. The stage-wise disbursement helped me manage the project better. Great experience overall!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      loanType: 'Home Renovation Loan'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      location: 'Jaipur, Rajasthan',
      rating: 5,
      text: 'Transparent process, no hidden charges, and excellent customer support. AHAM is definitely the best choice for home loans in India.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      loanType: 'Home Extension Loan'
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            {t('testimonials.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            {/* Main Testimonial */}
            <div className="bg-white rounded-3xl shadow-large p-8 lg:p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-primary-200 text-6xl font-serif">
                "
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  {/* Profile */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="w-24 h-24 mx-auto lg:mx-0 mb-4 relative">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full rounded-full object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-primary-600 rounded-full p-2">
                        <StarIcon className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    
                    <p className="text-gray-600 text-sm mb-3">
                      {testimonials[currentIndex].location}
                    </p>
                    
                    <div className="inline-block bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-xs font-medium">
                      {testimonials[currentIndex].loanType}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Rating */}
                    <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic text-center lg:text-left">
                      "{testimonials[currentIndex].text}"
                    </blockquote>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-50 rounded-full transform translate-x-16 translate-y-16"></div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-primary-300 text-gray-600 hover:text-primary-600 p-3 rounded-full transition-all duration-300"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>

              {/* Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary-600 scale-125' 
                        : 'bg-gray-300 hover:bg-primary-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-primary-300 text-gray-600 hover:text-primary-600 p-3 rounded-full transition-all duration-300"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Thumbnail Row */}
            <div className="hidden lg:flex justify-center mt-8 space-x-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 p-2 rounded-2xl transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary-100 border-2 border-primary-300' 
                      : 'bg-white border-2 border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="text-sm font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;