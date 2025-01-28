import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar"; // Componente del buscador
import DarkModeToggle from "./DarkModeToggle"; // Componente del botón de modo oscuro
import { useUser } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { rol } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else if (location.pathname === "/") {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const handleAdminLoginClick = () => {
    navigate("/admin_login"); // Redirigir al login administrativo
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src="/img/banner/logo_salud_oriente.png"
            alt="Logo Salud Oriente"
            className="navbar-logo-image"
          />
          <span className="navbar-logo-title">
            Departamento de Información <br /> Sanitaria
          </span>
        </div>

        <div className="navbar-links">
          <NavLink to="/" exact activeClassName="active">
            Inicio
          </NavLink>
          <NavLink to="/quienes-somos" activeClassName="active">
            Quiénes Somos
          </NavLink>
          <NavLink to="/documentos" activeClassName="active">
            Documentos
          </NavLink>
          {rol === "admin" && (
            <NavLink to="/administrador" activeClassName="active">
              Administrador
            </NavLink>
          )}
        </div>

        <div className="navbar-actions">
          <SearchBar /> {/* Buscador */}
          <DarkModeToggle /> {/* Botón de modo oscuro */}
          <FontAwesomeIcon
            icon={faWrench}
            style={{ color: "#ffffff", cursor: "pointer" }}
            className="navbar-login-icon"
            onClick={handleAdminLoginClick} // Llama a la función para redirigir al admin login
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
