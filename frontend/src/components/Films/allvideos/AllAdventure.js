import { NavLink } from "react-router-dom";
import './AllAdv.css'

const AllAdventure = ({ adv }) => {

    return (
        <NavLink to={`/videos/${adv.id}/details`} className="All">
            <img src={adv.preview} alt="" className='Alldjdbposter' />
        </NavLink>
    )

}

export default AllAdventure