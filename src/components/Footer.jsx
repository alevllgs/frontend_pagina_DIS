// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css'; // Importar el archivo CSS para estilos adicionales
// Si hay paginas con poco cuerpo donde no se ajusta el Footer usar la clase  .page-container en css

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; Servicio de Salud Metropolitano Oriente, Subdirección de Gestión Asistencial, Departamento de Información Sanitaria.</p>
    </footer>
  );
};

export default Footer;
