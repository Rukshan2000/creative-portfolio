import React, { useState } from 'react';
import { AiOutlineRobot } from 'react-icons/ai'; // Import Gemini AI icon from react-icons library

const Aichat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handlePopupClose = () => {
    setIsOpen(false);
  };

  const sendMessageToGeminiAI = async () => {
    // Make an API call to the Gemini AI endpoint
    try {
      const response = await fetch('YOUR_GEMINI_AI_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any required headers here
        },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      // Assuming the API returns the response message in JSON format
      setResponseMessage(data.response);
    } catch (error) {
      console.error('Error sending message to Gemini AI:', error);
    }
  };

  const handleMessageChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessageToGeminiAI();
  };

  return (
    <div className="fixed bottom-40 right-8">
      <button onClick={handleClick} className="flex items-center justify-center w-16 h-16 text-white rounded-full shadow-lg hover:bg-purple-700 focus:outline-none" style={{ backgroundImage: 'linear-gradient(to right, #8A2BE2, #4B0082)' }}>
        <AiOutlineRobot className="w-8 h-8" /> {/* Replace with Gemini AI icon */}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="relative w-full bg-white rounded-lg shadow-lg sm:w-80 md:w-96">
            <div className="flex items-center justify-between p-2 bg-gray-200 border-b border-gray-300 rounded-t-lg">
              <div className="flex items-center space-x-2">
                <AiOutlineRobot className="w-8 h-8" /> {/* Replace with Gemini AI icon */}
                <span className="text-lg font-semibold">RUKSHAN THARINDU</span>
              </div>
              <button onClick={handlePopupClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-grow p-4">
              <div className="h-48 mb-4 overflow-auto md:h-64">
                <div className="flex flex-col space-y-2">
                  <div className="p-2 bg-gray-200 rounded-lg">
                    <p className="text-sm break-words">Hi, </p>
                  </div>
                  <div className="p-2 bg-gray-200 rounded-lg">
                    <p className="text-sm">I'm Rukshan Tharindu</p>
                  </div>
                  <div className="p-2 bg-gray-200 rounded-lg">
                    <p className="text-sm">How can I help you?</p>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={userMessage}
                  onChange={handleMessageChange}
                />
                <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Send
                </button>
              </form>
              <div className="mt-4">
                {responseMessage && <p>{responseMessage}</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Aichat;
