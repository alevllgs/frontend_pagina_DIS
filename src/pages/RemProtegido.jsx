import React from "react";

const RemProtegido = () => {
  return (
    <div>
      <h1>Subir Archivos REM</h1>
      <form>
        <input type="file" accept=".xlsx,.xlsm" />
        <input type="file" accept=".xlsx,.xlsm" />
        <input type="file" accept=".xlsx,.xlsm" />
        <input type="file" accept=".xlsx,.xlsm" />
        <button type="submit">Subir Archivos</button>
      </form>
    </div>
  );
};

export default RemProtegido;
