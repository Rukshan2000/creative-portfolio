import React from 'react';
import SubNav from '../components/SubNav';
import Blog from '../components/Blog';
import Compiler from '../components/Compiler';

import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            {/* Set the page title */}
            {/* Include the top navigation component */}
            <SubNav />
            {/* Include the About component */}
            <Compiler />
            {/* Set the footer at the bottom */}
            <Footer/>
        </div>
    );
};

export default HomePage;
