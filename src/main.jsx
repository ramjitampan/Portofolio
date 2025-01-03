import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './hellowak.css';
import App from './Portfolio';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
