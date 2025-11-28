// src/components/Blog/BlogInner.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./Blog";
import { Calendar, User, Clock, ArrowLeft, CheckCircle } from "lucide-react";

const BlogInner = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="p-10 text-center text-xl">Blog not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white">

      {/* 🔵 STATIC BANNER */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 py-24">
        <div className="container mx-auto px-4">

          <Link to="/blog" className="text-white flex items-center gap-2 mb-6">
            <ArrowLeft className="h-5 w-5" /> Back to Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center flex-wrap gap-6 text-gray-200 text-sm">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author}
            </div>

            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>

            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* PAGE BODY */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-10">

          {/* Intro Heading */}
          <h2 className="text-3xl font-bold text-gray-900 leading-snug">
            Transforming Home Finance: Insights You Must Know
          </h2>

          {/* Short Description */}
          <p className="text-gray-700 text-lg leading-relaxed">
            {post.excerpt}
          </p>

          {/* Image */}
          <img
            src={`/${post.image}`}
            alt={post.title}
            className="w-full h-[700px] object-cover rounded-xl shadow-lg"
          />

          {/* Long Body */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

            <p>
              At AHAM Housing Finance, we continuously analyse market trends, 
              customer behaviour, and financial patterns to ensure every family 
              gets access to affordable, transparent, and responsible financing.
              This article explores essential insights related to {post.category} 
              and why understanding these trends helps you make better home loan decisions.
            </p>

            {/* Sub Heading */}
            <h3 className="text-2xl font-semibold text-gray-900">
              Key Highlights You Should Know
            </h3>

            {/* Bullet Points */}
            <ul className="space-y-3">
              {[
                "Latest market behaviour affecting home loan demand",
                "Why 2025 is a crucial year for real estate transformation",
                "How customers can secure better loan terms through planning",
                "Financial strategies that reduce long-term EMI burden",
                "Technology-driven changes in loan approval and processing"
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Sub Heading 2 */}
            <h3 className="text-2xl font-semibold text-gray-900">
              Why This Topic Matters in 2025
            </h3>

            <p>
              With rapid financial digitization and changing customer lifestyles, 
              housing finance is undergoing a major shift. From updated RBI policies 
              to government initiatives, every component impacts your home loan 
              eligibility, EMI, and affordability.
            </p>

            <p>
              Staying informed can help you choose the right product—whether it’s 
              home purchase, construction, renovation, balance transfer, or NRI-based 
              home loan solutions.
            </p>

          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Trending Now</h3>

          {blogPosts.slice(0, 4).map((item) => (
            <Link
              key={item.id}
              to={`/blog/${item.id}`}
              className="flex gap-3 bg-gray-50 p-3 rounded-lg shadow hover:shadow-md transition"
            >
              <img
                src={`/${item.image}`}
                className="w-24 h-24 object-cover rounded-md"
                alt={item.title}
              />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogInner;
