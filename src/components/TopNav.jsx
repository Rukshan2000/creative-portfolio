import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative sticky top-0 z-10 p-5 bg-white shadow md:flex md:items-center md:justify-between"
    >
      <div className="flex items-center justify-between">
        <span className="text-lg cursor-pointer font-Poppins">
          <span className="font-bold text-indigo-600 font-Poppins">Rukshan</span>{' '}
          <span className="font-bold text-orange-300 font-Poppins">Tharindu</span>
        </span>

        <span className="block mx-2 text-3xl cursor-pointer md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <motion.svg
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="h-8 text-indigo-500 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </motion.svg>
          )}
        </span>
      </div>

      <motion.ul
        className={`md:flex md:items-center md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-10 md:opacity-100 ${
          isOpen ? 'top-16 opacity-100' : 'top-full opacity-0'
        } justify-center`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <li className="mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0 hover:underline">
          <Link to="landing" spy={true} smooth={true} duration={500} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li className="mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0 hover:underline">
          <Link to="about" spy={true} smooth={true} duration={500} onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li className="mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0 hover:underline">
          <Link to="projects" spy={true} smooth={true} duration={500} onClick={toggleMenu}>
            Projects
          </Link>
        </li>
        <li className="relative mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0 hover:underline">
          <motion.span
            onClick={toggleDropdown}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            Others ▼{' '}
          </motion.span>
          <motion.ul
            className={`absolute top-full left-0 bg-white shadow-md p-2 rounded-md mt-1 w-36 ${isDropdownOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isDropdownOpen ? 1 : 0, y: isDropdownOpen ? 0 : -20 }}
            transition={{ duration: 0.2 }}
          >
            <li className="py-1">
              <RouterLink to="/blogpage" className="text-gray-700 hover:text-indigo-600">
                Blog
              </RouterLink>
            </li>
            <li className="py-1">
              <RouterLink to="/toolspage" className="text-gray-700 hover:text-indigo-600">
                Tools
              </RouterLink>
            </li>
          </motion.ul>
        </li>
        <li className="mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0 hover:underline">
          <Link to="contact" spy={true} smooth={true} duration={500} onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </motion.ul>
    </motion.nav>
  );
};

export default TopNav;
