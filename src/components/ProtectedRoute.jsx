import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { email, rol } = useUser();

  // Si el usuario no está autenticado, redirigir al login
  if (!email) {
    return <Navigate to="/rem_login" replace />;
  }

  // Si la ruta es solo para administradores y el rol no es administrador, redirigir al home
  if (adminOnly && rol !== "administrador") {
    return <Navigate to="/" replace />;
  }

  // Renderizar los hijos si pasa las validaciones
  return children;
};

export default ProtectedRoute;
