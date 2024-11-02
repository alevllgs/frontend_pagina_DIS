import React from "react"
import CreaBanner from "../components/CreaBanner"; // Importar CreaBanner
import ButtonGroup from "../components/ButtonGroup"; // Importar ButtonGroup
import "../styles/Home.css"; // Archivo CSS para estilos adicionales

const Home = () => {
  return (
    <div className="home-container">


      {/* Banner */}
      <CreaBanner /> {/* Añadir el componente CreaBanner */}

      {/* Cuerpo */}
      <div className="cuerpo">
        <h2>Sobre Nosotros</h2>
        <p>Esta es la sección principal de nuestra página donde describimos quiénes somos y qué hacemos.</p>

        <h2>Nuestros Servicios</h2>
        <p>Detalles sobre nuestros servicios...</p>

        {/* Botones */}
        <ButtonGroup /> {/* Añadir el componente ButtonGroup en el cuerpo */}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; Servicio de Salud Metropolitano Oriente, Subdirección de Gestión Asistencial, Departamento de Información Sanitaria.</p>
      </footer>
    </div>
  );
};

export default Home;
