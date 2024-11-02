import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css'; // Importa el archivo CSS actualizado

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Verificar si no estamos en la página de inicio
    if (location.pathname !== '/') {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Función para manejar el scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else if (location.pathname === '/') {
        setScrolled(false);
      }
    };

    // Añadir el event listener para el scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Limpiar el event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Departamento de Información  Sanitaria</Link> {/* Logo textual */}
        </div>
        <div className="navbar-links">
          <NavLink to="/" exact activeClassName="active">Inicio</NavLink> 
          <NavLink to="/quienes-somos" activeClassName="active">Quiénes Somos</NavLink>
          <NavLink to="/documentos" activeClassName="active">Documentos</NavLink>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="¿Qué necesitas?" className="search-input" />
          <button className="search-button">🔍</button> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
