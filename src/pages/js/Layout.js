import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/Layout/Nav";
// import Footer from "../../components/Layout/Footer";
// import { arrayOf, string } from 'prop-types'
import "../css/Layout.css";


function Layout({ categories }) {
  return (
    <>
      <Nav />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default Layout
