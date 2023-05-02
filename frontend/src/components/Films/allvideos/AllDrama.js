import { NavLink } from "react-router-dom";
import './Alldra.css'

const AllDrama = ({ dra }) => {

    return (
        <NavLink to={`/video/${dra.id}`} className="All">
            <div className="Allfilmimages">
                <img src={dra.preview} alt="" className='Allposter' />
            </div>
            
        </NavLink>
    )

}

export default AllDrama