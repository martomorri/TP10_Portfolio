import './Skill.css'

export default function Skill({ logo }) {
    return (
        <div className='skill'>
            <img className='imageSkill' src={logo} alt="" width="60px" height="60px"></img>
        </div>
    )
}