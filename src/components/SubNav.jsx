import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownVariants = {
    open: { opacity: 1, y: 0, display: 'block' },
    closed: { opacity: 0, y: -10, display: 'none' }
  };

  return (
    <motion.nav
      className="relative sticky top-0 z-10 p-5 bg-white shadow md:flex md:items-center md:justify-between"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <span className="text-lg cursor-pointer font-Poppins">
          <span className="font-bold text-indigo-600 font-Poppins">Rukshan</span>{' '}
          <span className="font-bold text-orange-300 font-Poppins">Tharindu</span>
        </span>

        <motion.span
          className="block mx-2 text-3xl cursor-pointer md:hidden"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
        >
          {isOpen ? (
            <svg className="h-8 text-indigo-500 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </motion.span>
      </div>

      <ul
        className={`md:flex md:items-center md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-10 md:opacity-100 ${
          isOpen ? 'top-16 opacity-100' : 'top-full opacity-0'
        } justify-center`}
      >
        <li className="mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0 hover:underline">
          <RouterLink to="/homepage" spy={true} smooth={true} duration={500} onClick={toggleMenu}>
            Home
          </RouterLink>
        </li>
        <li className="mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0 hover:underline">
          <RouterLink to="/homepage" spy={true} smooth={true} duration={500} onClick={toggleMenu}>
            About
          </RouterLink>
        </li>
        <li className="mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0 hover:underline">
          <RouterLink to="/homepage" spy={true} smooth={true} duration={500} onClick={toggleMenu}>
            Projects
          </RouterLink>
        </li>
        <li className="relative mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0 hover:underline">
          <motion.span onClick={toggleDropdown} className="cursor-pointer" whileHover={{ scale: 1.1 }}>
            Others ▼{' '}
          </motion.span>
          <motion.ul
            className="absolute left-0 p-2 mt-1 bg-white rounded-md shadow-md top-full w-36"
            variants={dropdownVariants}
            animate={isDropdownOpen ? 'open' : 'closed'}
          >
            <motion.li className="py-1">
              <RouterLink to="/blogpage" className="text-gray-700 hover:text-indigo-600">
                Blog
              </RouterLink>
            </motion.li>
            <motion.li className="py-1">
              <RouterLink to="/toolspage" className="text-gray-700 hover:text-indigo-600">
                Tools
              </RouterLink>
            </motion.li>
          </motion.ul>
        </li>
        <li className="mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0 hover:underline">
          <RouterLink to="/homepage" spy={true} smooth={true} duration={500} onClick={toggleMenu}>
            Contact
          </RouterLink>
        </li>
      </ul>
    </motion.nav>
  );
};

export default TopNav;
