import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";

import { XatruchApp } from './XatruchApp.jsx';
import { ScrollToAnchor } from "./ui/index.js";

import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToAnchor />
      <XatruchApp />
    </BrowserRouter>
  </React.StrictMode>,
)
