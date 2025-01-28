// src/components/ProtectedRoute.tsx
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

interface ProtectedRouteProps {
  allowedRoles?: string[]; // Optional list of roles allowed to access the route
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const authContext = useContext(AuthContext);

  if (!authContext || !authContext.user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  const { user } = authContext;

  // Check if the user's role is allowed (if roles are specified)
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />; // Redirect to a safe page
  }

  // If authenticated and authorized, render child routes
  return <Outlet />;
};

export default ProtectedRoute;
