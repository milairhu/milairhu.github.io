import type { FunctionComponent } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const Root: FunctionComponent = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element with id 'root' was not found.");
}

ReactDOM.createRoot(rootElement).render(<Root />);
