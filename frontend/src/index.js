import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RecoilRoot } from "recoil";
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./static/fonts/font.css";
import {BrowserRouter} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <RecoilRoot>
    <App />
  </RecoilRoot>
  </BrowserRouter>
);

reportWebVitals();