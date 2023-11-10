import './CardDev.css'

export default function CardDev({ dev }) {
    return (
        <div id="cardDev" className="card">
            <img id="imgCard" src={dev.foto} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{dev.nombre}</h5>
                <p className="card-text">{dev.profesion}</p>
                <p className="card-text">{dev.fecha_nacimiento}</p>
            </div>
        </div>
    )
}