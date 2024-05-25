import React, { useState, useEffect } from 'react';
import SubNav from '../components/SubNav';
import SubNavSm from '../components/SubNavSm';
import ErrorNotice from '../components/ErrorNotice';

import Button from '../components/Button';
import Tts from '../Tools/Tts';
import Footer from '../components/Footer';
import Downloader from '../Tools/Downloader';

const CompilerPage = () => {
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
      {/* Include the Compiler component */}
      <Downloader />
      <ErrorNotice/>
      {/* Set the footer at the bottom */}
      <Footer />
      < Button/>

    </div>
  );
};

export default CompilerPage;
