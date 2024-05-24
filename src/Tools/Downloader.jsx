import React, { useState } from 'react';
import axios from 'axios';

const Downloader = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(false); // State for tracking downloading status
  const API_BASE_URL = 'https://ytdown-api.vercel.app'; // Replace this with your actual backend URL


  const handleDownload = async () => {
    setError('');
    setDownloading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/download?url=${encodeURIComponent(videoUrl)}&format=${format}`, {
        responseType: 'blob',
      });
  
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'video.mp4');
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      setError('Error downloading video');
      console.error('Error downloading video:', err);
    } finally {
      setDownloading(false);
    }
  };
  

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl">YouTube Video/Audio Downloader</h1>
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="Enter YouTube video URL"
        className="w-full p-2 mb-4 border"
      />
      <button onClick={handleDownload} className="px-4 py-2 text-white bg-blue-500 rounded">
        Download Video
      </button>
      {downloading && <p className="mt-4 text-blue-500">Preparing your file, Please wait.....</p>} {/* Conditional rendering of downloading text */}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default Downloader;
