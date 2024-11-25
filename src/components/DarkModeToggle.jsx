import React, { useState } from "react";
import "../styles/Navbar.css"; // Estilos específicos del botón

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.body.classList.contains("dark-mode")
  );

  const handleToggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      className={`dark-mode-toggle ${isDarkMode ? "active" : ""}`}
      onClick={handleToggleDarkMode}
      aria-label={isDarkMode ? "Activar modo claro" : "Activar modo oscuro"}
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;
