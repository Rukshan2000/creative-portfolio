import React from 'react';
import TopNav from '../components/TopNav';
import About from '../components/About';

const HomePage = () => {
    return (
        <div className="h-screen font-mono text-green-500 bg-black">
            {/* Set the page title */}
            <h3>C:\Users\rukshan\about</h3>
            {/* Include the top navigation component */}
            <TopNav />
            {/* Include the About component */}
            <About />
        </div>
    );
};

export default HomePage;