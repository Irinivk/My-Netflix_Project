import { NavLink } from "react-router-dom";
import './dramatvshow.css'

const Dramatvshow = ({ dra }) => {

    return (
        <NavLink to={`/video/${dra.id}`} className="tv">
            <img src={dra.preview} alt="" className='tvposter' />
        </NavLink>
    )

}

export default Dramatvshow