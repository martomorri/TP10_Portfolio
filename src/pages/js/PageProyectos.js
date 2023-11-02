import CardProyecto from "../../components/PageProyectos/CardProyecto"
import '../css/PageProyectos.css'

function PageProyectos({ proyectos }) {
    return (
        <div id="cards" className="row">
            {proyectos.map(p => <CardProyecto proyecto={p}></CardProyecto>)}
        </div>
    )
}

export default PageProyectos