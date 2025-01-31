import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import "../styles/BotonesInteriores.css";
import "../styles/Ges.css";


const ListaEspera = () => {
  return (
    <div className="layout-container">
      <div className="ges-page">
        <h1>Lista de Espera</h1>
        <div className="buttons_int">
          <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiN2Y2MTk0ODMtMDhlZC00M2MyLTg3NDUtNzY3ZTUzOTc4YjYwIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="fa-list-ol"
            title="LE No GES"
            delay="100"
            iconColor="#ff6b6b"
          />
          <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiZDhjMTExODEtNjc0NS00Y2M3LTgxMDYtZmM0YjAwOTIxYThlIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="fa-chart-line"
            title="Evolución LE No GES"
            delay="200"
            iconColor="#ff6b6b"
          />
          <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiN2NkZDdiMGItOGEwYS00ZWVhLTgxNGEtOWNkMzg1Yzk3YThjIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9&pageName=ReportSectionf58c34c322b72ac4b99c"
            icon="fa-ribbon"
            title="LE NO GES Oncológíca"
            delay="300"
            iconColor="#ff6b6b"
          />
          <Button
            href=""
            icon="fa-person-walking-arrow-right"
            title="Egresos Lista de Espera No GES [Proximamente]"
            delay="300"
            iconColor="#ff6b6b"
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

export default ListaEspera;
