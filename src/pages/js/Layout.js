import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import Contacto from "./Contacto";
import Nav from "../../components/Layout/Nav";
import "../css/Layout.css";


function Layout() {
  return (
    <>
      <Nav />
      <div style={{ padding: 10 }}>
        <div id="home"><Home /></div>
        <div id="skills"><span><Skills /></span></div>
        <div id="form-contacto"><span><Contacto /></span></div>
      </div>
      <Outlet />
    </>
  );
}

export default Layout
