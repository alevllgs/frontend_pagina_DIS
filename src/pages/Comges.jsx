import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer"; // Importar el Footer
import "../styles/BotonesInteriores.css"; // Reutilizamos los estilos existentes
import "../styles/Ges.css"; // Reutilizamos los estilos existentes

const Comges = () => {
  return (
    <div className="layout-container">
      {/* Columna izquierda: Botones y secciones GES */}
      <div className="ges-page">
        <h1>Monitoreo indicadores COMGES</h1>
        <div className="buttons_int">
          <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiZmE1NDFhMmYtYjM2NS00NDdkLTlmMjktNzM0ZGQxOTQ1ZmUyIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="clinical_notes"
            title="COMGES 1.1: Proceso Ambulatorio"
            delay="100"
            iconColor="#ff6b6b"
            isMaterialSymbol={true} // Si es Google Icons
          />
          <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiYzRkZGFjNGQtMTUwYS00YWZlLTgyMjktMmM3NDY1ZGFjYTVmIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="format_list_numbered"
            title="COMGES: Lista de Espera No GES"
            delay="200"
            iconColor="#ff6b6b"
            isMaterialSymbol={true} // Si es Google Icons
          />
          <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiZmEyZWI5YmQtYmMxNi00YWEwLWE2ODQtNzExYjhjOGQ0NGEzIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="elderly_woman"
            title="COMGES 8.1: Acciones para el Cuidado Integral de Personas 65 años y más"
            delay="300"
            iconColor="#ff6b6b"
            isMaterialSymbol={true} // Si es Google Icons
          />
          <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiZWU4MDcxMzctYjZlZS00ZjNkLTlmNzEtZWM5Yzg2NGY5YTJjIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="real_estate_agent"
            title="COMGES 8.2: Atencion Domiciliaria Dependencia Severa"
            delay="300"
            iconColor="#ff6b6b"
            isMaterialSymbol={true} // Si es Google Icons
          />
          <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiYzBmZjMwYmEtYWUyYy00Yjc5LWE5NmYtN2NlMmNmNmMyYzU4IiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="emergency"
            title="COMGES 9.2: Usuarios que abonan la Urgencia Hospitarlaria"
            delay="300"
            iconColor="#ff6b6b"
            isMaterialSymbol={true} // Si es Google Icons
          />

          <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiNzFiOGZmMWItZWUzNC00NmYwLWEzYTMtNDlhMzNmYzJmMDQ4IiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="model_training"
            title="COMGES 10.1: Gestión y Eficiencia del Proceso de Hospitalización"
            delay="300"
            iconColor="#ff6b6b"
            isMaterialSymbol={true} // Si es Google Icons
          />
          <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiYWNjMDExM2UtZTQzNC00N2Y3LTkyYzktNDYxNzdmMGRlNWI1IiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="home_health"
            title="COMGES 10.3: Hospitalizacion Domiciliaria"
            delay="200"
            iconColor="#ff6b6b"
            isMaterialSymbol={true} // Si es Google Icons
          />
          <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiYjNhMTAyYmQtZDE5Ny00YTAxLWE0ZTItMjliOTQwNGViYWIzIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="vital_signs"
            title="COMGES 11: Proceso Quirúrgico"
            delay="300"
            iconColor="#ff6b6b"
            isMaterialSymbol={true} // Si es Google Icons
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

export default Comges;
