import { useContext } from "react"
import CardProyecto from "../../components/PageProyectos/CardProyecto"
import { favContext } from "../../context/favContext"
import { Link } from "react-router-dom"
import '../css/PageProyectos.css'

function Favoritos() {
    const { favProj } = useContext(favContext)

    return (
        <>
            <div id="cards" className="row">
                {favProj.map(p => <CardProyecto proyecto={p}></CardProyecto>)}
                <Link className="btn btn-primary" to={"/"}>Volver a la Home</Link>
            </div>
        </>
    )
}

export default Favoritos