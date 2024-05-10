import React, { useState, useEffect } from 'react';

const Home = () => {
  const [showCursor, setShowCursor] = useState(true);

  // Function to toggle cursor visibility
  const toggleCursor = () => {
    setShowCursor((prev) => !prev);
  };

  // Use useEffect to toggle cursor every 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      toggleCursor();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen bg-black text-green-500 font-mono flex justify-start items-start p-4 relative">
      <p>
        Press enter to start
        <span className={`${showCursor ? 'opacity-0' : 'opacity-100'}`}>|</span>
      </p>
    </div>
  );
};

export default Home;
