


// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


// components
import Blog from './components/Blog';

// blog page
import BlogContent from './blogpages/BlogContent';


// Tool pages
import CompilerPage from './ToolPages/CompilerPage.jsx';
import QRCodeGeneratorPage from './ToolPages/QRCodeGeneratorPage.jsx';
import PasswordGeneratorPage from './ToolPages/PasswordGeneratorPage.jsx';
import ChatAppPage from './ToolPages/ChatAppPage.jsx';
import TtsPage from './ToolPages/TtsPage.jsx';
import YtVideoDownloader from './ToolPages/YtVideoDownloader.jsx';
import InvoiceGenerator from './ToolPages/InvoiceGenerator.jsx';
import CvPage from './ToolPages/CvPage.jsx';
import HoroscopePage from './ToolPages/HoroscopePage.jsx';





// main pages
import HomePage from './pages/HomePage.jsx';
import SplashPage from './pages/SplashPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ToolsPage from './pages/ToolsPage.jsx';
import UnderDevelopmentPage from './pages/UnderDevelopmentPage.jsx';










const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SplashPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogContent />} />
        <Route path="/toolspage" element={<ToolsPage />} />
        <Route path="/compilerpage" element={<CompilerPage />} />
        <Route path="/passwordgeneratorpage" element={<PasswordGeneratorPage />} />
        <Route path="/qrcodegeneratorpage" element={<QRCodeGeneratorPage />} />
        <Route path="/underdevelopmentpage" element={<UnderDevelopmentPage />} />
        <Route path="/chatapppage" element={<ChatAppPage />} />
        <Route path="/ttspage" element={<TtsPage />} />
        <Route path="/ytvideodownloader" element={<YtVideoDownloader />} />
        <Route path="/invoicegenerator" element={<InvoiceGenerator />} />
        <Route path="/horoscope" element={<HoroscopePage />} />
        <Route path="/cvpage" element={<CvPage />} />








      </Routes>
    </BrowserRouter>
  );
};

export default App;
