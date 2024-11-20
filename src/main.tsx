import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';
import { Reset } from 'styled-reset';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Reset />
    <div className="font-noons">
      <App />
    </div>
  </StrictMode>,
);
