import React from 'react';
import { useTranslation } from 'react-i18next';


import { scrollToSection } from '../../utils/helpers';

const PartnerWithUs = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">


      {/* Hero Section with Background Image */}
      <section
        className="relative bg-cover bg-center py-24 text-white text-center"
        style={{
          backgroundImage: "url('https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRFXZR6gNLeFAWUWVEKd93zjoSRTGyvu_YdJoKUKsWegotRLh_zcWX4a8AK0uiAqYFJYvhjwnE2fX_HLZPygsA5Q9L1qL7ghy5yWSGILNfUd-msp_o')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">Partner With Us</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Join hands with us to achieve mutual growth, innovation, and success. Together we can deliver excellence to our clients.
          </p>
         
        </div>
      </section>

     {/* Why Partner With Us Section */}
<section className="py-20 bg-gradient-to-b from-gray-100 to-white">
  <div className="container mx-auto px-6">
    <h3 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10 tracking-wide">
      Why Partner With Us
    </h3>
    <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center leading-relaxed">
      Our partnership model is crafted to enhance collaboration, boost efficiency, and drive innovation. Explore the unique advantages of teaming up with us.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {[
        {
          title: "Trusted Expertise",
          description: "Leverage our deep industry knowledge and proven success in every collaboration.",
        },
        {
          title: "Innovative Solutions",
          description: "Harness cutting-edge tech for creative and scalable solutions tailored to your needs.",
        },
        {
          title: "Revenue Growth",
          description: "Unlock new opportunities and accelerate your growth with our strategic support.",
        },
        {
          title: "Global Reach",
          description: "Extend your influence worldwide with our extensive network and resources.",
        },
      ].map((benefit, idx) => (
        <div
          key={idx}
          className="p-6 bg-white rounded-2xl shadow-lg hover:bg-indigo-50 transition-colors duration-300 transform hover:-translate-y-2"
          style={{ animationDelay: `${idx * 0.1}s` }}
        >
          <h4 className="text-xl font-semibold text-indigo-700 mb-3">{benefit.title}</h4>
          <p className="text-gray-700 text-sm md:text-base leading-snug">{benefit.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Success Stories Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Success Stories
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            See how our partners have achieved outstanding results through collaboration and innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRXbad-hajYN-OHKScxfbkFVkl4f_hhOqHdwlwdu5vhJftXFAIITz5NzcL12vDTqy1pP1NkEfVKijOoFYbrVn8omFW_6kKhfT_efzI9TJYmYig5b8g"
                alt="Success Story"
                className="w-full h-64 object-cover rounded-xl shadow-2xl"
              />
            </div>
            <div className="flex flex-col justify-center text-left p-6 bg-gray-50 rounded-xl shadow-md">
              <p className="text-lg text-gray-700 mb-4">
                “Partnering with this team transformed our business!”
              </p>
              <p className="text-lg text-gray-700">
                Our collaboration led to a 40% increase in efficiency and expanded our market reach significantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 max-w-5xl">
          <div className="md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
              />
              <button
                type="submit"
                className="w-full bg-indigo-900 text-white p-3 rounded-lg hover:bg-indigo-800 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                  alert('Form submitted! (This is just a demo)');
                }}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1170&q=80"
              alt="Business Professional"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default PartnerWithUs;