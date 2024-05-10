


// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';





const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} /> 

      </Routes>
    </BrowserRouter>
  );
};

export default App;
