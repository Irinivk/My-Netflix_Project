import { NavLink } from "react-router-dom";
import './drama.css'

const AlldramaMovies = ({ dra }) => {

    return (
        <NavLink to={`/video/${dra.id}`} className="link">
            <img src={dra.preview} alt="" className='poster' />
        </NavLink>

    )

}

export default AlldramaMovies