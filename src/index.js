// src/index.js

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; 
import "./index.css"; // (if you have any global CSS)

// Grab the <div id="root"></div> from index.html
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
