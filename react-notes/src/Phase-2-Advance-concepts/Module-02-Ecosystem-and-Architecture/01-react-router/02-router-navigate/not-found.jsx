import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  return (
    <div>
      <p>
        404 - no route found for <code>{location.pathname}</code>{" "}
      </p>
      <NavLink to="/"> Back to home</NavLink>
    </div>
  );
};

export default NotFound;
