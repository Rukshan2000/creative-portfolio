import React, { useState, useEffect } from 'react';

const Home = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false); // Track if the user has started

  // Function to toggle cursor visibility
  const toggleCursor = () => {
    setShowCursor((prev) => !prev);
  };

  // Function to handle start event
  const handleStart = () => {
    // Display lorem ipsum text when starting
    setDisplayText('I am Rukshan Tharindu, a skilled full-stack software developer with 6 months of industry experience. As a freelancer, I specialize in crafting robust solutions that bridge the gap between innovative ideas and tangible products. My expertise lies in leveraging a wide array of technologies to deliver efficient and scalable software solutions. With a passion for problem-solving and a commitment to excellence, I thrive in dynamic environments where creativity meets practicality. Lets collaborate to turn your visions into reality.');
    setStarted(true); // Update started state
  };

  // Function to handle click event
  const handleClick = () => {
    // Start the display if it hasn't started yet
    if (!started) {
      handleStart();
    }
  };

  // Use useEffect to toggle cursor every 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      toggleCursor();
    }, 500);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative flex items-start justify-start w-screen h-screen p-4 font-mono text-green-500 bg-black"
      onKeyDown={handleStart} // Listen for key presses
      onTouchStart={handleStart} // Listen for touch events
      onClick={handleClick} // Listen for click events
      tabIndex={0} // Ensure the div is focusable
    >
      {/* Only display the initial message if not started */}
      {!started && (
        <p>
          Press any key or touch anywhere to start
          <span className={`${showCursor ? 'opacity-0' : 'opacity-100'}`}>|</span>
        </p>
      )}
      <div className="mt-4">
        {displayText && <p>{displayText}</p>}
      </div>
    </div>
  );
};

export default Home;
