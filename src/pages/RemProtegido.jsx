import React from "react";
import Footer from "../components/Footer"; // Importar el Footer
import "../styles/RemProtegido.css"; // Importar los estilos específicos para este componente

const RemProtegido = () => {
  return (
    <div className="form-page">
      <div className="form-container">
        <h1>Subir Archivos REM</h1>
        <form>
          <input type="file" accept=".xlsx,.xlsm" />
          <input type="file" accept=".xlsx,.xlsm" />
          <input type="file" accept=".xlsx,.xlsm" />
          <input type="file" accept=".xlsx,.xlsm" />
          <button type="submit">Subir Archivos</button>
        </form>
      </div>
      {/* Footer al final de la página */}
      <Footer />
    </div>
  );
};

export default RemProtegido;

