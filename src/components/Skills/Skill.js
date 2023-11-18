import './Skill.css'

export default function Skill({ logo }) {
    return (
        <div className='skill'>
            <img className='imageSkill' src={logo} alt="" width="50px" height="50px"></img>
        </div>
    )
}