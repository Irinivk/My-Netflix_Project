import { NavLink } from "react-router-dom";
import './dramatvshow.css'

const Dramatvshow = ({ dra }) => {

    return (
        <NavLink to={`/videos/${dra.id}/details`} className="tv">
            <img src={dra.preview} alt="" className='danmatvposter' />
        </NavLink>
    )

}

export default Dramatvshow