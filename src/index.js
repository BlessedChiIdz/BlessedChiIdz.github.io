import React, {createContext} from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import './firstSection+container.css'
import {Words} from "./Words";

const root = createRoot(
  document.getElementById('root')
);
let context = createContext(null)
root.render(

    <StrictMode>
        <App />
    </StrictMode>
);
