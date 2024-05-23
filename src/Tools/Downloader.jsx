import React, { useState } from 'react';
import axios from 'axios';

const Downloader = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');

  const handleDownload = async () => {
    setError('');
    try {
      const response = await axios.get(`http://localhost:4000/download?url=${encodeURIComponent(videoUrl)}`, {
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
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">YouTube Video Downloader</h1>
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="Enter YouTube video URL"
        className="border p-2 mb-4 w-full"
      />
      <button onClick={handleDownload} className="bg-blue-500 text-white px-4 py-2 rounded">
        Download Video
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Downloader;
