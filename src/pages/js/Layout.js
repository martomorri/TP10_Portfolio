import React from "react";
import { Outlet } from "react-router-dom";
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
