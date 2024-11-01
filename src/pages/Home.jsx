import React from "react";
import CreaBanner from "../components/CreaBanner"; // Importar CreaBanner
import ButtonGroup from "../components/ButtonGroup"; // Importar ButtonGroup

const Home = () => {
  return (
    <div>
     

      {/* Banner */}
      <CreaBanner /> {/* Añadir el componente CreaBanner */}

      {/* Cuerpo */}
      <div className="cuerpo" style={{ padding: "20px" }}>
        <h2>Sobre Nosotros</h2>
        <p>Esta es la sección principal de nuestra página donde describimos quiénes somos y qué hacemos.</p>

        <h2>Nuestros Servicios</h2>
        <p>Detalles sobre nuestros servicios...</p>

        {/* Botones */}
        <ButtonGroup /> {/* Añadir el componente ButtonGroup en el cuerpo */}
      </div>

      {/* Footer */}
      <footer className="footer" style={{ background: "#333", color: "#fff", padding: "10px", textAlign: "center" }}>
        <p>&copy; 2024 Nuestra Compañía. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
