import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer"; // Importar el Footer
import "../styles/Button.css"; // Reutilizamos los estilos existentes
import "../styles/Ges.css"; // Reutilizamos los estilos existentes

const Rem = () => {
  return (
    <div className="layout-container">
      {/* Columna izquierda: Botones y secciones GES */}
      <div className="ges-page">
        <h1>REM Oficiales</h1>
        <div className="buttons_int">
          <Button
            href="https://dis.saludoriente.cl/degidssmo/intranet/index.php"
            icon="fa-list"
            title="Repositorio REM [Intranet]"
            delay="100"
          />
          <Button
            href="https://dis.saludoriente.cl/degidssmo/remonline"
            icon="fa-table-list"
            title="Visualizador REM"
            delay="200"
          />
         
        </div>

        <h1>Envios y correcciones REM</h1>
        <div className="buttons_int">
          <Button
            href="/rem_login"
            icon="fa-file-import"
            title="Envio de REM"
            delay="300"
          />
        </div>
      </div>

{/* Columna derecha: Documentos */}
<div className="document-container">
  <h2>Documentos</h2>
  <div className="document-card-container">
    <div className="document-card">
      <a
        href="https://dis.saludoriente.cl/degidssmo/ges/Circular-195%20(DAU%20Notificaci%C3%B3n)%202013.pdf"
        target="_blank"
      >
        <i className="fas fa-file-pdf"></i>
        <p>Circular 195 Super Salud</p>
      </a>
    </div>
    <div className="document-card">
      <a
        href="https://dis.saludoriente.cl/degidssmo/ges/CircularN%C2%BA227_Modifica%20Constancia%20GES.pdf"
        target="_blank"
      >
        <i className="fas fa-file-pdf"></i>
        <p>Circular 227 Super Salud</p>
      </a>
    </div>
    <div className="document-card">
      <a
        href="https://dis.saludoriente.cl/degidssmo/ges/Cirular%20SIS%20288%20Modificaciones%20Excepciones%20GO_%2006%2007%202017.pdf"
        target="_blank"
      >
        <i className="fas fa-file-pdf"></i>
        <p>Circular 288 Super Salud</p>
      </a>
    </div>
    <div className="document-card">
      <a
        href="https://dis.saludoriente.cl/degidssmo/ges/Ord%202134%20nueva%20intrucciones%20GES%20mayo%202018.pdf"
        target="_blank"
      >
        <i className="fas fa-file-pdf"></i>
        <p>Ordinario MINSAL N° 2134</p>
      </a>
    </div>
    <div className="document-card">
      <a
        href="https://dis.saludoriente.cl/degidssmo/ges/Nueva%20Nomenclatura%20de%20Garant%C3%ADas%20v1%20%202018.pdf"
        target="_blank"
      >
        <i className="fas fa-file-pdf"></i>
        <p>Nueva Nomenclatura Garantias</p>
      </a>
    </div>
    <div className="document-card">
      <a
        href="https://dis.saludoriente.cl/degidssmo/ges/Publicacion%20diario%20oficial.%20Nuevo%20Decreto%20GES%202019.pdf"
        target="_blank"
      >
        <i className="fas fa-file-pdf"></i>
        <p>Diario Oficial Decreto GES 2019</p>
      </a>
    </div>
  </div>
</div>

      {/* Footer al final de la página */}
      <Footer />
    </div>
  );
};

export default Rem;
