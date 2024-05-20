import React, { useState, useEffect } from "react";

const About = () => {
  const [gradientClass, setGradientClass] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [clickedButton, setClickedButton] = useState("");

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

  const handleButtonClick = (buttonName) => {
    setShowPopup(true);
    setClickedButton(buttonName);
  };

  const handleClosePopup = () => {
    // Hide the popup by updating the state
    setShowPopup(false);
    // Clear the clickedButton state
    setClickedButton("");
  };
  
  

  return (
    <div className={`grid grid-cols-1 gap-5 p-9 md:grid-cols-2 ${gradientClass} from-blue-200 via-white to-white sm:grid-cols-1 md:grid-cols-2`}>
      <div>
        <h2 className="mb-4 text-3xl font-bold">About Me</h2>
        <p className={`text-xl text-justify ${isSmallScreen ? '' : 'mr-20'}`}>
        My name is Rukshan Tharindu, and I am a passionate full-stack developer with a keen focus on front-end development. Choosing programming as my career path has been a deeply rewarding journey, driven by my fascination with crafting intuitive and visually appealing user experiences. With a firm grasp of both front-end technologies and back-end frameworks, I bring a holistic approach to my projects, ensuring seamless integration and optimal performance. 
        </p>
        <p className={`mt-4 text-xl  text-justify ${isSmallScreen ? '' : 'mr-20'}`}>
        I thrive in dynamic environments where innovation and creativity flourish, and I am eager to contribute my expertise as a freelancer or join a team as a dedicated employee. Your consideration is greatly appreciated, and I look forward to the opportunity to collaborate on exciting ventures ahead.
        </p>
      </div>



      <div className="flex flex-wrap gap-4 mt-10 ml-0">


      <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("HTML is a markup language used for structuring and presenting content on the web.")}>
          <h3 className="text-lg font-semibold">HTML</h3>
        </button>
        <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("CSS is a styling language used to control the presentation and layout of HTML elements on a webpage.")}>
          <h3 className="text-lg font-semibold">CSS</h3>
        </button>
        <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("Tailwind CSS is a utility-first CSS framework that allows for rapid development by providing pre-defined utility classes for styling.")}>
          <h3 className="text-lg font-semibold">TAILWIND CSS</h3>
        </button>
        <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("JavaScript is a programming language commonly used for creating interactive and dynamic elements on webpages.")}>
          <h3 className="text-lg font-semibold">JAVASCRIPT</h3>
        </button>
        <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("Node.js is a JavaScript runtime environment that allows developers to run JavaScript code server-side, enabling the development of scalable and efficient web applications.")}>
          <h3 className="text-lg font-semibold">NODE JS</h3>
        </button>
        <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("React is a JavaScript library for building user interfaces, known for its component-based architecture and virtual DOM rendering.")}>
          <h3 className="text-lg font-semibold">REACT</h3>
        </button>
        <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("ASP.NET is a web framework developed by Microsoft for building dynamic web applications and services using .NET programming languages like C#.")}>
          <h3 className="text-lg font-semibold">ASP .NET</h3>
        </button>
        <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("GitHub is a web-based platform for version control using Git, facilitating collaboration among developers for managing and sharing code repositories.")}>
          <h3 className="text-lg font-semibold">GITHUB</h3>
        </button>
        <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("Firebase is a mobile and web application development platform by Google, providing services like authentication, real-time database, hosting, and more, to help developers build high-quality apps quickly.")}>
          <h3 className="text-lg font-semibold">FIREBASE</h3>
        </button>
        <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("Kotlin is a modern programming language developed by JetBrains, designed to be concise, expressive, and interoperable with Java, often used for Android app development and backend services.")}>
          <h3 className="text-lg font-semibold">KOTLIN</h3>
        </button>
        <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("Figma is a collaborative interface design tool that enables teams to create, prototype, and collaborate on user interfaces in real-time, offering features like design versioning, commenting, and developer handoff.")}>
          <h3 className="text-lg font-semibold">FIGMA</h3>
        </button>
        <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("MySQL is an open-source relational database management system used for storing and managing structured data in tables.")}>
          <h3 className="text-lg font-semibold">MYSQL</h3>
        </button>
        <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-indigo-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("PHP is a server-side scripting language primarily used for web development to create dynamic web pages and web applications, commonly embedded into HTML code for server-side execution.")}>
          <h3 className="text-lg font-semibold">PHP</h3>
        </button>
      </div>
      
      <div className="mt-8 mb-52">
  <h2 className="mb-4 text-2xl font-bold">My Skills</h2>
  <div className="flex flex-col space-y-2">
    <div className="flex items-center">
      <div className="w-1/4 font-semibold">Frontend:</div>
      <div className="relative flex-grow h-8 bg-blue-100 rounded-lg">
        <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg" style={{ width: '80%' }}></div>
      </div>
    </div>
    <div className="flex items-center">
      <div className="w-1/4 font-semibold">Backend:</div>
      <div className="relative flex-grow h-8 bg-blue-100 rounded-lg">
        <div className="absolute top-0 left-0 h-full bg-green-500 rounded-lg" style={{ width: '60%' }}></div>
      </div>
    </div>
    <div className="flex items-center">
      <div className="w-1/4 font-semibold ">Database:</div>
      <div className="relative flex-grow h-8 bg-blue-100 rounded-lg">
        <div className="absolute top-0 left-0 h-full bg-yellow-500 rounded-lg" style={{ width: '50%' }}></div>
      </div>
    </div>
    <div className="flex items-center">
      <div className="w-1/4 font-semibold">UI/UX:</div>
      <div className="relative flex-grow h-8 bg-blue-100 rounded-lg">
        <div className="absolute top-0 left-0 h-full bg-purple-500 rounded-lg" style={{ width: '90%' }}></div>
      </div>
    </div>
  </div>
</div>






{/* Pop-up message box */}{showPopup && (
  <div id="popup" className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
  <div className="p-6 bg-white rounded-lg" style={{ maxWidth: "500px" }}>
    <p className="text-xl font-semibold">{clickedButton}</p>
    {/* Close button */}
    <button className="mt-4 font-semibold text-blue-500" onClick={handleClosePopup}>
      Close
    </button>
  </div>
</div>
)}



    </div>
  );
};

export default About;