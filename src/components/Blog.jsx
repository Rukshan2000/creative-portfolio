import React, { useState, useEffect } from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [gradientClass, setGradientClass] = useState('');

  useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth < 768) {
              setGradientClass("bg-gradient-to-t");
              setIsSmallScreen(true);
          } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
              setGradientClass("bg-gradient-to-r");
              setIsSmallScreen(false);
          } else {
              setGradientClass("bg-gradient-to-r");
              setIsSmallScreen(false);
          }
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., send form data to backend
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className={`grid grid-cols-1 gap-8 p-8 md:grid-cols-2 ${gradientClass} from-blue-200 via-white to-white sm:grid-cols-1 md:grid-cols-2`}>
      {/* Contact Form */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600">Send</button>
        </form>
      </div>
      {/* Social Media Icons */}
      <div className={`w-full md:w-auto ${isSmallScreen ? 'md:col-span-2' : ''}`}>
        <iframe
          title="Google Map"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506905.6207767065!2d79.76528156409464!3d6.985686996901698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae255404ea6c4fb%3A0x986156692b840cbc!2sP.G.Samarawickrama!5e0!3m2!1sen!2slk!4v1715907463278!5m2!1sen!2slk`}
          allowFullScreen
        ></iframe>
      </div>
      {/* Google Map */}

    </div>
  );
};

export default ContactMe;
