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
    <div className={`grid items-center justify-center min-h-screen px-8 pt-16 ${gradientClass} from-blue-200 via-white to-white sm:grid-cols-1 md:grid-cols-2`}>
      <motion.div
        className="mb-12 text-center md:text-left md:ml-16"
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
        className="flex justify-center"
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
