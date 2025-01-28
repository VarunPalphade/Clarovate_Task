// src/layout/AnonymousLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";

const AnonymousLayout: React.FC = () => {
  return (
    <div className="anonymous-layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AnonymousLayout;
