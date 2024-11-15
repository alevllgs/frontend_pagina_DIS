import React from "react";
import { toggleDarkMode } from "../main.jsx"; // Función de modo oscuro
import "../styles/Navbar.css"; // Estilos específicos del botón

const DarkModeToggle = () => {
  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      🌙
    </button>
  );
};

export default DarkModeToggle;
