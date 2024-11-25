import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserProvider from "./context/userContext";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Función para manejar el toggle de modo oscuro
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");

  // Guardar la preferencia del usuario
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");
};

// Comprobar la preferencia del usuario al cargar
document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("dark-mode");
  if (savedMode === "enabled") {
    document.body.classList.add("dark-mode");
  }
});

// Render de la aplicación React
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/segun_ejemplo">
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Exportar la función si necesitas usarla en otros componentes
export { toggleDarkMode };
