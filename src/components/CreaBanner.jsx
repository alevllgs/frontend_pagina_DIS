import React, { useState, useEffect } from "react";
import "../styles/CreaBanner.css"; // Asegúrate de tener este archivo CSS para los estilos

const banners = [
  "public/img/banner/banner1.jpg",
  "public/img/banner/banner2.jpg",
  "public/img/banner/banner3.jpg",
  "public/img/banner/banner4.jpg"
];
const logo = "public/img/banner/logo_salud_oriente.png";

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
      <img
        src={logo}
        alt="Logo Salud Oriente"
        className="banner-logo"
      />
    </div>
  );
};

export default CreaBanner;
