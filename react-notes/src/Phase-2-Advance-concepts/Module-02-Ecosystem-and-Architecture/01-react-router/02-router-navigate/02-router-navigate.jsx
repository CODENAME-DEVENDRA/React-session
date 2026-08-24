import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import Login from "./login";
import Dashboard from "./dashboard";

const RouterNavigate = () => {
  return (
    <div>
      <h3>React Router - Navigation</h3>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterNavigate;
