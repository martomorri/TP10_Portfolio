import { projectsContext } from "../../context/projectsContext"
import CardProyecto from "../../components/PageProyectos/CardProyecto"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { devsContext } from "../../context/devsContext"
import CardDev from "../../components/CardDev"
import '../css/Home.css'

function Home() {
    const { proyectos } = useContext(projectsContext)
    const devs = useContext(devsContext)

    return (
        <div id="home">
            <div id="about-us" className="row">
                <h1>Sobre Nosotros</h1>
                {devs.map(d => <CardDev dev={d}></CardDev>)}
            </div>
            <div id="proyectos" className="row">
                <h1>Nuestros Proyectos</h1>
                {proyectos.map(p => {
                    if (p.id <= 6) return <CardProyecto proyecto={p}></CardProyecto>
                    else return <></>;
                })}
                <Link to={"/proyectos"} className="btn " id="botonVerMas">Ver mas proyectos</Link>
            </div>
        </div>
    )
}

export default Home