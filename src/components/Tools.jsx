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
                    <div key={tool.ToolId}
                        className="relative px-6 pt-10 pb-8 overflow-hidden transition-all duration-300 bg-white shadow-xl cursor-pointer group ring-1 ring-gray-900/5 hover:-translate-y-1 hover:shadow-2xl sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 max-w-md mx-auto">
                            <span className="grid w-20 h-20 transition-all duration-300 rounded-full place-items-center bg-sky-500 group-hover:bg-sky-400">
                                <tool.icon className="w-10 h-10 text-white transition-all" />
                            </span>
                            <div className="pt-5 space-y-6 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p>{tool.description}</p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <a href={tool.link} className={`transition-all duration-300 ${tool.hoverColor} group-hover:text-white`}>Use Tool &rarr;</a>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tools;
