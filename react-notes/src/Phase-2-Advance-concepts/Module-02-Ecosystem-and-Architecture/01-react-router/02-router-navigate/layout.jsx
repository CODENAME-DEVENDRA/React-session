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
        <NavLink to="/login" style={linkStyle}>
          Login
        </NavLink>
        <NavLink to="/search" style={linkStyle}>
          Search
        </NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
