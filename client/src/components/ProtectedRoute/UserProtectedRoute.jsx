import React from "react";
import { useAuth } from "../../context/authContext";
import { Navigate } from "react-router-dom";

const UserProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return <>{children}</>;
  }
};

export default UserProtectedRoute;
