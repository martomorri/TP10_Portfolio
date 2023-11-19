import './Skill.css'

export default function Skill({ logo }) {
    return (
        <div className='skill'>
            <img className='imageSkill' src={logo} alt="" width="80px" height="80px"></img>
        </div>
    )
}