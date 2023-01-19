import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import './index.css';
import App from './App';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';
import New from './New';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='pokemon' element={<Pokedex />}>
                    <Route path='' element={<div>Select a pokemon</div>} />
                    <Route path='new' element={<New/>} />
                    <Route path=':name' element={<Pokemon />} />
                </Route>
            </Routes>
        </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
