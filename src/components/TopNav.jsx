import React, { useState, useEffect } from 'react';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (path) => {
    window.location.href = path;
  };

  useEffect(() => {
    // Update the current date and time every second
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
      const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
      const dateString = now.toDateString();
      setCurrentDateTime(`${timeString} | ${dateString}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="font-mono text-green-500 bg-black">
      <div className="flex items-center justify-between p-4">
        <span className="text-sm">{currentDateTime}</span> {/* Display digital clock and date */}
        <span className="block mx-2 text-3xl cursor-pointer md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </span>
      </div>

      <ul className={`md:flex md:items-center md:static absolute bg-black w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${isOpen ? 'top-80px opacity-100' : 'top-[-400px] opacity-0'} justify-center`}>
        <li className="mx-4 my-6 md:my-0">
          <button onClick={() => navigateTo('/')} className="mr-2 cursor-pointer hover:text-white">Home</button>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <button onClick={() => navigateTo('/aboutpage')} className="mr-2 cursor-pointer hover:text-white">About</button>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <button onClick={() => navigateTo('/contactpage')} className="mr-2 cursor-pointer hover:text-white">Contact</button>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <button onClick={() => navigateTo('/resume')} className="cursor-pointer hover:text-white">Resume</button>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
