import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { JokeBar } from './Components/JokeBar'
import { NavBar } from './Components/NavBar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <JokeBar />
      <NavBar />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();