import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-mono text-green-500 bg-black">
      <h1 className="mb-4 text-3xl font-bold">Contact Me</h1>
      <div className="mb-4">
        <p className="mb-2">
          <span className="font-bold">Facebook:</span> <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-white">Your Facebook Profile</a>
        </p>
        <p className="mb-2">
          <span className="font-bold">YouTube:</span> <a href="https://www.youtube.com/your-channel" target="_blank" rel="noopener noreferrer" className="hover:text-white">Your YouTube Channel</a>
        </p>
        <p className="mb-2">
          <span className="font-bold">WhatsApp:</span> <a href="https://wa.me/your-phone-number" target="_blank" rel="noopener noreferrer" className="hover:text-white">Your WhatsApp Number</a>
        </p>
        <p className="mb-2">
          <span className="font-bold">LinkedIn:</span> <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-white">Your LinkedIn Profile</a>
        </p>
        <p className="mb-2">
          <span className="font-bold">Email:</span> <a href="mailto:rukshantharindu582@gmail.com" className="hover:text-white">rukshantharindu582@gmail.com</a>
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="w-12 h-12 hover:text-white" />
        </a>
        <a href="https://www.youtube.com/your-channel" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="w-12 h-12 hover:text-white" />
        </a>
        <a href="https://wa.me/your-phone-number" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className="w-12 h-12 hover:text-white" />
        </a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="w-12 h-12 hover:text-white" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
