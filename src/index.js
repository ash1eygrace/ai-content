import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/common/ThemeContext';
import '@fortawesome/fontawesome-free/css/all.css';

const container = document.getElementById('root');

createRoot(container).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
