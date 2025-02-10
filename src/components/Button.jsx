import React from "react";
import { Link } from "react-router-dom";
import "../styles/Button.css"; // Unificado en Button.css

const Button = ({ href, to, icon, title, delay, iconColor, isMaterialSymbol }) => {
  const isExternal = href && (href.startsWith("http") || href.startsWith("//"));

  return isExternal ? (
    // Si es un enlace externo, usa <a>
    <a 
      href={href} 
      className="button" 
      target="_blank" 
      rel="noopener noreferrer" 
      data-aos="fade-up" 
      data-aos-delay={delay} 
      style={{ textDecoration: "none" }}
    >
      <div className="icon" style={{ color: iconColor }}>
        {isMaterialSymbol ? (
          <span className="material-symbols-outlined" style={{ fontSize: "90px" }}>{icon}</span>
        ) : (
          <i className={`fas ${icon}`}></i>
        )}
      </div>
      <h4 className="title">{title}</h4>
    </a>
  ) : (
    // Si es un enlace interno, usa <Link>
    <Link 
      to={to || href} // Si `to` no está definido, usa `href`
      className="button" 
      data-aos="fade-up" 
      data-aos-delay={delay} 
      style={{ textDecoration: "none" }}
    >
      <div className="icon" style={{ color: iconColor }}>
        {isMaterialSymbol ? (
          <span className="material-symbols-outlined" style={{ fontSize: "90px" }}>{icon}</span>
        ) : (
          <i className={`fas ${icon}`}></i>
        )}
      </div>
      <h4 className="title">{title}</h4>
    </Link>
  );
};

export default Button;

