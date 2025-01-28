// src/components/Sidebar.tsx
import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarLink {
  to: string;
  label: string;
}

interface SidebarProps {
  links: SidebarLink[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <nav className="sidebar">
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
