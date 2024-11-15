import React, { useState } from "react";
import CreaBanner from "../components/CreaBanner";
import ButtonGroup from "../components/ButtonGroup";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import "../styles/Home.css"; // Mantén los estilos unificados

const Home = () => {
  const [showNotification, setShowNotification] = useState(true);

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="home-container">
      {showNotification && (
        <Notification
          message="¡Bienvenido a nuestra página! Explora nuestros servicios."
          type="info"
          onClose={handleCloseNotification}
        />
      )}
      <CreaBanner />
      <div className="cuerpo">
        <h2>Departamento de Información Sanitaria</h2>
        <p>
          Bienvenido al sitio web del Departamento de Información Sanitaria
          (DIS) del Servicio de Salud Metropolitano Oriente (SSMO). <br />
          Aquí podrá encontrar información relevante generada por los distintos
          establecimientos pertenecientes al SSMO, la cual se irá actualizando
          periódicamente.
        </p>
        <h2>Nuestros Servicios</h2>
        <ButtonGroup />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
