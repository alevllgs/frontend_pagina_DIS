import React from "react";
import Registro from "../components/Registro";

const RemLogin = () => {
  return (
    <div>
      <h1>Registro para REM</h1>
      <Registro redirectTo="/subir_rem" />
    </div>
  );
};

export default RemLogin;
