import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Import the App component
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
