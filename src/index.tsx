import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/Login';

import "./styles/GlobalStyles.css"

ReactDOM.render(
  <React.StrictMode>
    <div className="global-container">
    <Login />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
