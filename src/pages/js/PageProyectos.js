import CardProyecto from "../../components/PageProyectos/CardProyecto"

function PageProyectos({ proyectos }) {
    return (
        proyectos.map(p => <CardProyecto proyecto={p}></CardProyecto>)
    )
}

export default PageProyectos