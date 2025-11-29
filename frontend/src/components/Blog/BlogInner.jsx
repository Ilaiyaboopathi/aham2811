// src/components/Blog/BlogInner.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./Blog";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowLeft, CheckCircle, Share2, Bookmark } from "lucide-react";

const BlogInner = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h2>
          <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center justify-center gap-2">
            <ArrowLeft className="h-5 w-5" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Fallback for missing data to prevent crashes
  const longDescription = post.longDescription || [post.excerpt];
  const highlights = post.highlights || [];
  const subHeading = post.subHeading || post.title;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* 🔵 HERO BANNER SECTION */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        {/* Background Image with Parallax-like effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(/${post.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors duration-300 group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium tracking-wide uppercase">Back to Articles</span>
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary-600 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-lg shadow-primary-600/30">
                {post.category}
              </span>
              <span className="text-gray-300 text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8 drop-shadow-lg">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 text-gray-200 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Written by</p>
                  <p className="font-semibold text-white">{post.author}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Published on</p>
                  <p className="font-semibold text-white">{post.date}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔵 MAIN CONTENT BODY */}
      <div className="container mx-auto px-4 py-16 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Content Column */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden"
            >
              {/* Intro Section */}
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                  {subHeading}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium border-l-4 border-primary-500 pl-6 italic">
                  {post.excerpt}
                </p>
              </div>

              {/* Featured Image inside content */}
              <div className="mb-12 rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src={`/${post.image}`}
                  alt={post.title}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Dynamic Long Description */}
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mb-12">
                {longDescription.map((paragraph, index) => (
                  <p key={index} className="leading-8 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Highlights Section */}
              {highlights.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-primary-600 rounded-full"></span>
                    Key Takeaways
                  </h3>
                  <ul className="space-y-4">
                    {highlights.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4"
                      >
                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-lg text-gray-700 font-medium">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Conclusion / Call to Action */}
              <div className="bg-primary-50 rounded-2xl p-8 text-center border border-primary-100">
  <h3 className="text-2xl font-bold text-gray-900 mb-3">
    Want to Learn More About Home Loans?
  </h3>

  <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
    We regularly publish expert insights, guides, and financial tips to help 
    you make smarter decisions about buying, building, or upgrading your home. 
    Stay informed with clear, practical, and real-world advice from AHAM’s housing experts.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    <div className="bg-white rounded-xl p-5 shadow-sm border border-primary-100 hover:shadow-md transition-all">
      <h4 className="font-semibold text-gray-900 mb-2 text-lg">
        Expert Insights
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        Understand the latest market trends, interest rate updates, and smart financing tips.
      </p>
    </div>

    <div className="bg-white rounded-xl p-5 shadow-sm border border-primary-100 hover:shadow-md transition-all">
      <h4 className="font-semibold text-gray-900 mb-2 text-lg">
        Step-By-Step Guides
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        Practical walkthroughs to simplify your home loan journey — from eligibility to approval.
      </p>
    </div>

    <div className="bg-white rounded-xl p-5 shadow-sm border border-primary-100 hover:shadow-md transition-all">
      <h4 className="font-semibold text-gray-900 mb-2 text-lg">
        Real Customer Stories
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        Learn how families achieved their dream homes with AHAM, even without traditional documents.
      </p>
    </div>
  </div>
</div>


            </motion.div>
          </div>

          {/* Right Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">

            {/* Trending Widget */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Trending Now</h3>
                <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded-md uppercase tracking-wide">Hot</span>
              </div>

              <div className="space-y-6">
                {blogPosts.filter(p => p.id !== post.id).slice(0, 4).map((item) => (
                  <Link
                    key={item.id}
                    to={`/blog/${item.id}`}
                    className="group flex gap-4 items-start"
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 relative">
                      <img
                        src={`/${item.image}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={item.title}
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-semibold text-primary-600 mb-1 block">
                        {item.category}
                      </span>
                      <h4 className="text-base font-bold text-gray-900 leading-snug group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {item.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                to="/blog"
                className="block mt-8 text-center w-full py-3 rounded-lg border-2 border-gray-100 text-gray-600 font-semibold hover:border-primary-600 hover:text-primary-600 transition-all"
              >
                View All Articles
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInner;
