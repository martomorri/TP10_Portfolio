import { useForm } from 'react-hook-form'
import "../css/Contacto.css";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  const contacto = {
    nombre: watch("nombre"),
    mensaje: watch("mensaje")
  }

  console.log(contacto)

  return (
    <div className="contact-form">
      <h1>Contactanos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input className='form-control' type="text" {...register("nombre", { required: true })} />
          {errors.nombre && <span className='error'>Este campo es obligatorio</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea className='form-control' rows="4" {...register("mensaje", { required: true })}></textarea>
          {errors.mensaje && <span className='error'>Este campo es obligatorio</span>}
        </div>
        <div className='row'>
          <input type='submit' className="btn" id="botonVerMas" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default Contacto;
