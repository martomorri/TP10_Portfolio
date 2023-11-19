import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CardProyecto.css";
import { ProyectoShape } from "../../shapes";
import { favContext } from "../../context/favContext";

function CardProyecto({ proyecto }) {
  const [fav, setFav] = useState('☆')
  const { favProj, setFavProj } = useContext(favContext)
  const [starColor, setStarColor] = useState("black");
  const starFavColor = "gold"

  useEffect(() => {
    favProj.forEach(f => {
      if (f.id === proyecto.id) setFav('★')
    })
  }, [favProj, proyecto.id])



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

  const cardStyle = {
    backgroundImage: `url(${proyecto.imagenes[0]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div id="cardProyecto" className="card" style={cardStyle} >
      <p onClick={() => changeFav()} style={{ color: fav === '☆' ? starColor : starFavColor }} className="favourite">{fav}</p>
      <div className="fondoBody">
        <div className="textoBody">
        <h5 className="card-title">{proyecto.titulo}</h5>
        <p className="card-text">{proyecto.descripcion}</p>
        <p className="card-text">{proyecto.fecha_creacion}</p>
        <p className="card-text">
          <b>Tecnologia: </b>{proyecto.tecnologia}
        </p>
        <a  href={proyecto.url}>Link del Repositorio</a><br />
      </div>
      <Link id="verMasButton" to={"/proyectos/" + proyecto.id} className="btn">
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
