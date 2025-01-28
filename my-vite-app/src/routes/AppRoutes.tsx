// src/routes/AppRoutes.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthProvider from "../context/AuthProvider";
import ProtectedRoute from "../components/ProtectedRoute";
import AnonymousLayout from "../layout/AnonymousLayout";
import AuthenticatedLayout from "../layout/AuthenticatedLayout";
import Login from "../pages/anonymous/Login";
import Dashboard from "../pages/authenticated/Dashboard";
import Users from "../pages/authenticated/Users";
import Settings from "../pages/authenticated/Settings";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Anonymous Routes */}
          <Route element={<AnonymousLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Authenticated Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AuthenticatedLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Route>

          {/* Admin-Only Routes */}
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route element={<AuthenticatedLayout />}>
              <Route path="/users" element={<Users />} />
            </Route>
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
