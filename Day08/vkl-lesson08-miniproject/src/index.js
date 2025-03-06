import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import VklApp from './vklApp';
import reportWebVitals from './reportWebVitals';

const vklRoot = ReactDOM.createRoot(document.getElementById('vklRoot'));
vklRoot.render(
  <React.StrictMode>
      <VklApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
