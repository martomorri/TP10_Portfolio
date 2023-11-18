import { devsContext } from '../../context/devsContext'
import { useContext } from 'react'
import Skill from '../../components/Skills/Skill'
import '../css/Skills.css'

export default function Skills() {
    const devs = useContext(devsContext)

    return (
        <div className="skills">
            <h1>Skills</h1>
            {devs.map(d => {
                return (
                    <div className='row'>
                        <div className='col-sm-1'>
                            <div className='text-center'>
                                <img className='skillImage' src={d.foto} alt="" width="80px" height="80px" />
                                <p>{d.nombre}</p>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                        </div>
                        {d.skills.map(s => <Skill logo={'/images/' + s + '.png'}></Skill>)}
                    </div>)
            })}
        </div>
    )
}