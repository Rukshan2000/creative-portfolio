import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaTiktok, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse">
                        <span className="font-bold text-indigo-600 text-1xl font-Poppins">Rukshan</span>{' '}
          <span className="font-bold text-orange-300 text-1xl font-Poppins">Tharindu</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li className='hover:underline me-4 md:me-6'>
                        <RouterLink to="/homepage" spy={true} smooth={true} >Home</RouterLink>
                        </li>
                        <li className='hover:underline me-4 md:me-6'>
                        <Link to="about" spy={true} smooth={true} >About</Link>
                        </li>
                        <li className='hover:underline me-4 md:me-6'>
                        <Link to="projects" spy={true} smooth={true} >Projects</Link>
                        </li>
                        <li className='hover:underline me-4 md:me-6'>
                        <Link to="landing" spy={true} smooth={true} >Others</Link>
                        </li>
                        <li className='hover:underline me-4 md:me-6'>
                        <Link to="contact" spy={true} smooth={true} >Contact</Link>
                        </li>

                        
                    </ul>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/profile.php?id=100087403308106" className="text-blue-500 hover:text-blue-600"><FaFacebook /></a>
                        <a href="https://www.tiktok.com/@rukshan_tharindu?lang=en" className="text-blue-500 hover:text-blue-600"><FaTiktok /></a>
                        <a href="https://www.youtube.com/channel/UC-PkI0Fs8160ypKVr7YQkcw" className="text-blue-500 hover:text-blue-600"><FaYoutube /></a>
                        <a href="https://www.linkedin.com/in/rukshan-tharindu-872a09292/" className="text-blue-500 hover:text-blue-600"><FaLinkedin /></a>
                        <a href="https://github.com/Rukshan2000" className="text-blue-500 hover:text-blue-600"><FaGithub /></a>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Rukshan Tharindu</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
