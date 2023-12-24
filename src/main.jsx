import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

import { XatruchApp } from './XatruchApp.jsx';
import { ScrollToAnchor } from "./ui/index.js";

import { store } from "./store";

import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToAnchor />
        <XatruchApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
