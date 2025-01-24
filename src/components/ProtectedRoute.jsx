import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { email } = useUser();

  if (!email) {
    return <Navigate to="/rem_login" replace />;
  }

  return children;
};

export default ProtectedRoute;
