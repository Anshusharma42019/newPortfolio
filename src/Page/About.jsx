import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png'; // Make sure this path is correct

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="min-h-[90vh] mt-10 bg-[#eef0f4] text-[#070708] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        
        {/* Profile Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, rotateY: -90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.3, type: 'spring' }}
        >
          <motion.img
            src={profileImg}
            alt="Profile"
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl"
            whileHover={{ scale: 1.05, rotateY: 10 }}
            transition={{ type: 'spring', stiffness: 150 }}
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-500">
            About Me
          </h2>

          <p className="text-[#070708] text-base sm:text-lg md:text-xl leading-relaxed mt-4">
            Hello! I’m a <span className="text-amber-500 font-semibold">Full Stack MERN Developer</span> who loves building user-centric, responsive, and fast web applications.
          </p>

          <p className="text-[#333] text-sm sm:text-base md:text-lg leading-relaxed mt-3">
            I have hands-on experience building real-world projects using <strong>MongoDB</strong>, <strong>Express</strong>, <strong>React</strong>, and <strong>Node</strong>. I focus on clean UI, performance, and user experience with <strong>TailwindCSS</strong> and <strong>Framer Motion</strong>.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-5">
            {[
              'MongoDB', 'Express.js', 'React.js', 'Node.js',
              'Tailwind CSS', 'Framer Motion', 'JavaScript',
              'Git & GitHub', 'REST APIs', 'Responsive Design',
            ].map((tech, idx) => (
              <motion.span
                key={idx}
                className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-3 py-2 rounded-xl text-sm font-semibold shadow-lg cursor-default"
                whileHover={{ scale: 1.15, rotate: 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
