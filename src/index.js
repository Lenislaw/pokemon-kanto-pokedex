import React from "react";
import ReactDOM from "react-dom";
import Favicon from "react-favicon";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Favicon url="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png" />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
