import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import "../styles/BotonesInteriores.css";
import "../styles/Ges.css";


const VisorTerritorial = () => {
  return (
    <div className="layout-container">
      <div className="ges-page">
        <h1>Visores territoriales</h1>
        <div className="buttons_int">
          <Button
            href="https://esri-minsal.maps.arcgis.com/apps/webappviewer/index.html?id=519cfa2254364cc687198931f17978bc"
            icon="fa-map-location-dot"
            title="Visor Límites de Establecimientos APS"
            delay="100"
            iconColor="#ff6b6b"
          />
          <Button
            href="https://esri-minsal.maps.arcgis.com/apps/webappviewer/index.html?id=835a6b6a96d74d3fbe1bd78d4cf7e81c"
            icon="fa-people-group"
            title="Visor Inscritos APS"
            delay="200"
            iconColor="#ff6b6b"
          />
          <Button
            href="https://esri-minsal.maps.arcgis.com/apps/webappviewer/index.html?id=1ecd5354571c4795937164263379267d"
            icon="fa-route"
            title="Visor de Análisis de Distancias a Establecimientos de Salud"
            delay="300"
            iconColor="#ff6b6b"
          />
          <Button
            href="https://esri-minsal.maps.arcgis.com/apps/webappviewer/index.html?id=9d0de04cda6c4d4c93ebdb4a94c7f9b3"
            icon="fa-ribbon"
            title="Georreferenciación Cáncer de Mamas"
            delay="300"
            iconColor="#ff6b6b"
          />

          {/* Botón con Material UI Icon */}
          <Button
            href="https://esri-minsal.maps.arcgis.com/apps/webappviewer/index.html?id=97efbb852d9a4462af18ea1ccc75cd7a"
            icon="gynecology"
            title="Georreferenciación Cáncer Cervicouterino"
            delay="300"
            iconColor="#ff6b6b"
            isMaterialSymbol={true} // Indica que es un icono de Google
          />

          <Button
            href="https://esri-minsal.maps.arcgis.com/apps/webappviewer/index.html?id=80ed97d9764c45d78bf982732b54a199"
            icon="oncology"
            title="Georreferenciación Cáncer Colorectal"
            delay="300"
            iconColor="#ff6b6b"
            isMaterialSymbol={true} // Indica que es un icono de Google
          />
          <Button
            href="https://esri-minsal.maps.arcgis.com/apps/webappviewer/index.html?id=bac641d854ca49d39b650212afab6f74"
            icon="fa-hospital"
            title="Georreferenciacion de Atención Cerrada"
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

export default VisorTerritorial;
