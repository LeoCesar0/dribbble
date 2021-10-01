import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "./styles/GlobalStyles.css"

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <div className="global-container">

  <Routes />

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
