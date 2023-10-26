import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './pages/js/Layout';
import Home from './pages/js/Home';
import PageProyectos from './pages/js/PageProyectos';
import Proyecto from './pages/js/Proyecto';
import Contacto from './pages/js/Contacto';
import NotFound from './pages/js/NotFound';
import './App.css';

function App() {
  /*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
  //
  // Scripts
  // 

  // window.addEventListener('DOMContentLoaded', event => {

  //   // Navbar shrink function
  //   var navbarShrink = function () {
  //     const navbarCollapsible = document.body.querySelector('#mainNav');
  //     if (!navbarCollapsible) {
  //       return;
  //     }
  //     if (window.scrollY === 0) {
  //       navbarCollapsible.classList.remove('navbar-shrink')
  //     } else {
  //       navbarCollapsible.classList.add('navbar-shrink')
  //     }

  //   };

  //   // Shrink the navbar 
  //   navbarShrink();

  //   // Shrink the navbar when page is scrolled
  //   document.addEventListener('scroll', navbarShrink);

  //   // Activate Bootstrap scrollspy on the main nav element
  //   const mainNav = document.body.querySelector('#mainNav');
  //   if (mainNav) {
  //     new bootstrap.ScrollSpy(document.body, {
  //       target: '#mainNav',
  //       rootMargin: '0px 0px -40%',
  //     });
  //   };

  //   // Collapse responsive navbar when toggler is visible
  //   const navbarToggler = document.body.querySelector('.navbar-toggler');
  //   const responsiveNavItems = [].slice.call(
  //     document.querySelectorAll('#navbarResponsive .nav-link')
  //   );
  //   responsiveNavItems.map(function (responsiveNavItem) {
  //     responsiveNavItem.addEventListener('click', () => {
  //       if (window.getComputedStyle(navbarToggler).display !== 'none') {
  //         navbarToggler.click();
  //       }
  //     });
  //   });

  // });

  const [proyectos, setProyectos] = useState([])

  useEffect(() => {
    axios.get('data.json')
      .then(res => setProyectos(res.data.proyectos))
  })

  return (
    <div data-spy="scroll" className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/proyectos" element={<PageProyectos proyectos={proyectos} />} />
            {/* <Route path="/categoria/:cat" element={<ProyectosXCategoria />} /> */}
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/proyectos/:id" element={<Proyecto />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
