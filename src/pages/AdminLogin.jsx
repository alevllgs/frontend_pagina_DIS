import React from "react";
import Registro from "../components/Registro";

const AdminLogin = () => {
  return (
    <div>
      <h1>Registro para Administrador</h1>
      <Registro redirectTo="/administrador" /> {/* Redirige correctamente a /administrador */}
    </div>
  );
};

export default AdminLogin;

