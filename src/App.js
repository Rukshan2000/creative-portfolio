


// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import About from './components/About.jsx';
import SplashPage from './pages/SplashPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ToolsPage from './pages/ToolsPage.jsx';







const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SplashPage />} />
        <Route path="/homepage" element={<HomePage />} /> 
        <Route path="/blogpage" element={<BlogPage />} /> 
        <Route path="/toolspage" element={<ToolsPage />} /> 



      </Routes>
    </BrowserRouter>
  );
};

export default App;
