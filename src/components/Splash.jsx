import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Splash = () => {
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      const homepageSection = document.getElementById('homepage');
      if (homepageSection) {
        homepageSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/homepage'; // Change '/homepage' to the desired URL
      }
    }, 3000); // 3 seconds

    return () => clearTimeout(redirectTimeout);
  }, []);

  const lightsControls = useAnimation();

  useEffect(() => {
    const animateLights = async () => {
      await lightsControls.start({
        opacity: [0, 1, 0],
        scale: [1, 1.2, 1],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      });
    };
    animateLights();
  }, [lightsControls]);

  return (
    <motion.div
      className="flex items-center justify-center h-screen"
      style={{ 
        background: "linear-gradient(45deg, #f5f5f5, #d5ecf5)",
        backgroundSize: "400% 400%", // Increase the size for smoother animation
        animation: "gradientAnimation 2s ease infinite" // Animation for gradient transition
      }}
    >
      <div className="text-center">
        <div className="relative">
          <div className="w-24 h-24 border-t-8 border-b-8 border-gray-200 rounded-full"></div>
          <motion.div
            className="absolute top-0 left-0 w-24 h-24 border-t-8 border-b-8 border-blue-500 rounded-full"
            animate={{ rotate: 360 }} // Continuous rotation
            transition={{ duration: 2, loop: Infinity, ease: "linear" }} // Rotation settings
          ></motion.div>
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{ opacity: 0.5, zIndex: 1 }}
            animate={lightsControls}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="5" fill="#000000" /> {/* Change fill to black */}
              {/* Add more circles or shapes to represent the galaxy lights */}
            </svg>
          </motion.div>
        </div>
        <motion.div
          className="mt-4 font-semibold text-gray-800"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }} // Animate scale and opacity
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} // Transition settings
        >
          Loading
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Splash;
