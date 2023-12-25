import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import { XatruchApp } from './XatruchApp.jsx';
import { store } from "./store";

import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>     
        <XatruchApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
