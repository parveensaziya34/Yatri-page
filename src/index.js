// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import './index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Check if the root element exists
if (!rootElement) {
  throw new Error("Failed to find the root element. Make sure you have a <div id='root'></div> in your HTML file.");
}

// Create a root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);