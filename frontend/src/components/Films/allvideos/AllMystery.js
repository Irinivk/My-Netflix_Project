import { NavLink } from "react-router-dom";
import './Allmys.css'

const AllMystery = ({ mys }) => {

    return (
        <NavLink to={`/video/${mys.id}`} className="All">
            <img src={mys.preview} alt="" className='Allposter' />
        </NavLink>
    )

}

export default AllMystery