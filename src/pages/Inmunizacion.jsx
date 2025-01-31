import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer"; // Importar el Footer
import "../styles/BotonesInteriores.css"; // Reutilizamos los estilos existentes
import "../styles/Ges.css"; // Reutilizamos los estilos existentes

const Inmunizacion = () => {
  return (
    <div className="layout-container">
      {/* Columna izquierda: Botones y secciones GES */}
      <div className="ges-page">
        <h1>Informes BI</h1>
        <div className="buttons">
          <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiYWYwYTVmZjMtYWY3ZS00MzY1LTkzNjUtZmE1ZDhhNmNkNDIxIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="fa-vial-virus"
            title="Campaña de Vacunación VRS"
            delay="100"
            iconColor="#ff6b6b"
          />
          <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiZWY2ODgxNDMtNmEzNi00YTJhLWE2OGUtYjRmODRmZGIxOTgyIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="fa-syringe"
            title="Campaña Vacunación Influenza 2024"
            delay="200"
            iconColor="#ff6b6b"
          />
          <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiMWQ4Y2VhZGItMzMwZS00YTM0LTliNDItOTllYzEwNWI2NjI2IiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="fa-virus-covid"
            title="Campaña Vacunación COVID"
            delay="300"
            iconColor="#ff6b6b"
          />
              <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiMjQ3NjkxZmEtZTYzZS00NGY4LWI5ZjEtY2MzNTIwNDQ1ZTJkIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="fa-shield-virus"
            title="Monitoreo Campaña de Vacunacion VPH"
            delay="300"
            iconColor="#ff6b6b"
          />
              <Button
            href="https://app.powerbi.com/view?r=eyJrIjoiYmE2MjZmNTYtZjNiNy00NDYxLThhMTAtYzlmNTg0NzVmODhlIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
            icon="fa-vial-circle-check"
            title="Campaña de Vacunacion Neumocócica Polisacárida"
            delay="300"
            iconColor="#ff6b6b"
          />
        </div>

      </div>



      {/* Footer al final de la página */}
      <Footer />
    </div>
  );
};

export default Inmunizacion;
