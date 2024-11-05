import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './Font.css';
import App from './App.tsx';
import { Reset } from 'styled-reset';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Reset />
    <Sidebar />
    <div className="font-ttbookend">
      <App />
    </div>
  </StrictMode>,
);
