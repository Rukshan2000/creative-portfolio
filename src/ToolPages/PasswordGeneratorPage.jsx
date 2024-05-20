import React, { useState, useEffect } from 'react';
import SubNav from '../components/SubNav';
import SubNavSm from '../components/SubNavSm';
import Button from '../components/Button';
import PasswordGenerator from '../Tools/PasswordGenerator';
import Footer from '../components/Footer';

const PasswordGeneratorPage = () => {
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
      {/* Include the PasswordGenerator component */}
      <PasswordGenerator />
      {/* Set the footer at the bottom */}
      <Footer />
      < Button/>

    </div>
  );
};

export default PasswordGeneratorPage;
