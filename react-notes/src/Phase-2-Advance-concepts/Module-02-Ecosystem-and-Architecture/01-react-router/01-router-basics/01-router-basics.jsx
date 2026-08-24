import React from "react";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import { About, Home } from "./pages";
import Layout from "./layout";
import Users from "./users";
import UserDetail from "./userDetail";

//React router - client-side routing (pages without full reload)
//npm i react-router-dom

//MemoryRouter - (no address bar) router that keeps URL in memory
//Routes - wrapper that picks best-matching <Route/> for current URL
//Route - maps a path to an element

const RouterBasics = () => {
  return (
    <div>
      <h3>React Router basics</h3>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="users" element={<Users />}>
              <Route path=":id" element={<UserDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterBasics;
