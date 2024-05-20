import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const UnderDevelopment = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="mb-4 text-3xl font-bold">Page Under Development</h2>
            <p className="mb-8 text-lg">Please wait for the page to be completed.</p>
            <Link to="/homepage" className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
                Back to Home
            </Link>
        </div>
    );
};

export default UnderDevelopment;
