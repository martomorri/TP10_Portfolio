import { useContext } from "react"
import CardProyecto from "../../components/PageProyectos/CardProyecto"
import { favContext } from "../../context/favContext"
import { Link } from "react-router-dom"
import '../css/PageProyectos.css'

function Favoritos() {
    const { favProj } = useContext(favContext)

    return favProj.length > 0 ? (
        <div id="home">
            <div id="home">
                <h1>Favoritos</h1>
                <div className="row">
                    {favProj.map(p => <CardProyecto proyecto={p}></CardProyecto>)}
                    <Link to={"/"} className="btn" id="botonVerMas">Volver a la Home</Link>
                </div>
            </div>
        </div>
    ) : (
        <div id="home">
            <div id="home">
                <h1>Favoritos</h1>
                <div className="row">
                    <p>No hay ningun proyecto agregado a favoritos</p>
                    <Link to={"/"} className="btn" id="botonVerMas">Volver a la Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Favoritos