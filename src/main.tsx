import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Styles globaux

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Point d'entrée de l'application
);
