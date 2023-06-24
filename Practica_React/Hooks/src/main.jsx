import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import App2 from "./App2.jsx";
import App3 from "./App3.jsx";
import App4 from "./App4.jsx";
import App5 from "./App5.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <App2 />
    <App3 mensaje={"LUKE, I AM YOUR FATHER."} />
    <App4 />
    <App5 />
  </React.StrictMode>
);
