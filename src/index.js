import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './features/app/App.jsx';
import { ModalState } from './context/ModalContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModalState>
    <App />
  </ModalState>,

);
