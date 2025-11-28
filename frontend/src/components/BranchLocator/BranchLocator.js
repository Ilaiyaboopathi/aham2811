import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  MapPinIcon, 
  PhoneIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const BranchLocator = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const CARDS_PER_PAGE = 6;

  // Base branch data (4 branches)
  const baseBranches = [
    {
      name: "Anakapally",
      city: "Anakapalli",
      region: "AP",
      pincode: "531001",
      address: "10-06-68/1, II Floor, Pillavaari Veedhi, Anakapalli - 531001",
      contact: "9176032225",
      mapLink: "https://maps.google.com/?q=Anakapalli+Andhra+Pradesh",
      reviewLink: "https://g.page/r/SAMPLE-REVIEW-LINK"
    },
    {
      name: "Guntur",
      city: "Guntur",
      region: "AP",
      pincode: "522001",
      address: "6-4-9/1, Arundelpet, Guntur - 522001",
      contact: "7824852579",
      mapLink: "https://maps.google.com/?q=Guntur+Andhra+Pradesh",
      reviewLink: "https://g.page/r/SAMPLE-REVIEW-LINK"
    },
    {
      name: "Nellore",
      city: "Nellore",
      region: "AP",
      pincode: "524003",
      address: "3rd floor, Sridhar's Krishna Towers, Annamayya circle, Mini By Pass Road, Nellore - 524003",
      contact: "7824045935",
      mapLink: "https://maps.google.com/?q=Nellore+Andhra+Pradesh",
      reviewLink: "https://g.page/r/SAMPLE-REVIEW-LINK"
    },
    {
      name: "Rajahmundry",
      city: "Rajahmundry",
      region: "AP",
      pincode: "533103",
      address: "DNO:79-02-04/1B, Tilak Road Revenue Ward No:30, Rajahmundry, Andhra Pradesh - 533103",
      contact: "9989796410",
      mapLink: "https://maps.google.com/?q=Rajahmundry+Andhra+Pradesh",
      reviewLink: "https://g.page/r/SAMPLE-REVIEW-LINK"
    }
  ];

  // Generate 30 branches by repeating and modifying the base branches
  const allBranches = useMemo(() => {
    const branches = [];
    for (let i = 0; i < 30; i++) {
      const baseBranch = baseBranches[i % baseBranches.length];
      branches.push({
        ...baseBranch,
        id: i + 1,
        name: `${baseBranch.name}${i >= baseBranches.length ? ` Branch ${Math.floor(i / baseBranches.length) + 1}` : ''}`
      });
    }
    return branches;
  }, []);

  // Filter branches based on search query
  const filteredBranches = useMemo(() => {
    if (!searchQuery.trim()) return allBranches;
    
    const query = searchQuery.toLowerCase();
    return allBranches.filter(branch => 
      branch.name.toLowerCase().includes(query) ||
      branch.city.toLowerCase().includes(query) ||
      branch.pincode.includes(query) ||
      branch.address.toLowerCase().includes(query)
    );
  }, [searchQuery, allBranches]);

  // Pagination logic
  const totalPages = Math.ceil(filteredBranches.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const endIndex = startIndex + CARDS_PER_PAGE;
  const currentBranches = filteredBranches.slice(startIndex, endIndex);

  // Reset to page 1 when search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      {/* <section className="relative h-[400px] bg-gradient-to-br from-primary-600 via-primary-700 to-blue-900 overflow-hidden">
      
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, white 0%, transparent 50%)`
          }} />
        </div>

        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <MapPinIcon className="h-5 w-5 text-white" />
              <span className="text-white text-sm font-medium">Find Your Nearest Branch</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              SMFG India Credit <br />
              <span className="text-yellow-300">Branch Locator</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Locate your closest SMFG India Credit branch and get directions instantly. We're here to serve you across multiple locations.
            </p>

           
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <MapPinIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{allBranches.length}+</div>
                  <div className="text-white/80 text-sm">Branches</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4.5+</div>
                  <div className="text-white/80 text-sm">Average Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

       
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#f9fafb" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section> */}

       <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/img/ahamlife/Team-banner.webp')"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-700/90"></div>
              </div>
      
              {/* Content */}
              <div className="relative z-10 container mx-auto px-4 py-20 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                  
              <span className="text-yellow-300">Branch Locator</span>
                  </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Locate your closest SMFG India Credit branch and get directions instantly. We're here to serve you across multiple locations.
            </p>
                  {/* <div className="mt-10 flex flex-wrap gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection('become-partner')}
                      className="bg-white text-primary-600 hover:bg-primary-50 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg"
                    >
                      Register Now
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection('why-partner')}
                      className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </div> */}
                </motion.div>
              </div>
            </section>

      {/* Search & Cards Section */}
      <section className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your nearest branch…"
              data-testid="branch-search-input"
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-200 focus:border-primary-500 transition-all duration-200 text-lg"
            />
          </div>
          {searchQuery && (
            <p className="mt-3 text-gray-600 text-sm">
              Found <span className="font-semibold text-primary-600">{filteredBranches.length}</span> branch{filteredBranches.length !== 1 ? 'es' : ''} matching "{searchQuery}"
            </p>
          )}
        </motion.div>

        {/* Branch Cards Grid */}
        {currentBranches.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            >
              {currentBranches.map((branch, index) => (
                <motion.div
                  key={branch.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                  data-testid={`branch-card-${branch.id}`}
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {branch.name}
                        </h3>
                        <p className="text-white/90 text-sm">{branch.city}, {branch.region}</p>
                      </div>
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <MapPinIcon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="px-6 py-5 space-y-4">
                    {/* Address */}
                    <div className="flex items-start space-x-3">
                      <MapPinIcon className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-700 leading-relaxed">{branch.address}</p>
                        <p className="text-xs text-gray-500 mt-1">Pincode: {branch.pincode}</p>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center space-x-3">
                      <PhoneIcon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <a 
                        href={`tel:${branch.contact}`}
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        {branch.contact}
                      </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3 pt-2">
                      <a
                        href={branch.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`directions-btn-${branch.id}`}
                        className="flex-1 bg-red-600 hover:bg-primary-700 text-white text-sm font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md text-center"
                      >
                        Direction
                      </a>
                      <a
                        href={branch.reviewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`reviews-btn-${branch.id}`}
                        className="flex-1 bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 text-sm font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md text-center"
                      >
                        Google Reviews
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex justify-center items-center space-x-4"
                data-testid="pagination-controls"
              >
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    currentPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-primary-600 hover:bg-primary-700 text-white transform hover:scale-105 hover:shadow-md'
                  }`}
                  data-testid="prev-page-btn"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center space-x-2">
                  <span className="text-gray-600 font-medium">
                    Page <span className="text-primary-600 font-bold">{currentPage}</span> of <span className="font-bold">{totalPages}</span>
                  </span>
                </div>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    currentPage === totalPages
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-primary-600 hover:bg-primary-700 text-white transform hover:scale-105 hover:shadow-md'
                  }`}
                  data-testid="next-page-btn"
                >
                  <span>Next</span>
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </motion.div>
            )}
          </>
        ) : (
          /* No Results */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <MapPinIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No branches found</h3>
            <p className="text-gray-500">Try adjusting your search query</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-6 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Clear Search
            </button>
          </motion.div>
        )}
      </section>

      {/* Branch Timings Info Section */}
      <section className="bg-primary-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            <span className="font-semibold">Branch Timings:</span> 9:30 AM to 6:30 PM, Monday to Saturday every week excluding public holidays & 1st Saturday of every month. Sunday is weekly off.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BranchLocator;
