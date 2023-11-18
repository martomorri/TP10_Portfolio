import React from "react";
import { Outlet } from "react-router-dom";
// import Home from "./Home";
// import Skills from "./Skills";
// import Contacto from "./Contacto";
import Nav from "../../components/Layout/Nav";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default Layout
