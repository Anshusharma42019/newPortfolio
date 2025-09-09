import React from 'react'
import ProjectCard from '../Component/ProjectCard'

const Projects = () => {
  return (
    <div
      className="min-h-full py-10 px-4 sm:px-6 lg:px-16 bg-[#eef0f4] text-[#08090a]"
    >
      <h1 className=" mt-10 text-3xl sm:text-4xl font-bold text-center mb-12">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Weather App"
          description="A weather forecast app using OpenWeatherMap API."
        />
        <ProjectCard
          title="Portfolio Website"
          description="My personal website built with React and Tailwind CSS."
        />
        <ProjectCard
          title="E-Commerce Platform"
          description="An online shopping site with product filters and cart."
        />
        <ProjectCard
          title="Chat App"
          description="Real-time messaging app using Socket.IO and Node.js."
        />
        <ProjectCard
          title="Task Manager"
          description="A full-stack app to manage daily tasks and productivity."
        />
        <ProjectCard
          title="Blog CMS"
          description="A content management system built with MERN stack."
        />
      </div>
    </div>
  )
}

export default Projects
