// src/layout/AuthenticatedLayout.tsx
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { AuthContext } from "../context/AuthProvider";
import { roleConfig } from "../config/roleConfig";


const AuthenticatedLayout: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext || !authContext.user) return null;

  const { user } = authContext;
  const { sidebarLinks, headerLinks } = roleConfig[user.role];

  return (
    <div className="authenticated-layout">
      <Header links={headerLinks} />
      <div className="layout-body">
        <Sidebar links={sidebarLinks} />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
