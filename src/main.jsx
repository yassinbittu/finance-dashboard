import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FinanceProvider } from "./context/FinanceProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FinanceProvider>
      <App />
    </FinanceProvider>
  </React.StrictMode>
);