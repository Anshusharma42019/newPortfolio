import React from 'react';
import { motion } from 'framer-motion';

const text = "Hi, I'm Anshu Sharma — A Passionate Full Stack Developer.";
const AnimatedText = () => {
  return (
    <div className="w-full text-center mt-10 px-4">
      <motion.h1
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.04,
            },
          },
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
