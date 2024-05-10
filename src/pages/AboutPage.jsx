import React from 'react';
import TopNav from '../components/TopNav';
import About from '../components/About';


const HomePage = () => {
    return (
        <div className="h-screen bg-black">
            <TopNav />
            <About />
        </div>
    );
};

export default HomePage;
