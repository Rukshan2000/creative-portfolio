import React, { useState, useEffect } from 'react';
import SubNav from '../components/SubNav';
import SubNavSm from '../components/SubNavSm';
import Blog from '../components/Blog';
import Button from '../components/Button';
import QRCodeGenerator from '../Tools/QRCodeGenerator';
import Footer from '../components/Footer';

const HomePage = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768); // Adjust breakpoint as needed

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

  return (
    <div>
      {/* Set the page title */}
      {/* Include the top navigation component */}
      {isLargeScreen ? <SubNav /> : <SubNavSm />}
      {/* Include the Blog component */}
      <Blog />
      < Button/>

      {/* Include other components as needed */}
      {/* Set the footer at the bottom */}
      <Footer />
    </div>
  );
};

export default HomePage;
