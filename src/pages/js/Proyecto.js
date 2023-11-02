import { useContext } from "react"
import { useParams } from "react-router-dom"
import { projectsContext } from "../../context/projectsContext"
import CarouselImages from "../../components/Proyecto/CarouselImages"

function Proyecto() {
    const { id } = useParams()
    const { proyectos } = useContext(projectsContext)
    const proyecto = proyectos[id - 1]

    return (
        <div className="row" style={{ margin: 5 }}>
            <div className="col">
                <div className="producto">
                    <h1 className="display-1">{proyecto.titulo}</h1>
                    <p>{proyecto.descripcion}</p>
                </div>
            </div>
            <div className="col">
                <CarouselImages images={proyecto.imagenes} />
            </div>
            <div className="col">
                <p>{proyecto.fecha_creacion}</p>
                <p>
                    <b>Tecnologia: </b>{proyecto.tecnologia}
                </p>
                <a href={proyecto.url}>Link del Repositorio</a>
            </div>
        </div>
    )
}

export default Proyecto