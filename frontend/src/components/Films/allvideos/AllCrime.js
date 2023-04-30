import { NavLink } from "react-router-dom";
import './AllCri.css'

const AllCrime = ({ cri }) => {

    return (
        <NavLink to={`/video/${cri.id}`} className="All">
            <img src={cri.preview} alt="" className='Allposter' />
        </NavLink>
    )

}

export default AllCrime