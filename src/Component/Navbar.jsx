import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Logo from "../assets/logo.svg.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-[#eff0f4] backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <motion.img
            src={Logo}
            alt="Logo"
            className="h-8 w-8 rounded-full object-contain border border-blue-500 group-hover:rotate-12 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          />
          <span className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
            Anshu.dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`text-sm font-semibold tracking-wide transition-all ${
                  location.pathname === path
                    ? "text-blue-600"
                    : "text-black hover:text-black"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-6 pb-4 bg-[#eff0f4] space-y-3"
        >
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium ${
                  location.pathname === path
                    ? "text-blue-600 font-semibold"
                    : "text-black hover:text-black"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  )
}

export default Navbar
