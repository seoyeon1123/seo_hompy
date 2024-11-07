import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './Font.css';
import App from './App.tsx';
import { Reset } from 'styled-reset';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Reset />

    <App />
  </StrictMode>,
);
