import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SnackbarProvider } from "notistack";
import { ModalProvider } from "@/context/modal.context.tsx";

createRoot(document.getElementById("root")!).render(
  <SnackbarProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </SnackbarProvider>,
);
