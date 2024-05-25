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
    <div className="p-4">
      <h1 className="mb-4 text-2xl">YouTube Audio Downloader</h1> {/* Updated title */}
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="Enter YouTube video URL"
        className="w-full p-2 mb-4 border"
      />
      <button onClick={handleDownload} className="px-4 py-2 text-white bg-blue-500 rounded">
        Download Audio {/* Updated button text */}
      </button>
      {downloading && <p className="mt-4 text-blue-500">Downloading your audio, please wait...</p>} {/* Updated loading message */}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default Downloader;
