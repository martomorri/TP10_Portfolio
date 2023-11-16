import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PageProyectos from './pages/js/PageProyectos';
import Proyecto from './pages/js/Proyecto';
import Layout from './pages/js/Layout';
import { favContext } from './context/favContext';
import { projectsContext } from './context/projectsContext';
import { devsContext } from './context/devsContext';
import './App.css';
import Favoritos from './pages/js/Favoritos';

function App() {
  const [proyectos, setProyectos] = useState([])
  const [favProj, setFavProj] = useState([])
  const [devs, setDevs] = useState([])
  const [starColor, setStarColor] = useState("black")

  useEffect(() => {
    setDevs([...devs, { nombre: "Martin Morrison", skills: ["javascript", "react.js", "python", "c#", "sql"], foto: "images/morro.jpg", fecha_nacimiento: "2005-06-28", profesion: "Estudiante", linkedin: "", github: "" }, { nombre: "Lautaro Kaliszczak", skills: ["javascript", "react.js", "react-native", "css"], foto: "images/lauty.jpg", fecha_nacimiento: "2005-11-10", profesion: "Estudiante", linkedin: "", github: "" }])
  }, [])

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
      <projectsContext.Provider value={{ proyectos, setProyectos }}>
        <devsContext.Provider value={devs}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout />}></Route>
              <Route path={"/proyectos"} element={<PageProyectos />}></Route>
              <Route path={"/favoritos"} element={<Favoritos />}></Route>
              <Route path={"/proyectos/:id"} element={<Proyecto />}></Route>
            </Routes>
          </BrowserRouter>
        </devsContext.Provider>
      </projectsContext.Provider>
    </favContext.Provider>
  );
}

export default App;
