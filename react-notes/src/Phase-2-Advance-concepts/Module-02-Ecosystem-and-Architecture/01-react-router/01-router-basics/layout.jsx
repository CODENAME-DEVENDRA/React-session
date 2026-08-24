import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const linkStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    margin: 12,
    textDecoration: "none",
    color: "#2a3dae",
  });

  return (
    <div>
      <nav>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>
        <NavLink to="/users" style={linkStyle}>
          Users
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
