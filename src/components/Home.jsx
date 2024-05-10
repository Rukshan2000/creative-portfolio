import React, { useState, useEffect } from 'react';

const Home = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [displayArt, setDisplayArt] = useState('');
  const [started, setStarted] = useState(false); // Track if the user has started

  // Function to toggle cursor visibility
  const toggleCursor = () => {
    setShowCursor(prev => !prev);
  };

  // Function to handle start event
  const handleStart = () => {
    // Display ASCII art when starting
    setDisplayArt(`
 ___________________
 | _______________ |
 | |XXXXXXXXXXXXX| |
 | |XXXXXXXXXXXXX| |
 | |XXXXXXXXXXXXX| |
 | |XXXXXXXXXXXXX| |
 | |XXXXXXXXXXXXX| |
 |_________________|
     _[_______]_
 ___[___________]___
|         [_____] []|__
|         [_____] []|  \\__
L___________________J     \\ \\___\\/
 ___________________      /\\
/###################\\    (__)

RUKSHAN THARINDU
Creative Software Developer
`);
    setStarted(true); // Update started state
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
      className="relative flex flex-col items-center justify-center w-screen h-screen p-4 font-mono text-green-500 bg-black"
      onKeyDown={handleStart} // Listen for key presses
      onTouchStart={handleStart} // Listen for touch events
      tabIndex={0} // Ensure the div is focusable
    >
      <div>
        <p>
          Press any key or touch anywhere to start
          <span className={`${showCursor ? 'opacity-0' : 'opacity-100'}`}>|</span>
        </p>
        <div className="mt-4">
          <pre>{displayArt}</pre>
        </div>
      </div>
      {started && ( // Only display the button if started
        <button onClick={handleStart} className="px-4 py-2 mt-4 border border-green-500 rounded-md hover:bg-green-500 hover:text-black">Get Started</button>
      )}
    </div>
  );
};

export default Home;
