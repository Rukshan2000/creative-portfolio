import React, { useState } from 'react';
import chatIcon from "../assest/chat.png";

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = (message) => {
    // Here you can implement sending the message via API (e.g., WhatsApp)
    const phoneNumber = '+94779054385';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8">
      <button onClick={handleClick} className="px-4 py-2 text-white sm:bottom-4 sm:right-4 md:px-6 md:py-3 lg:px-8 lg:py-4">
        <img src={chatIcon} alt="Chat Icon" style={{ width: '50px', height: '50px' }} />
      </button>
      {isOpen && (
        <div className="fixed p-4 bg-white rounded-lg shadow-lg bottom-20 right-8 sm:right-4 md:right-8 lg:right-12">
          <input type="text" placeholder="Enter your message..." className="p-2 mr-2 border border-gray-300 rounded-lg" />
          <button onClick={() => sendMessage('Your message here')} className="px-4 py-2 text-white bg-blue-500 rounded-lg">Send</button>
        </div>
      )}
    </div>
  );
};

export default Button;
