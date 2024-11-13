import React, { useState } from "react";
import CreaBanner from "../components/CreaBanner";
import ButtonGroup from "../components/ButtonGroup";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import "../styles/Home.css";

const Home = () => {
  const [showNotification, setShowNotification] = useState(true);

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="home-container">
      {/* Mostrar notificación si está activa */}
      {showNotification && (
        <Notification
          message="¡Bienvenido a nuestra página! Explora nuestros servicios."
          type="info"
          onClose={handleCloseNotification}
        />
      )}

      {/* Banner */}
      <CreaBanner />

      {/* Cuerpo */}
      <div className="cuerpo">
        <h2>Sobre Nosotros</h2>
        <p>Esta es la sección principal de nuestra página donde describimos quiénes somos y qué hacemos.</p>

        <h2>Nuestros Servicios</h2>
        <p>Detalles sobre nuestros servicios...</p>

        {/* Botones */}
        <ButtonGroup />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
