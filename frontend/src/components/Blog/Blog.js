// src/components/Blog/Blog.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { TrendingUp } from "lucide-react";

// --- BLOG DATA (named export so other components can import it) ---
export const blogPosts = [
  {
    id: 1,
    title: 'The Future of Real Estate Investment in 2025',
    subHeading: 'Navigating the New Era of Property Investment',
    excerpt: 'Discover emerging trends and opportunities shaping the real estate market in the coming year.',
    longDescription: [
      'The real estate landscape is undergoing a seismic shift as we approach 2025. With the integration of AI-driven market analysis, sustainable building practices, and evolving government policies, investors are presented with a unique set of challenges and opportunities. Understanding these dynamics is crucial for anyone looking to capitalize on the next wave of property growth.',
      'One of the most significant trends is the rise of Tier-2 and Tier-3 cities as new investment hotspots. As infrastructure development accelerates and remote work becomes the norm, these regions are witnessing unprecedented demand for both residential and commercial spaces. Smart investors are already diversifying their portfolios to include these high-growth potential areas.',
      'Furthermore, the emphasis on green buildings and energy-efficient homes is no longer just a niche preference but a market standard. Properties with high sustainability ratings are commanding premium prices and ensuring better long-term value retention. This shift is driven not only by environmental consciousness but also by tangible cost savings for homeowners.'
    ],
    highlights: [
      'Rise of Tier-2 and Tier-3 cities as investment hubs',
      'Impact of AI and PropTech on property valuation',
      'Sustainable and green building standards',
      'Evolving government policies and tax benefits',
      'Shift in consumer preference towards integrated townships'
    ],
    category: 'Investment',
    author: 'Rajesh Kumar',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
    image: 'img/Blogs/Real-Estate.webp',
    featured: true
  },
  {
    id: 2,
    title: 'Building Wealth Through Smart Home Loans',
    excerpt: 'Expert strategies for leveraging home financing to create long-term financial security.',
    category: 'Finance',
    longDescription: [
      'The real estate landscape is undergoing a seismic shift as we approach 2025. With the integration of AI-driven market analysis, sustainable building practices, and evolving government policies, investors are presented with a unique set of challenges and opportunities. Understanding these dynamics is crucial for anyone looking to capitalize on the next wave of property growth.',
      'One of the most significant trends is the rise of Tier-2 and Tier-3 cities as new investment hotspots. As infrastructure development accelerates and remote work becomes the norm, these regions are witnessing unprecedented demand for both residential and commercial spaces. Smart investors are already diversifying their portfolios to include these high-growth potential areas.',
      'Furthermore, the emphasis on green buildings and energy-efficient homes is no longer just a niche preference but a market standard. Properties with high sustainability ratings are commanding premium prices and ensuring better long-term value retention. This shift is driven not only by environmental consciousness but also by tangible cost savings for homeowners.'
    ],
    highlights: [
      'Rise of Tier-2 and Tier-3 cities as investment hubs',
      'Impact of AI and PropTech on property valuation',
      'Sustainable and green building standards',
      'Evolving government policies and tax benefits',
      'Shift in consumer preference towards integrated townships'
    ],
    author: 'Priya Sharma',
    date: 'Jan 12, 2025',
    readTime: '6 min read',
    image: 'img/Blogs/Building-Wealth.webp',
    featured: true
  },
  {
    id: 3,
    title: 'Leadership in Housing Finance: Key Insights',
    excerpt: 'Lessons from industry leaders on navigating the evolving housing finance landscape.',
    longDescription: [
      'The real estate landscape is undergoing a seismic shift as we approach 2025. With the integration of AI-driven market analysis, sustainable building practices, and evolving government policies, investors are presented with a unique set of challenges and opportunities. Understanding these dynamics is crucial for anyone looking to capitalize on the next wave of property growth.',
      'One of the most significant trends is the rise of Tier-2 and Tier-3 cities as new investment hotspots. As infrastructure development accelerates and remote work becomes the norm, these regions are witnessing unprecedented demand for both residential and commercial spaces. Smart investors are already diversifying their portfolios to include these high-growth potential areas.',
      'Furthermore, the emphasis on green buildings and energy-efficient homes is no longer just a niche preference but a market standard. Properties with high sustainability ratings are commanding premium prices and ensuring better long-term value retention. This shift is driven not only by environmental consciousness but also by tangible cost savings for homeowners.'
    ],
    highlights: [
      'Rise of Tier-2 and Tier-3 cities as investment hubs',
      'Impact of AI and PropTech on property valuation',
      'Sustainable and green building standards',
      'Evolving government policies and tax benefits',
      'Shift in consumer preference towards integrated townships'
    ],
    category: 'Leadership',
    author: 'Amit Patel',
    date: 'Jan 10, 2025',
    readTime: '5 min read',
    image: 'img/Blogs/Leadership.webp',
    featured: true
  },
  {
    id: 4,
    title: 'First-Time Home Buyers: Complete Guide',
    excerpt: 'Everything you need to know about buying your first home.',
    longDescription: [
      'The real estate landscape is undergoing a seismic shift as we approach 2025. With the integration of AI-driven market analysis, sustainable building practices, and evolving government policies, investors are presented with a unique set of challenges and opportunities. Understanding these dynamics is crucial for anyone looking to capitalize on the next wave of property growth.',
      'One of the most significant trends is the rise of Tier-2 and Tier-3 cities as new investment hotspots. As infrastructure development accelerates and remote work becomes the norm, these regions are witnessing unprecedented demand for both residential and commercial spaces. Smart investors are already diversifying their portfolios to include these high-growth potential areas.',
      'Furthermore, the emphasis on green buildings and energy-efficient homes is no longer just a niche preference but a market standard. Properties with high sustainability ratings are commanding premium prices and ensuring better long-term value retention. This shift is driven not only by environmental consciousness but also by tangible cost savings for homeowners.'
    ],
    highlights: [
      'Rise of Tier-2 and Tier-3 cities as investment hubs',
      'Impact of AI and PropTech on property valuation',
      'Sustainable and green building standards',
      'Evolving government policies and tax benefits',
      'Shift in consumer preference towards integrated townships'
    ],
    category: 'Guide',
    author: 'Sneha Reddy',
    date: 'Jan 8, 2025',
    readTime: '7 min read',
    image: 'img/Blogs/First-Time.webp',
    featured: true
  },
  {
    id: 5,
    title: 'Tax Benefits of Home Ownership in India',
    excerpt: 'Maximize your savings with these essential tax deductions.',
    longDescription: [
      'The real estate landscape is undergoing a seismic shift as we approach 2025. With the integration of AI-driven market analysis, sustainable building practices, and evolving government policies, investors are presented with a unique set of challenges and opportunities. Understanding these dynamics is crucial for anyone looking to capitalize on the next wave of property growth.',
      'One of the most significant trends is the rise of Tier-2 and Tier-3 cities as new investment hotspots. As infrastructure development accelerates and remote work becomes the norm, these regions are witnessing unprecedented demand for both residential and commercial spaces. Smart investors are already diversifying their portfolios to include these high-growth potential areas.',
      'Furthermore, the emphasis on green buildings and energy-efficient homes is no longer just a niche preference but a market standard. Properties with high sustainability ratings are commanding premium prices and ensuring better long-term value retention. This shift is driven not only by environmental consciousness but also by tangible cost savings for homeowners.'
    ],
    highlights: [
      'Rise of Tier-2 and Tier-3 cities as investment hubs',
      'Impact of AI and PropTech on property valuation',
      'Sustainable and green building standards',
      'Evolving government policies and tax benefits',
      'Shift in consumer preference towards integrated townships'
    ],
    category: 'Finance',
    author: 'Vikram Singh',
    date: 'Jan 6, 2025',
    readTime: '4 min read',
    image: 'img/Blogs/Tax-Benefits.webp',
    featured: true
  },
  {
    id: 6,
    title: 'Sustainable Housing: Green Home Loans',
    excerpt: 'How eco-friendly homes are reshaping the mortgage industry.',
    longDescription: [
      'The real estate landscape is undergoing a seismic shift as we approach 2025. With the integration of AI-driven market analysis, sustainable building practices, and evolving government policies, investors are presented with a unique set of challenges and opportunities. Understanding these dynamics is crucial for anyone looking to capitalize on the next wave of property growth.',
      'One of the most significant trends is the rise of Tier-2 and Tier-3 cities as new investment hotspots. As infrastructure development accelerates and remote work becomes the norm, these regions are witnessing unprecedented demand for both residential and commercial spaces. Smart investors are already diversifying their portfolios to include these high-growth potential areas.',
      'Furthermore, the emphasis on green buildings and energy-efficient homes is no longer just a niche preference but a market standard. Properties with high sustainability ratings are commanding premium prices and ensuring better long-term value retention. This shift is driven not only by environmental consciousness but also by tangible cost savings for homeowners.'
    ],
    highlights: [
      'Rise of Tier-2 and Tier-3 cities as investment hubs',
      'Impact of AI and PropTech on property valuation',
      'Sustainable and green building standards',
      'Evolving government policies and tax benefits',
      'Shift in consumer preference towards integrated townships'
    ],
    category: 'Trends',
    author: 'Meera Nair',
    date: 'Jan 4, 2025',
    readTime: '5 min read',
    image: 'img/Blogs/Green-Home.png',
    featured: true
  },
  {
    id: 7,
    title: 'Home Loan EMI Calculator: Smart Planning',
    excerpt: 'Master your monthly payments with strategic planning tools.',
    longDescription: [
      'The real estate landscape is undergoing a seismic shift as we approach 2025. With the integration of AI-driven market analysis, sustainable building practices, and evolving government policies, investors are presented with a unique set of challenges and opportunities. Understanding these dynamics is crucial for anyone looking to capitalize on the next wave of property growth.',
      'One of the most significant trends is the rise of Tier-2 and Tier-3 cities as new investment hotspots. As infrastructure development accelerates and remote work becomes the norm, these regions are witnessing unprecedented demand for both residential and commercial spaces. Smart investors are already diversifying their portfolios to include these high-growth potential areas.',
      'Furthermore, the emphasis on green buildings and energy-efficient homes is no longer just a niche preference but a market standard. Properties with high sustainability ratings are commanding premium prices and ensuring better long-term value retention. This shift is driven not only by environmental consciousness but also by tangible cost savings for homeowners.'
    ],
    highlights: [
      'Rise of Tier-2 and Tier-3 cities as investment hubs',
      'Impact of AI and PropTech on property valuation',
      'Sustainable and green building standards',
      'Evolving government policies and tax benefits',
      'Shift in consumer preference towards integrated townships'
    ],
    category: 'Tools',
    author: 'Arun Kapoor',
    date: 'Jan 2, 2025',
    readTime: '3 min read',
    image: 'img/Blogs/Smart-Planning.webp',
    featured: true
  },
  {
    id: 8,
    title: 'NRI Home Loans: Complete Overview',
    excerpt: 'Special financing options for Non-Resident Indians.',
    longDescription: [
      'The real estate landscape is undergoing a seismic shift as we approach 2025. With the integration of AI-driven market analysis, sustainable building practices, and evolving government policies, investors are presented with a unique set of challenges and opportunities. Understanding these dynamics is crucial for anyone looking to capitalize on the next wave of property growth.',
      'One of the most significant trends is the rise of Tier-2 and Tier-3 cities as new investment hotspots. As infrastructure development accelerates and remote work becomes the norm, these regions are witnessing unprecedented demand for both residential and commercial spaces. Smart investors are already diversifying their portfolios to include these high-growth potential areas.',
      'Furthermore, the emphasis on green buildings and energy-efficient homes is no longer just a niche preference but a market standard. Properties with high sustainability ratings are commanding premium prices and ensuring better long-term value retention. This shift is driven not only by environmental consciousness but also by tangible cost savings for homeowners.'
    ],
    highlights: [
      'Rise of Tier-2 and Tier-3 cities as investment hubs',
      'Impact of AI and PropTech on property valuation',
      'Sustainable and green building standards',
      'Evolving government policies and tax benefits',
      'Shift in consumer preference towards integrated townships'
    ],
    category: 'NRI',
    author: 'Sanjay Mehta',
    date: 'Dec 30, 2024',
    readTime: '6 min read',
    image: 'img/Blogs/Complete-Overview.webp',
    featured: true
  },
  {
    id: 9,
    title: 'Property Valuation: Expert Tips',
    excerpt: 'Understand true market value before making offers.',
    longDescription: [
      'The real estate landscape is undergoing a seismic shift as we approach 2025. With the integration of AI-driven market analysis, sustainable building practices, and evolving government policies, investors are presented with a unique set of challenges and opportunities. Understanding these dynamics is crucial for anyone looking to capitalize on the next wave of property growth.',
      'One of the most significant trends is the rise of Tier-2 and Tier-3 cities as new investment hotspots. As infrastructure development accelerates and remote work becomes the norm, these regions are witnessing unprecedented demand for both residential and commercial spaces. Smart investors are already diversifying their portfolios to include these high-growth potential areas.',
      'Furthermore, the emphasis on green buildings and energy-efficient homes is no longer just a niche preference but a market standard. Properties with high sustainability ratings are commanding premium prices and ensuring better long-term value retention. This shift is driven not only by environmental consciousness but also by tangible cost savings for homeowners.'
    ],
    highlights: [
      'Rise of Tier-2 and Tier-3 cities as investment hubs',
      'Impact of AI and PropTech on property valuation',
      'Sustainable and green building standards',
      'Evolving government policies and tax benefits',
      'Shift in consumer preference towards integrated townships'
    ],
    category: 'Investment',
    author: 'Divya Iyer',
    date: 'Dec 28, 2024',
    readTime: '5 min read',
    image: 'img/Blogs/Property-Valuation.webp',
    featured: true
  }
];

const categories = [
  'All Posts',
  'Investment',
  'Finance',
  'Leadership',
  'Guide',
  'Trends',
  'Tools',
  'NRI'
];

const Blog = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured and regular posts
  const featuredPost = filteredPosts.find(post => post.featured);
  const mediumPosts = filteredPosts.filter(post => post.featured && post.id !== featuredPost?.id);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Featured Article */}
      {featuredPost && (
        <section className="relative h-[500px] bg-gray-900 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${featuredPost.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent" />
          </div>

          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {featuredPost.category}
                </span>
                <span className="flex items-center text-gray-300 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {featuredPost.date}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {featuredPost.title}
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center space-x-6">
                <div className="flex items-center text-gray-300">
                  <User className="h-5 w-5 mr-2" />
                  <span>{featuredPost.author}</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300">{featuredPost.readTime}</span>
              </div>

              <Link to={`/blog/${featuredPost.id}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2 shadow-large"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            {/* Medium Featured Posts */}
            {mediumPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {mediumPosts.map((post, index) => (
                  <Link key={post.id} to={`/blog/${post.id}`}>
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer"
                    >
                      <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {post.date}
                          </span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </motion.article>
                  </Link>
                ))}
              </div>
            )}

            {/* Regular Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentPosts.map((post, index) => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center">
                            <User className="h-3 w-3 mr-1" />
                            {post.author}
                          </span>
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-12">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 rounded-lg transition-colors ${currentPage === i + 1
                        ? 'bg-primary-600 text-white'
                        : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search Widget */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-soft"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Search Articles</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </motion.div>

            {/* Categories Widget */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-soft"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => { setSelectedCategory(category); setCurrentPage(1); }}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Trending Articles Widget */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-soft"
            >
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary-600" />
                <h3 className="text-xl font-bold text-gray-900">Trending Now</h3>
              </div>
              <div className="space-y-4">
                {blogPosts.slice(0, 4).map((post) => (
                  <div key={post.id} className="flex space-x-3 group cursor-pointer">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter widget optional */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
