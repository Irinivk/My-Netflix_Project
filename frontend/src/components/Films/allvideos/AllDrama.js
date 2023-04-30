import { NavLink } from "react-router-dom";
import './Alldra.css'

const AllDrama = ({ dra }) => {

    return (
        <NavLink to={`/video/${dra.id}`} className="All">
            <img src={dra.preview} alt="" className='Allposter' />
        </NavLink>
    )

}

export default AllDrama