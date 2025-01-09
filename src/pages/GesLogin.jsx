import React from "react";
import Registro from "../components/Registro";

const GesLogin = () => {
  return (
    <div>
      <h1>Registro para GES</h1>
      <Registro redirectTo="/ges_protegido" />
    </div>
  );
};

export default GesLogin;
