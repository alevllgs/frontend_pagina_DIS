import React from 'react';
import '../styles/Button.css'; // Unificado en Button.css

const Button = ({ href, icon, title, delay, iconColor, isMaterialSymbol }) => {
  return (
    <a href={href} className="button" data-aos="fade-up" data-aos-delay={delay} style={{ textDecoration: "none" }}>
      <div className="icon" style={{ color: iconColor }}>
        {/* Si el ícono es de Google (Material Symbols), usa la clase correcta */}
        {isMaterialSymbol ? (
          <span className="material-symbols-outlined" style={{ fontSize: "90px" }}>{icon}</span>
        ) : (
          <i className={`fas ${icon}`}></i> // Font Awesome se mantiene igual
        )}
      </div>
      <h4 className="title">{title}</h4>
    </a>
  );
};

export default Button;
