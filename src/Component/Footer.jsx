import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="pt-10 pb-6 px-4"
      style={{ backgroundColor: "#eef0f4", color: "#171819" }}
    >
      {/* Top Unique Line */}
      <motion.div
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: '100% 50%' }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="w-full h-1 mb-8 mx-auto rounded-full"
        style={{
          backgroundImage: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
          backgroundSize: '200% 200%',
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-300 pb-10">

        {/* Profile Info */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 hover:from-red-500 hover:to-red-600 transition duration-500">
            Anshu Sharma
          </h2>
          <p className="text-sm leading-relaxed text-[#171819] opacity-80">
            MERN Stack Developer passionate about creating fast, responsive web applications with clean code and modern UI.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <Link
                to="/"
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 hover:from-red-500 hover:to-red-600 transition duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 hover:from-red-500 hover:to-red-600 transition duration-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 hover:from-red-500 hover:to-red-600 transition duration-500"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 hover:from-red-500 hover:to-red-600 transition duration-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact & Social */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-3">Connect With Me</h3>
          <p className="text-sm mb-4 opacity-80">
            Email:{" "}
            <a
              href="mailto:anshusharma@example.com"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 hover:from-red-500 hover:to-red-600 transition duration-500"
            >
              anshusharma@example.com
            </a>
          </p>
          <div className="flex space-x-5 text-xl">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-red-500 transition duration-500 transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-red-500 transition duration-500 transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-red-500 transition duration-500 transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-red-500 transition duration-500 transform hover:scale-110"
            >
              <FaFacebook />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <motion.p
        className="text-center text-sm mt-6 opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        © {new Date().getFullYear()} Anshu Sharma. All rights reserved. | Designed with ❤️ using React & Tailwind CSS
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
