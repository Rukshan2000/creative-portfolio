import React, { useState, useEffect } from 'react';
import { projectData } from '../data/ProjectData';
import { motion, useAnimation } from 'framer-motion';

const Projects = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [gradientClass, setGradientClass] = useState('');
    const controls = useAnimation();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setGradientClass("bg-gradient-to-b");
                setIsSmallScreen(true);
            } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                setGradientClass("bg-gradient-to-r");
                setIsSmallScreen(false);
            } else {
                setGradientClass("bg-gradient-to-r");
                setIsSmallScreen(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        controls.start({ opacity: 1, y: 0 });
    }, [controls]);

    return (
        <div className={` ${gradientClass} from-blue-200 via-white to-white`}>
            <h2 className="mb-8 text-3xl font-bold text-center">My Projects</h2>
            <div className={`justify-center items-center grid grid-cols-1 gap-8 ml-0 md:grid-cols-2 lg:grid-cols-4 ${gradientClass} from-blue-200 via-white to-white sm:grid-cols-1 md:grid-cols-2`}>
                {projectData.slice(0, isSmallScreen ? 2 : projectData.length).map((project, index) => (
                    <motion.div
                        key={project.ProjectId}
                        className="w-[320px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-self-center"
                        initial={{ opacity: 0, y: 20 }} // Adjust initial opacity and y position
                        animate={controls}
                        transition={{ duration: 0.5, delay: index * 0.1 }} // Adjust delay for staggered animation
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }} // Animation on hover
                    >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img className="rounded-t-lg" src={project.image} alt={project.title} />
                        </a>
                        <div className="p-5">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                View Project
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* "View All" button */}
            <div className="flex justify-center mt-8">
                <a href="/underdevelopmentpage" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View All Projects
                </a>
            </div>
        </div>
    );
};

export default Projects;
