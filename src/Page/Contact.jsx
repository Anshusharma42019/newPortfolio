import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-100 py-12 px-6 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 60 }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className="text-gray-600 mb-8 text-center"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        I'd love to hear from you. Let's work together!
      </motion.p>

      {/* Cartoon Illustration */}
      
      {/* Contact Form */}
      <motion.form
        className="w-full max-w-xl bg-white p-8 rounded-xl shadow-lg grid grid-cols-1 gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            rows="4"
            placeholder="Your Message"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
          >
            Send
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
