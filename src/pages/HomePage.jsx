import React, { useState, useEffect } from 'react';
import TopNav from '../components/TopNav';
import LandingPage from '../components/LandingPage';
import About from '../components/About';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import { Link } from 'react-scroll';
import Button from '../components/Button';
import Footer from '../components/Footer';

const HomePage = () => {
    const [showTopNav, setShowTopNav] = useState(false);
    const [showLandingPage, setShowLandingPage] = useState(false);

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
            {showTopNav && <TopNav />}
            <section id="landing" style={{ opacity: showLandingPage ? 1 : 0, transition: 'opacity 1s' }}>
                <LandingPage />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
  
            <section id="contact">
                <Contact />
            </section>
            <Button/>
            <Footer/>
        </div>
    );
};

export default HomePage;
