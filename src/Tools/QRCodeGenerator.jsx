import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeGenerator = () => {
  const [input, setInput] = useState('');
  const [qrColor, setQrColor] = useState('#000000');
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleColorChange = (color) => {
    setQrColor(color.hex);
  };

  const handleDownload = () => {
    const canvas = document.getElementById('qrCode');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    setDownloadUrl(pngUrl);
  };

  return (
    <div className="max-w-md p-8 mx-auto mt-16 bg-white rounded-lg shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">QR Code Generator</h2>
      <div className="mb-6">
        <label htmlFor="input" className="block mb-2 font-medium text-gray-700">Enter Text or URL:</label>
        <input
          type="text"
          id="input"
          value={input}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="color" className="block mb-2 font-medium text-gray-700">QR Code Color:</label>
        <ChromePicker color={qrColor} onChangeComplete={handleColorChange} />
      </div>
      <div className="flex justify-center mb-6">
        <QRCodeCanvas
          id="qrCode"
          value={input}
          size={256}
          bgColor="#FFFFFF"
          fgColor={qrColor}
          level="H"
          includeMargin={true}
        />
      </div>
      <p className="mb-6 text-center">{input}</p>
      <button
        onClick={handleDownload}
        className="w-full px-4 py-2 mb-4 font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Download QR Code
      </button>
      {downloadUrl && (
        <a
          href={downloadUrl}
          download="qrcode.png"
          className="block text-center text-blue-500 hover:underline"
        >
          Click here to download your QR code
        </a>
      )}
    </div>
  );
};

export default QRCodeGenerator;
