import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CardProyecto.css";
import { ProyectoShape } from "../../shapes";
import { favContext } from "../../context/favContext";

function CardProyecto({ proyecto }) {
  const [fav, setFav] = useState('☆')
  const { favProj, setFavProj } = useContext(favContext)

  useEffect(() => {
    favProj.forEach(f => {
      if (f.id === proyecto.id) setFav('★')
    })
  }, [])

  const changeFav = () => {
    if (fav === '☆') {
      setFav('★')
      setFavProj([...favProj, proyecto])
    }
    else {
      setFav('☆')
      setFavProj(
        favProj.filter(f => f.id !== proyecto.id)
      )
    }
  }

  return (
    <div id="cardProyecto" className="card">
      <p onClick={changeFav} className="favourite">{fav}</p>
      <img id="imgCard" src={proyecto.imagenes[0]} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{proyecto.titulo}</h5>
        {/* <Rating rating={proyecto.rating} /> */}
        <p className="card-text">{proyecto.descripcion}</p>
        <p className="card-text">{proyecto.fecha_creacion}</p>
        <p className="card-text">
          <b>Tecnologia: </b>{proyecto.tecnologia}
        </p>
        <a href={proyecto.url}>Link del Repositorio</a><br />
        <Link id="verMasButton" to={"/proyectos/" + proyecto.id} className="btn btn-light">
          Ver Mas
        </Link>
      </div>
    </div>
  );
}

CardProyecto.propTypes = {
  proyecto: ProyectoShape.isRequired
}

export default CardProyecto
