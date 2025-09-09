import React, { memo } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import HeroAvatar from "../assets/hero-avatar.png";

// Memoized skill tags component
const SkillTags = memo(() => {
  const skills = [
    "Responsive Web Design",
    "Single Page Applications", 
    "Reusable Component Architecture",
    "REST API Integration",
    "MongoDB & Node.js Backend",
    "Framer Motion Animation",
  ];
  
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-2">
      {skills.map((item, idx) => (
        <span
          key={idx}
          className="text-xs bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full shadow hover:scale-105 transition-transform"
        >
          {item}
        </span>
      ))}
    </div>
  );
});
SkillTags.displayName = 'SkillTags';

const Home = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[80vh] mt-10 px-4 sm:px-6 md:px-16 py-10 bg-[#eff0f4] text-black overflow-hidden">

      {/* LEFT CONTENT */}
      <div className="z-10 w-full md:w-1/2 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
        >
          Hi, I'm Anshu Sharma
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-blue-600 mb-4"
        >
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "React Enthusiast", 
                "UI/UX Explorer",
                "MERN Stack Builder",
              ],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 20,
            }}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-lg text-gray-700 mb-2 text-sm sm:text-base mx-auto md:mx-0"
        >
          I craft responsive, fast, and modern web applications using the latest technologies in the JavaScript ecosystem. I love transforming ideas into real products and focusing on clean code, intuitive UI/UX, and pixel-perfect layouts.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-lg text-gray-600 mb-4 text-sm sm:text-base mx-auto md:mx-0"
        >
          I'm currently working on scalable frontend architecture, accessibility-focused designs, and full-stack applications powered by Node.js and MongoDB. My goal is to create delightful user experiences that work beautifully across all devices.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <Link to="/projects">
            <button className="text-white px-6 py-3 rounded-full transition-all shadow-md bg-gradient-to-r from-blue-600 to-purple-500 hover:from-purple-500 hover:to-blue-600 text-sm sm:text-base">
              See My Projects
            </button>
          </Link>
        </motion.div>

        {/* WHAT I DO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-6"
        >
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
            🔧 What I Do
          </h3>
          <SkillTags />
        </motion.div>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="relative w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden shadow-2xl border-4 border-blue-500 bg-white p-1 relative">
          <img
            src={HeroAvatar}
            alt="Developer Avatar"
            className="w-full h-full object-contain"
            loading="eager"
            decoding="async"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
