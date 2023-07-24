import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import App from './App';
import './firstSection.css'
import {Words} from "./Words";

const root = createRoot(
  document.getElementById('root')
);
root.render(
    <>
        <App />
    </>
);
