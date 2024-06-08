import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Import motion and useAnimation from framer-motion library
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons library

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const control = useAnimation(); // Initialize animation control

  const handleClick = () => {
    setIsOpen(!isOpen);
    // Start continuous rotation animation when isOpen is true
    isOpen ? control.start({ rotate: 0 }) : control.start({ rotate: [0, -10, 10, 0], transition: { duration: 1, loop: Infinity } });
  };

  const handlePopupClose = () => {
    setIsOpen(false);
    control.stop(); // Stop animation when popup is closed
  };

  const sendMessage = () => {
    const phoneNumber = '+94779054385';
    const encodedMessage = encodeURIComponent(userMessage);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  const handleMessageChange = (event) => {
    setUserMessage(event.target.value);
  };

  return (
    <div className="fixed bottom-8 right-8">
      <motion.button
        onClick={handleClick}
        className="flex items-center justify-center w-16 h-16 text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 focus:outline-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={control} // Use animation control
      >
        <FaWhatsapp className="w-8 h-8" />
      </motion.button>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="relative w-full bg-white rounded-lg shadow-lg sm:w-80 md:w-96">
            <div className="flex items-center justify-between p-2 bg-gray-200 border-b border-gray-300 rounded-t-lg">
              <div className="flex items-center space-x-2">
                <FaWhatsapp className="w-8 h-8" />
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
