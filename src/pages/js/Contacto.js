import React from 'react';
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
          <label htmlFor="fecha">Fecha:</label>
          <input className='form-control' type="date" id="fecha" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea className='form-control' id="message" rows="4"></textarea>
        </div>
        <div className='row'>
          <button id='btn-submit' type="submit" class="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Contacto;
