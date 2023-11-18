import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import './CardDev.css'

export default function CardDev({ dev }) {
    const calcularEdad = () => {
        let hoy = new Date()
        let fecha_nac = new Date(dev.fecha_nacimiento)
        let edad = hoy.getFullYear() - fecha_nac.getFullYear()
        let m = hoy.getMonth() - fecha_nac.getMonth()

        if (m < 0 || (m === 0 && hoy.getDate() < fecha_nac.getDate())) {
            edad--
        }
        return edad
    }

    const edad = calcularEdad();

    return (
        <div className='col'>
            <div id="cardDev" className="card">
                <img id="imgCard" src={dev.foto} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{dev.nombre}</h5>
                    <p className="card-text">{edad} años</p>
                    <p className="card-text">{dev.profesion}</p>
                    <a href={dev.linkedin} className='social'>
                        <LinkedInIcon className='icon' sx={{ fontSize: 40 }} />
                    </a>
                    <a href={dev.github} className='social'>
                        <GitHubIcon className='icon' sx={{ fontSize: 40 }} />
                    </a>
                </div>
            </div>
        </div>
    )
}