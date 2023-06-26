import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NotFound404 from "./pages/NotFound404";

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound404 />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
  );
}

export default AppRoutes;
