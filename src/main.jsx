import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './hellowak.css';
import Portfolio from './Portfolio';
import Feedback from './Feedback';

createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <Router>
      <Routes>
        {/* Route ke halaman utama */}
        <Route path="/" element={<Portfolio />} />
        {/* Route ke halaman Feedback */}
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  </StrictMode>
);
