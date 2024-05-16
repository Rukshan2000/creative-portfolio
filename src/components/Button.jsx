import React, { useState } from 'react';
import chatIcon from "../assest/chat.png";

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handlePopupClose = () => {
    setIsOpen(false); // Set isOpen state to false to close the popup
  };

  const sendMessage = () => {
    // Here you can implement sending the message via API (e.g., WhatsApp)
    const phoneNumber = '+94779054385';
    const encodedMessage = encodeURIComponent(userMessage); // Use the userMessage state
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  const handleMessageChange = (event) => {
    setUserMessage(event.target.value);
  };

  return (
    <div className="fixed bottom-8 right-8">
      <button onClick={handleClick} className="px-4 py-2 text-white sm:bottom-4 sm:right-4 md:px-6 md:py-3 lg:px-8 lg:py-4">
        <img src={chatIcon} alt="Chat Icon" style={{ width: '50px', height: '50px' }} />
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg sm:w-80 md:w-96">
            <div className="flex items-center justify-between p-2 bg-gray-200 border-b border-gray-300 rounded-t-lg">
              <div className="flex items-center space-x-2">
                <img src={chatIcon} alt="Chat Icon" className="w-8 h-8" />
                <span className="text-lg font-semibold">RUKSHAN THARINDU</span>
              </div>
              <button onClick={handlePopupClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-grow p-4">
              <div className="h-64 mb-4 overflow-auto">
                {/* Message History Goes Here */}
              </div>
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={userMessage}
                onChange={handleMessageChange}
              />
              <button onClick={sendMessage} className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Send
              </button>
            </div>
            <button onClick={handlePopupClose} className="absolute text-gray-500 top-2 right-2 hover:text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
