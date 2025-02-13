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
            href="https://app.powerbi.com/view?r=eyJrIjoiODFhNmQyZGYtNzEwMC00ZWFkLTliOTItMTk5ZGI4MDJkYzNhIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="list"
            title="LE No GES"
            delay="100"
            iconColor="#ff6b6b"
            isMaterialSymbol={true} // Si es Google Icons
          />
          <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiZDEyMmE2YjktYWRhOS00YjdmLThlZTEtNDJiOWVkYzhlNDAwIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="monitoring"
            title="Evolución LE No GES"
            delay="200"
            iconColor="#ff6b6b"
            isMaterialSymbol={true} // Si es Google Icons
          />
          <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiN2NkZDdiMGItOGEwYS00ZWVhLTgxNGEtOWNkMzg1Yzk3YThjIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9&pageName=ReportSectionf58c34c322b72ac4b99c"
            icon="oncology"
            title="LE NO GES Oncológíca"
            delay="300"
            iconColor="#ff6b6b"
            isMaterialSymbol={true} // Si es Google Icons
          />
          <Button
            href=""
            icon="move_item"
            title="Egresos Lista de Espera No GES [Proximamente]"
            delay="300"
            iconColor="#ff6b6b"
            isMaterialSymbol={true} // Si es Google Icons
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
