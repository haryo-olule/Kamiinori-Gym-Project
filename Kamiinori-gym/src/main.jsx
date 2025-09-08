// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";

import "./style/index.css";
import "./style/Hero.css";
import "./style/Service.css";
import "./style/About.css";
import "./style/Testimional.css";
import "./style/FAQ .css"; 

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
