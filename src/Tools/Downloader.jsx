import React, { useState } from 'react';
import axios from 'axios';

const Downloader = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setError('');
    setDownloading(true);
    try {
      const response = await axios.get(`https://ytdown-api.vercel.app/download?url=${encodeURIComponent(videoUrl)}&format=mp3`, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `audio.mp3`); // Always download as audio
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      setError('Error downloading audio');
      console.error('Error downloading audio:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="mb-6 text-3xl font-semibold text-center text-gray-800">YouTube Audio Converter</h1>
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="Enter YouTube video URL"
        className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <button onClick={handleDownload} className="w-full px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        {downloading ? 'Downloading...' : 'Download Audio'}
      </button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default Downloader;
