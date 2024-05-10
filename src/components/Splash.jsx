import React, { useState, useEffect } from 'react';

const Splash = () => {
  const [frame, setFrame] = useState(0);
  const [loadingText, setLoadingText] = useState('Loading');

  const frames = [
    '⣾⠀',
    '⣷⠀',
    '⣯⠀',
    '⣟⠀',
    '⡿⠀',
    '⢿⠀',
    '⣾⠀',
    '⣷⠀',
    '⣯⠀',
    '⣟⠀',
    '⡿⠀',
    '⢿⠀',
    '⣾⠀',
    '⣷⠀',
    '⣯⠀',
    '⣟⠀',
    '⡿⠀',
    '⢿⠀',
    '⣾⠀',
    '⣷⠀',
    '⣯⠀',
    '⣟⠀',
    '⡿⠀',
    '⢿⠀',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prevFrame) => (prevFrame === frames.length - 1 ? 0 : prevFrame + 1));
    }, 100);

    // Create blinking dots effect for loading text
    const dotsInterval = setInterval(() => {
      setLoadingText((prevText) => (prevText === 'Loading...' ? 'Loading' : prevText + '.'));
    }, 500);

    // Redirect to homepage after 3 seconds
    const redirectTimeout = setTimeout(() => {
      window.location.href = '/homepage'; // Change '/homepage' to the actual URL of your homepage
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(dotsInterval);
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen font-mono text-green-500 bg-black">
      <div className="text-6xl">{frames[frame]}</div>
      <div className="mt-4">{loadingText}</div>
    </div>
  );
};

export default Splash;
