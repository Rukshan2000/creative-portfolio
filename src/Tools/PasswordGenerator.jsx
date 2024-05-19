import React, { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa'; // Import copy icon

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '#$&';

    let chars = '';
    if (includeUpperCase) chars += uppercaseChars;
    if (includeLowerCase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSpecialChars) chars += specialChars;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="max-w-md p-8 mx-auto mt-16 bg-white rounded-lg shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Random Password Generator</h2>
      <div className="mb-6">
        <label htmlFor="length" className="block mb-2 font-medium text-gray-700">Password Length:</label>
        <input
          type="number"
          id="length"
          min="1"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="uppercase"
            checked={includeUpperCase}
            onChange={(e) => setIncludeUpperCase(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="uppercase" className="font-medium text-gray-700">Include Uppercase Characters</label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="lowercase"
            checked={includeLowerCase}
            onChange={(e) => setIncludeLowerCase(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="lowercase" className="font-medium text-gray-700">Include Lowercase Characters</label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="numbers"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="numbers" className="font-medium text-gray-700">Include Numbers</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="specialChars"
            checked={includeSpecialChars}
            onChange={(e) => setIncludeSpecialChars(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="specialChars" className="font-medium text-gray-700">Include Special Characters</label>
        </div>
      </div>
      <button
        onClick={generatePassword}
        className="w-full px-4 py-2 mb-4 font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Generate Password
      </button>
      <div className="relative mt-4">
        <label className="block mb-2 font-medium text-gray-700">Generated Password:</label>
        <input
          type="text"
          value={password}
          readOnly
          className="w-full p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={copyToClipboard}
          className="absolute top-0 right-0 px-3 py-2 mt-2 mr-2 text-white bg-gray-500 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <FaRegCopy />
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
