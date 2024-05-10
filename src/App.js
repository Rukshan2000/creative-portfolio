


// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import SplashPage from './pages/SplashPage.jsx';
import ContactPage from './pages/ContactPage.jsx';






const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SplashPage />} />
        <Route path="/aboutpage" element={<AboutPage />} /> 
        <Route path="/homepage" element={<HomePage />} /> 
        <Route path="/contactpage" element={<ContactPage />} /> 


      </Routes>
    </BrowserRouter>
  );
};

export default App;
