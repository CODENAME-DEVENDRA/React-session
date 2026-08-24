import React from "react";
import { Navigate } from "react-router-dom";

const isLoggedIn = true;
const Dashboard = () => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <p>Dashboard (only visible when logged in)</p>;
};

export default Dashboard;
