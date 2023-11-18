import { Link } from 'react-router-dom'
import "../css/Contacto.css";

const Contacto = () => {
  return (
    <div className="contact-form">
      <h1>Contactanos</h1>
      <form action="mailto:martomorri@gmail.com" method="get" enctype="text/plain">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input className='form-control' type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea className='form-control' id="message" rows="4"></textarea>
        </div>
        <div className='row'>
          <Link to={"/proyectos"} className="btn " id="botonVerMas">Ver mas proyectos</Link>
        </div>
      </form>
    </div>
  );
};

export default Contacto;
