import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CardProyecto.css";
import { ProyectoShape } from "../../shapes";
import { favContext } from "../../context/favContext";
import { color } from "@mui/system";

function CardProyecto({ proyecto }) {
  const [fav, setFav] = useState('☆')
  const { favProj, setFavProj } = useContext(favContext)
  const [starColor, setStarColor] = useState("black");
  const [starFavColor, setStarFavColor] = useState("gold")

  useEffect(() => {
    favProj.forEach(f => {
      if (f.id === proyecto.id) setFav('★') 
    })
  }, [])



  const changeFav = () => {
    if (fav === '☆') {
      setFav('★')
      setFavProj([...favProj, proyecto])
      setStarColor('gold');
    }
    else {
      setFav('☆');
      setFavProj(
        favProj.filter(f => f.id !== proyecto.id)
      )
      setStarColor("black");
    }
  }

  return (
    <div id="cardProyecto" className="card">
      <p onClick={() => changeFav()} style={{color: fav === '☆' ? starColor : starFavColor}} className="favourite">{fav}</p>
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
