import React, { useState, useEffect } from "react";
import "../styles/CreaBanner.css"; // Asegúrate de tener este archivo CSS para los estilos

const banners = [
  "public/img/banner/banner1.jpg",
  // Agrega más rutas de imágenes si es necesario
];

const CreaBanner = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Cambia de imagen cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      <img
        src={banners[currentBannerIndex]}
        alt="Banner"
        className="banner-image"
      />
      {/* Texto superpuesto */}
      <div className="banner-text">
       
        <p>
          Bienvenido al sitio web del Departamento de Información Sanitaria (DIS) del Servicio de
          Salud Metropolitano Oriente (SSMO). Aquí podrá encontrar información relevante generada por
          los distintos establecimientos pertenecientes al SSMO, la cual se irá actualizando
          periódicamente.
        </p>
      </div>
    </div>
  );
};

export default CreaBanner;
