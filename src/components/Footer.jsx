import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse">
                        <span className="text-2xl font-bold text-indigo-600 font-Poppins">Rukshan</span>{' '}
          <span className="text-2xl font-bold text-orange-300 font-Poppins">Tharindu</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-500 hover:text-blue-600"><FaTwitter /></a>
                        <a href="#" className="text-blue-500 hover:text-blue-600"><FaLinkedin /></a>
                        <a href="#" className="text-blue-500 hover:text-blue-600"><FaGithub /></a>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Rukshan Tharindu</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
