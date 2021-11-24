import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolioV2">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
