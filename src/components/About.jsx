import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useTypewriter from './useTypewriter';

const About = () => {
  const [gradientClass, setGradientClass] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [clickedButton, setClickedButton] = useState("");

  const descriptions = {
    "HTML": "HTML is the standard markup language for creating Web pages.",
    "CSS": "CSS is a language that describes the style of an HTML document.",
    "TAILWIND CSS": "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    "JAVASCRIPT": "JavaScript is a programming language that allows you to implement complex features on web pages.",
    "NODE JS": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    "REACT": "React is a JavaScript library for building user interfaces.",
    "ASP .NET": "ASP.NET is an open-source server-side web application framework for web development.",
    "GITHUB": "GitHub is a platform for version control and collaboration.",
    "FIREBASE": "Firebase is a platform developed by Google for creating mobile and web applications.",
    "KOTLIN": "Kotlin is a statically typed programming language for modern multiplatform applications.",
    "FIGMA": "Figma is a web-based UI/UX design tool.",
    "MYSQL": "MySQL is an open-source relational database management system.",
    "PHP": "PHP is a popular general-purpose scripting language that is especially suited to web development."
  };

  const paragraph1 = useTypewriter("Hi! I’m Rukshan Tharindu, a full-stack developer who loves front-end magic. Programming has been an amazing adventure for me, fueled by my passion for creating smooth and beautiful user experiences. I have a solid grip on both front-end and back-end tech, which helps me build well-rounded, high-performing projects. I thrive in creative, fast-paced settings and am excited to bring my skills to your team or projects as a freelancer. Thanks for considering me – can’t wait to work together on something awesome!", 30);

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

  const handleButtonClick = (buttonName) => {
    setShowPopup(true);
    setClickedButton(buttonName);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setClickedButton("");
  };

  return (
    <div className={`grid grid-cols-1 gap-5 p-9 md:grid-cols-2 ${gradientClass} from-blue-200 via-white to-white sm:grid-cols-1 md:grid-cols-2`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="mb-4 text-3xl font-bold">About Me</h2>
        <p className={`text-lg font-semi-bold text-justify ${isSmallScreen ? '' : 'mr-20'}`}>
          {paragraph1}
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-4 mt-10 ml-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {[
          "HTML",
          "CSS",
          "TAILWIND CSS",
          "JAVASCRIPT",
          "NODE JS",
          "REACT",
          "ASP .NET",
          "GITHUB",
          "FIREBASE",
          "KOTLIN",
          "FIGMA",
          "MYSQL",
          "PHP"
        ].map((skill) => (
          <motion.button
            key={skill}
            className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs"
            onClick={() => handleButtonClick(skill)}
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="text-lg font-semibold">{skill}</h3>
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        className="mt-8 mb-52"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="mb-4 text-2xl font-bold">My Skills</h2>
        <div className="flex flex-col space-y-2">
          {[
            { skill: "Frontend", width: "80%", color: "bg-blue-500" },
            { skill: "Backend", width: "60%", color: "bg-green-500" },
            { skill: "Database", width: "50%", color: "bg-yellow-500" },
            { skill: "UI/UX", width: "90%", color: "bg-purple-500" },
          ].map(({ skill, width, color }) => (
            <div className="flex items-center" key={skill}>
              <div className="w-1/4 font-semibold">{skill}:</div>
              <div className="relative flex-grow h-8 bg-blue-100 rounded-lg">
                <motion.div
                  className={`absolute top-0 left-0 h-full ${color} rounded-lg`}
                  style={{ width }}
                  initial={{ width: 0 }}
                  animate={{ width }}
                  transition={{ duration: 1, delay: 1.5 }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {showPopup && (
        <motion.div
          id="popup"
          className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 bg-white rounded-lg" style={{ maxWidth: "500px" }}>
            <p className="text-xl font-semibold">{clickedButton}</p>
            <p className="mt-2">{descriptions[clickedButton]}</p>
            <button className="mt-4 font-semibold text-blue-500" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
