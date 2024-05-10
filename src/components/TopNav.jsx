import React from 'react';

const TopNav = () => {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-xl font-bold text-white">ASCII Navigation</div>
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4">
                <button onClick={() => handleNavigation('/')} className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Home</button>
                <button onClick={() => handleNavigation('/about')} className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">About</button>
                <button onClick={() => handleNavigation('/contact')} className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Contact</button>
                <button onClick={() => handleNavigation('/resume')} className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
