import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Import corrected icons from @heroicons/react/24/outline
import { DocumentDuplicateIcon, ShieldCheckIcon, CurrencyDollarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const Governance = () => {
  const { t } = useTranslation();

  // Governance items data with new colors and icons
  const governanceItems = [
    { title: 'Registration Certificate', icon: DocumentDuplicateIcon, color: 'bg-primary-200', hoverColor: 'hover:bg-primary-300' },
    { title: 'Cibil Membership Certificate', icon: ShieldCheckIcon, color: 'bg-accent-200', hoverColor: 'hover:bg-accent-300' },
    { title: 'MTIC', icon: CurrencyDollarIcon, color: 'bg-yellow-200', hoverColor: 'hover:bg-yellow-300' },
    { title: 'Interest Rate Policy', icon: BuildingOfficeIcon, color: 'bg-primary-400', hoverColor: 'hover:bg-primary-500' },
    { title: 'Interest Rate For Past Quarter', icon: CurrencyDollarIcon, color: 'bg-red-200', hoverColor: 'hover:bg-red-300' },
    { title: 'Interim Moratorium', icon: DocumentDuplicateIcon, color: 'bg-indigo-200', hoverColor: 'hover:bg-indigo-300' },
    { title: 'Notice Board', icon: ShieldCheckIcon, color: 'bg-teal-200', hoverColor: 'hover:bg-teal-300' },
    { title: 'KYC & AML', icon: BuildingOfficeIcon, color: 'bg-orange-200', hoverColor: 'hover:bg-orange-300' },
    { title: 'POSH', icon: DocumentDuplicateIcon, color: 'bg-pink-200', hoverColor: 'hover:bg-pink-300' },
    { title: 'MGT-7', icon: ShieldCheckIcon, color: 'bg-gray-200', hoverColor: 'hover:bg-gray-300' },
    { title: 'Independent Director Appointment Letter', icon: CurrencyDollarIcon, color: 'bg-primary-200', hoverColor: 'hover:bg-primary-300' },
    { title: 'Internal Guidelines On Corporate Governance', icon: BuildingOfficeIcon, color: 'bg-accent-200', hoverColor: 'hover:bg-accent-300' },
    { title: 'Whistleblower Policy', icon: DocumentDuplicateIcon, color: 'bg-yellow-200', hoverColor: 'hover:bg-yellow-300' },
    { title: 'Policy On Fit & Proper', icon: ShieldCheckIcon, color: 'bg-primary-400', hoverColor: 'hover:bg-primary-500' },
    { title: 'Co-Lending Policy', icon: CurrencyDollarIcon, color: 'bg-red-200', hoverColor: 'hover:bg-red-300' },
    { title: 'Fair Practice Code', icon: BuildingOfficeIcon, color: 'bg-indigo-200', hoverColor: 'hover:bg-indigo-300' },
    { title: 'Policy On Related Party Transaction', icon: DocumentDuplicateIcon, color: 'bg-teal-200', hoverColor: 'hover:bg-teal-300' },
    { title: 'ESOPS', icon: ShieldCheckIcon, color: 'bg-orange-200', hoverColor: 'hover:bg-orange-300' },
    { title: 'Compliance Education Literature', icon: CurrencyDollarIcon, color: 'bg-pink-200', hoverColor: 'hover:bg-pink-300' },
    { title: 'Ratings', icon: BuildingOfficeIcon, color: 'bg-gray-200', hoverColor: 'hover:bg-gray-300' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Banner Section */}
      <section
        className="relative w-full h-96 bg-cover bg-center animate-fade-in-up"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=1470&q=80')" }} // Replaced with a publicly accessible image URL
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Governance</h1>
            <nav className="text-sm">
              <Link to="/" className="hover:text-primary-200">Home</Link> <span className="text-gray-300">›</span> <span>Governance</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Governance Items Section */}
      <section className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {governanceItems.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-soft ${item.color} ${item.hoverColor} transition-all duration-300 transform hover:-translate-y-2 hover:shadow-medium animate-fade-in-up`}
            >
              <item.icon className="h-12 w-12 text-gray-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 text-center">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Governance;