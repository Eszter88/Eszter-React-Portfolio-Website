import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/main.scss";
import { ThemeProvider } from "./components/ThemeContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
