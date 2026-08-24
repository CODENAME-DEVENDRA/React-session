import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  RouterBasics,
  RouterNavigate,
} from "./Phase-2-Advance-concepts/Module-02-Ecosystem-and-Architecture/01-react-router";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  // <StrictMode>
  //   <RouterBasics />
  // </StrictMode>,

  <StrictMode>
    <RouterNavigate />
  </StrictMode>,
);
