import React, { useState, useEffect } from "react";
import "../styles/Navbar.css"; // Estilos específicos del botón

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Verificar el valor en localStorage o por defecto en modo normal
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    // Establecer el estado inicial del modo oscuro en el DOM al montar el componente
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    // Guardar el estado actualizado en localStorage
    localStorage.setItem("darkMode", newMode);
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
