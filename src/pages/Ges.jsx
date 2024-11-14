import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer"; // Importar el Footer
import "../styles/Button.css"; // Reutilizamos los estilos existentes

const Ges = () => {
  return (
    <div className="ges-page">
      <h1>Informes BI</h1>

      <div className="buttons">
        <Button
          href="https://app.powerbi.com/view?r=eyJrIjoiYWM0OGMxNWItYmMyMC00ZDM5LWEwZWMtNzEwOTBhODQwMjQ2IiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
          icon="fa-hourglass-end"
          title="Garantías Retrasadas GES (bimensual)"
          delay="100"
          iconColor="#ff6b6b"
        />
        <Button
          href="https://app.powerbi.com/view?r=eyJrIjoiYTE5Y2RjNmYtZmFlMy00NDc1LThhYzUtNWM3Zjc1ODE2OTY2IiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
          icon="fa-clock"
          title="Cumplimiento de Garantías GES (mensual)"
          delay="200"
          iconColor="#ff6b6b"
        />
        <Button
          href="https://app.powerbi.com/view?r=eyJrIjoiNjIzNGI0ODAtY2FhOC00YWVkLThhMTgtMmFkZTFhMDRiYmI3IiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9"
          icon="fa-stopwatch"
          title="Garantías Exceptuadas Transitorias"
          delay="300"
          iconColor="#ff6b6b"
        />
      </div>

      <div className="ges-page">
        <h1>Mapa derivación GES (flujo)</h1>

        <div className="buttons">
          <Button
            href="/pagina_sigges/protocolos_ges.html"
            icon="fa-person-walking-arrow-right"
            title="Mapa derivación GES (flujo)"
            delay="300"
            iconColor="#ff6b6b"
          />
        </div>
      </div>

      <div className="ges-page">
        <h1>Documentos</h1>
      </div>

      {/* Footer al final de la página */}
      <Footer />
    </div>
  );
};

export default Ges;
