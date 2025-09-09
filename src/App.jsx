import React, { Suspense } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"

// Lazy load components
const Home = React.lazy(() => import("./Page/Home"))
const About = React.lazy(() => import("./Page/About"))
const Projects = React.lazy(() => import("./Page/Projects"))
const Contact = React.lazy(() => import("./Page/Contact"))
const Blog = React.lazy(() => import("./Page/Blog"))

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
)

const App = () => {
  const location = useLocation()

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
