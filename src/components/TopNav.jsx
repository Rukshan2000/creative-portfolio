import React, { useState } from 'react';
import { Link } from 'react-scroll';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      toggleMenu(); // Close menu after navigation on mobile
    }
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

      <ul className={`md:flex md:items-center md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-10 md:opacity-100 ${isOpen ? 'top-16 opacity-100' : 'top-full opacity-0'} justify-center`}>
      <li className="mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0">
          <Link to="landing" spy={true} smooth={true}>Home</Link>
        </li>
        <li className="mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0">
          <Link to="about" spy={true} smooth={true}>About</Link>
        </li>
        <li className="mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0">
          <Link to="projects" spy={true} smooth={true}>Projects</Link>
        </li>
        <li className="mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0">
          <Link to="blog" spy={true} smooth={true}>Blog</Link>
        </li>
        <li className="mx-4 my-6 text-lg font-bold text-indigo-600 duration-500 hover:text-orange-300 font-Poppins md:my-0">
          <Link to="contact" spy={true} smooth={true}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
