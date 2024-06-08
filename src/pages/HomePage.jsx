import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TopNav from '../components/TopNav';
import TopNavSm from '../components/TopNavSm';
import LandingPage from '../components/LandingPage';
import About from '../components/About';
import Projects from '../components/Projects';
import Button from '../components/Button';
// import Aichat from '../Tools/Aichat';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768); // Adjust breakpoint as needed
  const [showTopNav, setShowTopNav] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768); // Adjust breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Set a delay of 500 milliseconds before showing the TopNav
    const topNavTimeout = setTimeout(() => {
      setShowTopNav(true);
    }, 500);

    // Set a delay of 1000 milliseconds (1 second) before showing the LandingPage
    const landingPageTimeout = setTimeout(() => {
      setShowLandingPage(true);
    }, 1000);

    // Clear the timeouts to prevent memory leaks
    return () => {
      clearTimeout(topNavTimeout);
      clearTimeout(landingPageTimeout);
    };
  }, []);

  return (
    <div className="bg-white">
      {showTopNav && (isLargeScreen ? 
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <TopNav />
        </motion.div> 
        : 
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <TopNavSm />
        </motion.div>
      )}
      <section id="landing">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: showLandingPage ? 1 : 0 }} transition={{ duration: 1 }}>
          <LandingPage />
        </motion.div>
      </section>
      <section id="about">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <About />
        </motion.div>
      </section>
      <section id="projects">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <Projects />
        </motion.div>
      </section>
      <section id="contact">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Contact />
        </motion.div>
      </section>
      {/* <Aichat/> */}
      <Footer />
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 2 }}>
        <Button />
      </motion.div>
    </div>
  );
};

export default HomePage;
