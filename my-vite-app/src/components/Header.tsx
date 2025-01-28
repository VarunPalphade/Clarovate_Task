// src/components/Header.tsx
import React from "react";
import { NavLink } from "react-router-dom";

interface HeaderLink {
  to: string;
  label: string;
}

interface HeaderProps {
  links: HeaderLink[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>App Name</h1>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
