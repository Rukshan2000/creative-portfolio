import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function App() {
  // State to store user's code
  const [userCode, setUserCode] = useState('');
  // State to store compiled output
  const [compiledOutput, setCompiledOutput] = useState('');
  // State to store compilation error
  const [compileError, setCompileError] = useState(null);

  // Function to handle user's code input
  const handleCodeChange = (e) => {
    setUserCode(e.target.value);
  };

  // Function to compile user's code
  const compileCode = () => {
    try {
      // Attempt to compile user's code
      const compiledCode = userCode;
      // Update compiled output
      setCompiledOutput(compiledCode);
      // Clear any previous compilation errors
      setCompileError(null);
    } catch (error) {
      // If an error occurs during compilation, display the error message
      setCompileError(error.message);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      {/* Code Input */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <h1 className="mb-4 text-2xl font-bold">Code Compiler..</h1>
          <textarea
            className="w-full p-2 pr-10 mb-4 border rounded-md shadow-md resize-none"
            rows="15"
            placeholder="Enter your HTML, CSS, and JavaScript code here..."
            value={userCode}
            onChange={handleCodeChange}
            style={{ fontFamily: 'monospace', fontSize: '16px' }}
          ></textarea>
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            onClick={compileCode}
          >
            Compile
          </button>
        </div>
        {/* Compiled Output */}
        <div>
          <h1 className="mb-4 text-2xl font-bold">Out put</h1>
          {compileError ? (
            <div className="p-2 text-red-700 bg-red-100 border border-red-500 rounded-md">{compileError}</div>
          ) : (
            <iframe
              title="Compiled Output"
              className="w-full border rounded-md shadow-md h-96"
              srcDoc={compiledOutput}
            ></iframe>
          )}
        </div>
      </div>
      {/* Study Material */}
      <div className="mt-8">
        <h1 className="mb-4 text-2xl font-bold">Study Material</h1>
        <div className="p-4 bg-gray-100 rounded-md shadow-md">
          {/* Your study material content */}
        </div>
      </div>
    </div>
  );
}

export default App;
