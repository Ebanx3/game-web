// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { JugadorProvider } from "./context/JugadorProvider.tsx";
import { EscenaProvider } from "./context/EscenaProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <EscenaProvider>
    <JugadorProvider>
      <App />
    </JugadorProvider>
  </EscenaProvider>
);
