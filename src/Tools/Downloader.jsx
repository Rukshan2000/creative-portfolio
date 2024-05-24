import React, { useState } from 'react';
import axios from 'axios';

const Downloader = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(false); // State for tracking downloading status

  const handleDownload = async () => {
    setError('');
    setDownloading(true); // Set downloading status to true when starting the download
    try {
      const response = await axios.get(`https://backend-lovat-delta-32.vercel.app/download?url=${encodeURIComponent(videoUrl)}`, {
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
      setDownloading(false); // Set downloading status to false after the download (whether successful or not)
    }
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl">YouTube Video Downloader</h1>
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
      {downloading && <p className="mt-4 text-blue-500">Preparing your video, Please wait.....</p>} {/* Conditional rendering of downloading text */}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default Downloader;
