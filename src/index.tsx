import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./styles/GlobalStyles.css";
import { GlobalStateProvider } from "./context/GlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <ToastContainer />
      <div className="global-container">
        <Routes />
      </div>
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
