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
import IndexPage from './pages/js/IndexPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const [proyectos, setProyectos] = useState([])
  const [favProj, setFavProj] = useState([])
  const devs = [
    {
      nombre: "Martin Morrison",
      skills: ["javascript", "reactjs", "python", "csharp", "sql"],
      foto: "/images/morro.png",
      fecha_nacimiento: "2005-06-28",
      profesion: "Estudiante",
      linkedin: "https://www.linkedin.com/in/martin-morrison-1b6378274/",
      github: "https://github.com/martomorri"
    },
    {
      nombre: "Lautaro Kaliszczak",
      skills: ["javascript", "reactjs", "css", "html", "sql"],
      foto: "/images/lauty.png",
      fecha_nacimiento: "2005-11-10",
      profesion: "Estudiante",
      linkedin: "https://www.linkedin.com/in/lautaro-kaliszczak-ben%C3%ADtez-92579a277/",
      github: "https://github.com/LautyKali"
    }
  ]

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

  let theme = createTheme({});

  theme = createTheme(theme, {
    palette: {
      gold: theme.palette.augmentColor({
        color: {
          main: '#ffd700',
        },
        name: 'gold',
      }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <favContext.Provider value={{ favProj, setFavProj }}>
        <projectsContext.Provider value={{ proyectos, setProyectos }}>
          <devsContext.Provider value={devs}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Layout />}>
                  <Route index element={<IndexPage />}></Route>
                  <Route path={"/proyectos"} element={<PageProyectos />}></Route>
                  <Route path={"/favoritos"} element={<Favoritos />}></Route>
                  <Route path={"/proyectos/:id"} element={<Proyecto />}></Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </devsContext.Provider>
        </projectsContext.Provider>
      </favContext.Provider>
    </ThemeProvider>
  );
}

export default App;
