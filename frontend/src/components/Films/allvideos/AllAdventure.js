import { NavLink } from "react-router-dom";
import './AllAdv.css'

const AllAdventure = ({ adv }) => {

    return (
        <NavLink to={`/video/${adv.id}`} className="All">
            <img src={adv.preview} alt="" className='Allposter' />
        </NavLink>
    )

}

export default AllAdventure