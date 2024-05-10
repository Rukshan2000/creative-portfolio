import React, { useState, useEffect } from 'react';

const Home = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [displayText, setDisplayText] = useState('');

  // Function to toggle cursor visibility
  const toggleCursor = () => {
    setShowCursor((prev) => !prev);
  };

  // Function to handle key press
  const handleKeyPress = () => {
    // Display lorem ipsum text when any key is pressed
    setDisplayText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
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
      onKeyDown={handleKeyPress} // Listen for key presses
      tabIndex={0} // Ensure the div is focusable
    >
      <p>
        Press any key to start
        <span className={`${showCursor ? 'opacity-0' : 'opacity-100'}`}>|</span>
      </p>
      <div className="mt-4">
        {displayText && <p>{displayText}</p>}
      </div>
    </div>
  );
};

export default Home;
