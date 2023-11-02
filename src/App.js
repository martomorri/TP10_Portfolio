import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './pages/js/Layout';
import Home from './pages/js/Home';
import PageProyectos from './pages/js/PageProyectos';
import Proyecto from './pages/js/Proyecto';
import Contacto from './pages/js/Contacto';
import NotFound from './pages/js/NotFound';
import { favContext } from './context/favContext';
import { projectsContext } from './context/projectsContext';
import './App.css';

function App() {
  const [proyectos, setProyectos] = useState([])
  const [favProj, setFavProj] = useState([])

  useEffect(() => {
    axios.get('data.json')
      .then(res => {
        setProyectos(res.data.proyectos)
      })
  }, [])

  useEffect(() => {
    localStorage.length !== 0 ? setFavProj(JSON.parse(localStorage.getItem("favProj"))) : setFavProj([])
  }, [])

  useEffect(() => {
    localStorage.setItem("favProj", JSON.stringify(favProj))
  }, [favProj])

  return (
    <favContext.Provider value={{ favProj, setFavProj }}>
      <projectsContext.Provider value={{proyectos, setProyectos}}>
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
      </projectsContext.Provider>
    </favContext.Provider>
  );
}

export default App;
