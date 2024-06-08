import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assest/MyPhoto.jpg";

const LandingPage = () => {
  const [imageStyle, setImageStyle] = useState({});
  const [gradientClass, setGradientClass] = useState("");

  const handleHireMeClick = () => {
    window.location.href = 'https://drive.usercontent.google.com/u/0/uc?id=1rROILn2ekw_rIG6tolKNtMtBQMHB7-Ct&export=download';
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImageStyle({
          width: "350px",
          height: "350px",
          maxWidth: "700px",
          maxHeight: "700px"
        });
        setGradientClass("bg-gradient-to-b");
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setImageStyle({
          width: "550px",
          height: "550px",
          maxWidth: "700px",
          maxHeight: "700px"
        });
        setGradientClass("bg-gradient-to-r");
      } else {
        setImageStyle({
          width: "650px",
          height: "650px",
          maxWidth: "700px",
          maxHeight: "700px"
        });
        setGradientClass("bg-gradient-to-r");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`relative grid items-center justify-center min-h-screen px-8 pt-16 sm:grid-cols-1 md:grid-cols-2`}>
      {/* Added decorative background elements */}
      <div className="absolute inset-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 z-0">
          <path fill="#F3F4F6" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,208C672,192,768,160,864,170.7C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 z-0">
          <path fill="#E5E7EB" fillOpacity="1" d="M0,96L40,117.3C80,139,160,181,240,202.7C320,224,400,224,480,208C560,192,640,160,720,128C800,96,880,64,960,80C1040,96,1120,160,1200,186.7C1280,213,1360,203,1400,197.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
      <motion.div
        className="z-10 mb-12 text-center md:text-left md:ml-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-black text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-orange-300 bg-clip-text"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, loop: Infinity }}
        >
          Hi, I am Rukshan Tharindu
        </motion.h1>
        <h3 className="mt-2 text-2xl text-gray-600">I sculpt digital worlds, a full-stack artisan.</h3>
        <motion.button
          onClick={handleHireMeClick}
          className="px-6 py-3 mt-8 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Download CV
        </motion.button>
      </motion.div>
      <motion.div
        className="z-10 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          className="max-w-xs transition-transform duration-300 transform sm:w-full hover:translate-x-2 hover:translate-y-1 hover:scale-96"
          src={logo}
          alt="Portfolio"
          style={imageStyle}
        />
      </motion.div>
    </div>
  );
};

export default LandingPage;
