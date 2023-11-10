import { devsContext } from '../../context/devsContext'
import { useContext } from 'react'
import '../css/Skills.css'

export default function Skills() {
    const devs = useContext(devsContext)

    return (
        <div className="skills">
            <h1>Skills</h1>
            {devs.map(d => {
                return (
                    <div className='row'>
                        <div className='col-sm-2'><img src={d.foto} alt="" width="50px" height="auto" /></div>
                        {d.skills.map(s => <p>{s}</p>)}
                    </div>)
            })}
        </div>
    )
}