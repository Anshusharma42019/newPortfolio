import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    date: 'July 20, 2025',
    author: 'Anshu Sharma',
    excerpt: 'Learn the basics of React including components, props, and state.',
    fullContent:
      'React is a JavaScript library for building user interfaces. It allows you to break UI into components. This article helps you start with JSX, props, state, and component structure...',
    image: 'https://source.unsplash.com/600x400/?react,code',
  },
  {
    id: 2,
    title: 'Tailwind CSS Tips and Tricks',
    date: 'July 18, 2025',
    author: 'Anshu Sharma',
    excerpt: 'Improve your styling workflow with these Tailwind techniques.',
    fullContent:
      'Tailwind CSS is a utility-first CSS framework that lets you build modern designs without leaving your HTML. This article covers how to customize config, use dark mode, and more...',
    image: 'https://source.unsplash.com/600x400/?tailwindcss,web',
  },
  {
    id: 3,
    title: 'Building a Portfolio with Framer Motion',
    date: 'July 15, 2025',
    author: 'Anshu Sharma',
    excerpt: 'Add stunning animations to your portfolio using Framer Motion.',
    fullContent:
      'Framer Motion is a powerful animation library for React. You can animate components on mount, hover, tap, and scroll. Learn how to build a stunning animated portfolio step by step...',
    image: 'https://source.unsplash.com/600x400/?portfolio,developer',
  },
];

const Blog = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="min-h-[80vh] mt-10 bg-gradient-to-br from-gray-50 to-gray-200 px-4 py-10">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        📝 My Blog
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            whileHover={{ scale: 1.02 }}
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm flex items-center gap-3 mb-3">
                <FaCalendarAlt /> {post.date} • <FaUser /> {post.author}
              </p>
              <p className="text-gray-700 text-sm mb-4">
                {expandedId === post.id ? post.fullContent : post.excerpt}
              </p>
              <button
                onClick={() => toggleExpand(post.id)}
                className="mt-auto self-start bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                {expandedId === post.id ? 'Show Less ↑' : 'Read More →'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
