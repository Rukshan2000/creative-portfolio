import React, { useState, useEffect } from 'react';
import { toolsData } from '../data/ToolsData'; // Import the toolsData array

const Tools = () => {
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

    return (
        <div className={`relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 ${gradientClass}`}>
            <div className="grid items-center justify-center grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {toolsData.map(tool => (
                    <div key={tool.ToolId} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 underline dark:text-gray-200">{tool.title}</h3>
                        </a>
                        <p className="mb-1 text-xl font-bold text-white dark:text-white">{tool.topic}</p> {/* Increased size and color of topic */}
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{tool.description}</p>
                        <div className="flex items-center">
                            {tool.icon && <tool.icon className={`w-6 h-6 mr-2 ${tool.hoverColor}`} />}
                            <a href={tool.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Use Tool
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

export default Tools;
