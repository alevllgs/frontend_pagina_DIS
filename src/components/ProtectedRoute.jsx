import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { email, rol } = useUser();

  // Si el usuario no está autenticado, redirigir al login
  if (!email) {
    return <Navigate to="/rem_login" replace />;
  }

  // Si la ruta es solo para ciertos roles y el usuario no tiene uno permitido, redirigir al home
  if (allowedRoles.length > 0 && !allowedRoles.includes(rol)) {
    return <Navigate to="/" replace />;
  }

  // Renderizar los hijos si pasa las validaciones
  return children;
};

export default ProtectedRoute;

