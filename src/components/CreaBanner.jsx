import React, { useState, useEffect } from "react";
import "../styles/CreaBanner.css";

const banners = [
  "/img/banner/banner1.jpg",
  // Agrega más imágenes si necesitas
];

const CreaBanner = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Carrusel de imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Control del scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop < 50); // 50px de margen para evitar rebote
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`banner-container ${!isVisible ? "hidden" : ""}`}>
      <img
        src={banners[currentBannerIndex]}
        alt="Banner"
        className="banner-image"
      />
      <div className="banner-text">
        <p>Bienvenido al sitio web del Departamento de Información Sanitaria
          (DIS) del Servicio de Salud Metropolitano Oriente (SSMO). Aquí podrá
          encontrar información relevante generada por los distintos
          establecimientos pertenecientes al SSMO, la cual se irá actualizando
          periódicamente.</p>
      </div>
    </div>
  );
};

export default CreaBanner;