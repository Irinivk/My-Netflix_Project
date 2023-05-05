import { NavLink } from "react-router-dom";
import './drama.css'

const AlldramaMovies = ({ dra }) => {

    return (
        <NavLink to={`/videos/${dra.id}/details`} className="link">
            <img src={dra.preview} alt="" className='sadadposter' />
        </NavLink>

    )

}

export default AlldramaMovies