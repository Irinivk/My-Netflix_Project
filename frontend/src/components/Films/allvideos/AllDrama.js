import { NavLink } from "react-router-dom";
import './Alldra.css'

const AllDrama = ({ dra }) => {

    return (
        <NavLink to={`/videos/${dra.id}/details`} className="All">
            <div className="Allfilmimages">
                <img src={dra.preview} alt="" className='AlldbhBDposter' />
            </div>
            
        </NavLink>
    )

}

export default AllDrama