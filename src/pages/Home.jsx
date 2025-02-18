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
     
        <h1>Información disponible</h1>
        <ButtonGroup />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
