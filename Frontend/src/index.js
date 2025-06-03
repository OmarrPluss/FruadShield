import React from "react";
import { createRoot } from "react-dom/client";

const App = () => <h1>Hello, GP App!</h1>;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
