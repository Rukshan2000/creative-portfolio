import React, { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import logo from "../assest/MyPhoto.jpg";
import { MdDeveloperBoard } from 'react-icons/md';


const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (path) => {
    window.location.href = path;
  };

  const handleButtonClick = (path) => {
    // Navigate to the specified path
    navigateTo(path);
  };

  const handleLogout = () => {
    // Redirect to the logout page
    navigateTo('/splashpage');
  };

  return (
    <nav className="relative sticky top-0 z-10 p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between">
        <span className="text-lg text-xl cursor-pointer font-Poppins md:text-2xl lg:text-3xl">
          <span className="font-bold text-indigo-600 font-Poppins">Rukshan</span>{' '}
          <span className="font-bold text-orange-300 font-Poppins">Tharindu</span>
        </span>

        <span className="block mx-2 text-3xl cursor-pointer md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </span>
      </div>

      <ul className={`md:flex md:items-center md:static absolute bg-white w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${isOpen ? 'top-16 opacity-100' : 'top-full opacity-0'} justify-center`}>
        <li className="mx-4 my-6 md:my-0">
          <button className="text-2xl font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins" onClick={() => handleButtonClick("/homepage")}>
            Home
          </button>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <button className="text-2xl font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins" onClick={() => handleButtonClick("/about")}>
            About
          </button>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <button className="text-2xl font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins" onClick={() => handleButtonClick("/projects")}>
            Projects
          </button>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <button className="text-2xl font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins" onClick={() => handleButtonClick("/blog")}>
            Blog
          </button>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <button className="text-2xl font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins" onClick={() => handleButtonClick("/resume")}>
            Contact
          </button>
        </li>

      </ul>
    </nav>
  );
};

export default TopNav;
