import React from "react";
import { useAuth } from "../../context/authContext";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (loading) return <h1>Loading</h1>;

  return <>{children}</>;
};

export default ProtectedRoute;
