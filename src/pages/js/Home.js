import { projectsContext } from "../../context/projectsContext"
import CardProyecto from "../../components/PageProyectos/CardProyecto"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { devsContext } from "../../context/devsContext"
import CardDev from "../../components/CardDev"
import '../css/Home.css'

function Home() {
    const {proyectos} = useContext(projectsContext)
    const devs = useContext(devsContext)

    return (
        <div id="home">
            <div id="cards" className="row">
                {devs.map(d => <CardDev dev={d}></CardDev>)}
            </div>
            <div id="cards" className="row">
                {proyectos.map(p => {
                    if (p.id <= 6) return <CardProyecto proyecto={p}></CardProyecto>
                })}
                <Link to={"/proyectos"} className="btn btn-primary">Ver mas proyectos</Link>
            </div>
        </div>
    )
}

export default Home