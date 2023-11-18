import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { projectsContext } from "../../context/projectsContext"
import CarouselImages from "../../components/Proyecto/CarouselImages"

function Proyecto() {
    const { id } = useParams()
    const { proyectos } = useContext(projectsContext)
    const proyecto = proyectos[id - 1]

    return (
        <div style={{ padding: 10, margin: 10, marginTop: "60px" }} className="row">
            <div className="producto">
                <h1 className="display-1">{proyecto.titulo}</h1>
                <p>{proyecto.descripcion}</p>
            </div>
            <CarouselImages images={proyecto.imagenes} />
            <p>{proyecto.fecha_creacion}</p>
            <p>
                <b>Tecnologia: </b>{proyecto.tecnologia}
            </p>
            <a href={proyecto.url}>Link del Repositorio</a><br />
            <p></p>
            <Link to={"/"} className="btn" id="botonVerMas">Volver a la Home</Link>
        </div>
    )
}

export default Proyecto