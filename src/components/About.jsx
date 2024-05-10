import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [typedText, setTypedText] = useState('');
  const [projects, setProjects] = useState([]);
  const textToType = `I am Rukshan Tharindu, a skilled full-stack software developer with 6 months of industry experience. As a freelancer, I specialize in crafting robust solutions that bridge the gap between innovative ideas and tangible products. My expertise lies in leveraging a wide array of technologies to deliver efficient and scalable software solutions. With a passion for problem-solving and a commitment to excellence, I thrive in dynamic environments where creativity meets practicality. Let's collaborate to turn your visions into reality.`;
  const typingSpeed = 10; // Adjust typing speed here (milliseconds)

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedText((prevTypedText) => prevTypedText + textToType[currentIndex]);
      currentIndex++;
      if (currentIndex === textToType.length) {
        clearInterval(interval);
        // Set projects after typing animation is complete
        setProjects([
          { name: 'Project 1', link: 'https://github.com/project1' },
          { name: 'Project 2', link: 'https://github.com/project2' },
          { name: 'Project 3', link: 'https://github.com/project3' },
          { name: 'Project 4', link: 'https://github.com/project4' },
          { name: 'Project 5', link: 'https://github.com/project5' },
        ]);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-3xl p-1 pt-16 mx-auto font-mono text-green-500 bg-black"> {/* Adjust max-width here */}
      <p>{typedText}</p>

      {projects.length > 0 && (
        <div className="mt-4">
          <p className="mb-2">Here are my projects:</p>
          {projects.map((project, index) => (
            <div key={index} className="mb-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-white">{project.name}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TypingAnimation;
