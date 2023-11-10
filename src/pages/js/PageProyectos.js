import { useContext } from "react"
import CardProyecto from "../../components/PageProyectos/CardProyecto"
import { projectsContext } from "../../context/projectsContext"
import { Link } from "react-router-dom"
import '../css/PageProyectos.css'

function PageProyectos() {
    const { proyectos } = useContext(projectsContext)

    return (
        <div style={{textAlign: "center"}}>
            <div id="cards" className="row">
                {proyectos.map(p => <CardProyecto proyecto={p}></CardProyecto>)}
                <Link className="btn btn-primary" to={"/"}>Volver a la Home</Link>
            </div>
        </div>
    )
}

export default PageProyectos