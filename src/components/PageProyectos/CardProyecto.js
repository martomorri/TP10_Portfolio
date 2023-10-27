import React from "react";
import { Link } from "react-router-dom";
import "./CardProyecto.css";
// import Rating from "./Rating";
import { ProyectoShape } from "../../shapes";
import { Container } from "react-bootstrap";

function CardProyecto({ proyecto }) {
  return (
    <div id="cardProyecto" className="card" style={{ backgroundImage: `url(${proyecto.imagenes[0]})`, backgroundSize: "cover" }}>
      {/* <img id="imgCard" src={proyecto.imagenes[0]} className="card-img-top" alt="" /> */}
      <div className="card-body">
        <Container className="contenedorBlur">
          <Container className="contenedorTexto">
            <h5 className="card-title">{proyecto.titulo}</h5>
            {/* <Rating rating={proyecto.rating} /> */}
            <p className="card-text">{proyecto.descripcion}</p>
            <p className="card-text">{proyecto.fecha_creacion}</p>
            <p className="card-text">
              <b>Tecnologia: </b>{proyecto.tecnologia}
            </p>
            <a href={proyecto.url}>Link del Repositorio</a><br />
            <Link to={"/productos/" + proyecto.id} className="btn btn-light">
              Ver Mas
            </Link>
          </Container>
        </Container>
      </div>
    </div>
  );
}

CardProyecto.propTypes = {
  proyecto: ProyectoShape.isRequired
}

export default CardProyecto
