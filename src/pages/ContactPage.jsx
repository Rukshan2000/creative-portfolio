import React from 'react';
import TopNav from '../components/TopNav';
import Contact from '../components/Contact';
import Footer from '../components/useGradientClass';


const HomePage = () => {
    return (
        <div className="h-screen font-mono text-green-500 bg-black">
            {/* Set the page title */}
            <h3>C:\Users\rukshan\contact</h3>
            {/* Include the top navigation component */}
            <TopNav />
            {/* Include the About component */}
            <Contact />

        </div>
    );
};

export default HomePage;
