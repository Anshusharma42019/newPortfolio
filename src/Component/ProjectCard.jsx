import React, { memo } from 'react'
import { motion } from 'framer-motion'

const ProjectCard = memo(({ title = "Project Title", description = "Project Description", image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300"
    >
      {image && (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover" 
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">{description}</p>
      </div>
    </motion.div>
  )
})

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard
