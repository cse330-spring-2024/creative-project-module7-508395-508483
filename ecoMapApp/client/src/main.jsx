import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

// Find the root element in your HTML where you want to render the app
const rootElement = document.getElementById('root');

// Render the app inside the root element
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  rootElement // Pass the root element to ReactDOM.render()
);
