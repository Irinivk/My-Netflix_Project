import { NavLink } from "react-router-dom";
import './AllCri.css'

const AllCrime = ({ cri }) => {

    return (
        <NavLink to={`/videos/${cri.id}/details`} className="All">
            <img src={cri.preview} alt="" className='Alladsasposter' />
        </NavLink>
    )

}

export default AllCrime