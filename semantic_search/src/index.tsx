import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './models/init';
import { MainApp } from './utils/MainApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App></App>
);
