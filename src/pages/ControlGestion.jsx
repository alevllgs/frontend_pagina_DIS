import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import "../styles/BotonesInteriores.css";
import "../styles/Ges.css";

const ControlGestion = () => {
  return (
    <div className="layout-container">
      <div className="ges-page">
        <h1>Control de Gestión</h1>
        <div className="buttons_int">
          <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiMTA3NDEwMTMtNmRhOC00ODQ1LTgyZTktMzg0NDA1ZjRjN2MzIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="fa-chart-line"
            title="Indicadores de eficiencia de quirófanos electivos"
            delay="100"
          />
          
        </div>
      </div>

      <div className="document-container">
        <h2>Documentos</h2>
        <div className="document-card-container">
          <div className="document-card">
            <a
              href="https://dis.saludoriente.cl/degidssmo/info_disp/mapas/Mapa_Contexto1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file-pdf"></i>
              <p>Establecimientos de Salud SSMO</p>
            </a>
          </div>
          <div className="document-card">
            <a
              href="https://dis.saludoriente.cl/degidssmo/info_disp/mapas/Mapa_Contexto2.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file-pdf"></i>
              <p>Límite Establecimientos de Salud SSMO</p>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ControlGestion;