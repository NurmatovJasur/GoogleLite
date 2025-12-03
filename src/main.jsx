import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ResultContextProvider } from "./contexts/ResultContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ResultContextProvider>
        <App />
      </ResultContextProvider>
    </BrowserRouter>
  </StrictMode>
);
