import React, { useEffect } from 'react';

const Splash = () => {
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      const homepageSection = document.getElementById('homepage');
      if (homepageSection) {
        homepageSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/homepage'; // Change '/homepage' to the desired URL
      }
    }, 3000); // 3 seconds

    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        <div className="relative">
          <div className="w-24 h-24 border-t-8 border-b-8 border-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-24 h-24 border-t-8 border-b-8 border-blue-500 rounded-full animate-spin">
          </div>
        </div>
        <div className="mt-4 font-semibold text-gray-700">Loading</div>
      </div>
    </div>
  );
};

export default Splash;
