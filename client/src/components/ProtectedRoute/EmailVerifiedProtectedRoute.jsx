import React from "react";
import { useAuth } from "../../context/authContext";
import { Navigate } from "react-router-dom";

const EmailVerifiedProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }

  if (user && user.emailVerified === false) {
    return <Navigate to="/verify-email" />;
  } else {
    return <>{children}</>;
  }
};

export default EmailVerifiedProtectedRoute;
