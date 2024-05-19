import React, { useState } from 'react';
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
    <nav className="relative sticky top-0 z-10 p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between">
        <span className="text-lg cursor-pointer font-Poppins">
          <span className="font-bold text-indigo-600 font-Poppins">Rukshan</span>{' '}
          <span className="font-bold text-orange-300 font-Poppins">Tharindu</span>
        </span>

        <span className="block mx-2 text-3xl cursor-pointer md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <svg className="h-8 text-indigo-500 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </span>
      </div>

      <ul className={`md:flex md:items-center md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-10 transition-all duration-500 ease-in-out ${isOpen ? 'top-16 opacity-100 visible' : 'top-full opacity-0 invisible'} justify-center`}>
        <li>
          <RouterLink to="/homepage" className="mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0 hover:underline">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/homepage" className="mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0 hover:underline">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/homepage" className="mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0 hover:underline">Projects</RouterLink>
        </li>
        <li className="mx-4 my-6">
          <span onClick={toggleDropdown} className="text-lg font-bold text-indigo-600 duration-500 cursor-pointer hover:text-orange-300 font-Poppins md:my-0 hover:underline">Others ▼</span>
          <ul className={`absolute top-full left-0 bg-white shadow-md p-2 rounded-md mt-1 w-36 ${isDropdownOpen ? 'block' : 'hidden'}`}>
            <li className="py-1">
              <RouterLink to="/blogpage" className="text-gray-700 hover:text-indigo-600">Blog</RouterLink>
            </li>
            <li className="py-1">
              <RouterLink to="/toolspage" className="text-gray-700 hover:text-indigo-600">Tools</RouterLink>
            </li>
          </ul>
        </li>
        <li>
          <RouterLink to="/homepage" className="mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0 hover:underline">Contact</RouterLink>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
