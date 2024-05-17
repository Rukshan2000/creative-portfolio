import React, { useState, useEffect } from 'react';
import projectImage from "../assest/project.jpg";

const Projects = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [gradientClass, setGradientClass] = useState('');

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

    // Sample data for projects
    const projects = [
        {
            id: 1,
            title: "Project 1",
            image: projectImage,
            description: "Description of project 1."
        },
        {
            id: 2,
            title: "Project 2",
            image: projectImage,
            description: "Description of project 2."
        },
        {
            id: 3,
            title: "Project 3",
            image: projectImage,
            description: "Description of project 3."
        },
        {
            id: 4,
            title: "Project 4",
            image: projectImage,
            description: "Description of project 4."
        }
    ];

    return (
        <div className={` ${gradientClass} from-blue-200 via-white to-white`}>
            <h2 className="mb-8 text-3xl font-bold text-center">My Projects</h2>
            <div className={`justify-center items-center grid grid-cols-1 gap-8 ml-0 md:grid-cols-2 lg:grid-cols-4 ${gradientClass} from-blue-200 via-white to-white sm:grid-cols-1 md:grid-cols-2`}>
                {projects.map(project => (
                    <div key={project.id} className="w-[320px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-self-center">
                        <a href="#">
                            <img className="rounded-t-lg" src={project.image} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
