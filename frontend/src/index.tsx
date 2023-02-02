import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from './App';
import { HashRouter } from "react-router-dom";

const rootElement: HTMLElement | null = document.getElementById("root");

if (rootElement instanceof HTMLElement) {

  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>

  );

}