import React from 'react';
import TopNav from '../components/TopNav';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            {/* Set the page title */}
            {/* Include the top navigation component */}
            <TopNav />
            {/* Include the About component */}
            <Blog />
            {/* Set the footer at the bottom */}
            <Footer/>
        </div>
    );
};

export default HomePage;
