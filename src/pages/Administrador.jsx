//src\pages\Administrador.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer"; // Importar el Footer
import "../styles/BotonesInteriores.css"; // Reutilizamos los estilos existentes
import "../styles/Ges.css"; // Reutilizamos los estilos existentes

const Administrador = () => {
  return (
    <div className="layout-container">
      {/* Columna izquierda: Botones y secciones GES */}
      <div className="ges-page">
        <h1>Administración de la página</h1>
        <div className="buttons_int">
          <Button
            to="admin_rem"
            icon="manage_accounts"
            title="Administración REM"
            delay="300"
            isMaterialSymbol={true}
          />

          <Button
            to="admin_inf_rem"
            icon="file_save"
            title="Informes REM"
            delay="300"
            isMaterialSymbol={true}
          />

          <Button
            to="admin_dashboard"
            icon="settings"
            title="Administración Dashboard"
            delay="100"
            isMaterialSymbol={true}
          />
        </div>

        {/* ✅ Aquí se renderizan las páginas hijas */}
        <div className="admin-content">
          <Outlet />
        </div>
      </div>

      {/* Footer al final de la página */}
      <Footer />
    </div>
  );
};

export default Administrador;
