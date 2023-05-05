import { NavLink } from "react-router-dom";
import './Allmys.css'

const AllMystery = ({ mys }) => {

    return (
        <NavLink to={`/videos/${mys.id}/details`} className="All">
            <img src={mys.preview} alt="" className='Allaknjfposter' />
        </NavLink>
    )

}

export default AllMystery