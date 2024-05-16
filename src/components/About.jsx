import React, { useState, useEffect } from "react";

const About = () => {
  const [gradientClass, setGradientClass] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setGradientClass("bg-gradient-to-t");
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
    <div className={`grid grid-cols-1 gap-5 p-9 md:grid-cols-2 ${gradientClass} from-blue-200 via-white to-white sm:grid-cols-1 md:grid-cols-2`}>
      <div>
        <h2 className="mb-4 text-3xl font-bold">About Me</h2>
        <p className={`text-xl font-semibold text-justify ${isSmallScreen ? '' : 'mr-20'}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar
          libero a justo convallis, vitae varius metus tristique. Nullam
          volutpat, velit a ultrices cursus, nulla magna ultrices purus, et
          semper odio nisi at justo.
        </p>
        <p className={`mt-4 text-xl font-semibold text-justify ${isSmallScreen ? '' : 'mr-20'}`}>
          Quisque et orci a mauris suscipit suscipit. Donec in ex eget leo
          ultricies dignissim in eget ex. Aliquam fermentum tellus nec feugiat
          ultrices. In hac habitasse platea dictumst.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mt-10 ml-0">
      <div className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 hover:text-white ring ring-gradient-to-r from-orange-200 to-orange-400 ring-offset-4 ring-offset-gradient-to-r ring-blur-xs">
      <h3 className="text-lg font-semibold text-center">HTML</h3>
    </div>
    <div className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 hover:text-white ring ring-gradient-to-r from-orange-200 to-orange-400 ring-offset-4 ring-offset-gradient-to-r ring-blur-xs">
          <h3 className="text-lg font-semibold">CSS</h3>
        </div>
        <div className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 hover:text-white ring ring-gradient-to-r from-orange-200 to-orange-400 ring-offset-4 ring-offset-gradient-to-r ring-blur-xs">
          <h3 className="text-lg font-semibold">TAILWIND CSS</h3>
        </div>
        <div className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 hover:text-white ring ring-gradient-to-r from-orange-200 to-orange-400 ring-offset-4 ring-offset-gradient-to-r ring-blur-xs">
          <h3 className="text-lg font-semibold">JAVASCRIPT</h3>
        </div>
        <div className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 hover:text-white ring ring-gradient-to-r from-orange-200 to-orange-400 ring-offset-4 ring-offset-gradient-to-r ring-blur-xs">
          <h3 className="text-lg font-semibold">NODE JS</h3>
        </div>
        <div className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 hover:text-white ring ring-gradient-to-r from-orange-200 to-orange-400 ring-offset-4 ring-offset-gradient-to-r ring-blur-xs">
          <h3 className="text-lg font-semibold">REACT</h3>
        </div>
        <div className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 hover:text-white ring ring-gradient-to-r from-orange-200 to-orange-400 ring-offset-4 ring-offset-gradient-to-r ring-blur-xs">
          <h3 className="text-lg font-semibold">ASP .NET</h3>
        </div>
        <div className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 hover:text-white ring ring-gradient-to-r from-orange-200 to-orange-400 ring-offset-4 ring-offset-gradient-to-r ring-blur-xs">
          <h3 className="text-lg font-semibold">GITHUB</h3>
        </div>
        <div className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 hover:text-white ring ring-gradient-to-r from-orange-200 to-orange-400 ring-offset-4 ring-offset-gradient-to-r ring-blur-xs">
          <h3 className="text-lg font-semibold">FIREBASE</h3>
        </div>
        <div className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 hover:text-white ring ring-gradient-to-r from-orange-200 to-orange-400 ring-offset-4 ring-offset-gradient-to-r ring-blur-xs">
          <h3 className="text-lg font-semibold">KOTLIN</h3>
        </div>
        <div className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 hover:text-white ring ring-gradient-to-r from-orange-200 to-orange-400 ring-offset-4 ring-offset-gradient-to-r ring-blur-xs">
          <h3 className="text-lg font-semibold">FIGMA</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
