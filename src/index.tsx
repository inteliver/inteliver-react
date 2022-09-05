import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import InteliverProvider from './inteliver/Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <InteliverProvider inteliverConfigs={{ cloudname: 'zap' }}>
      <App />
    </InteliverProvider>
  </React.StrictMode>
);
