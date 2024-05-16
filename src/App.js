


// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import About from './components/About.jsx';
import SplashPage from './pages/SplashPage.jsx';
import ContactPage from './pages/ContactPage.jsx';






const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SplashPage />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/homepage" element={<HomePage />} /> 
        <Route path="/contactpage" element={<ContactPage />} /> 


      </Routes>
    </BrowserRouter>
  );
};

export default App;
