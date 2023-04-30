import { NavLink } from "react-router-dom";
import './advtvshow.css'

const Adventuretvshows = ({ adv }) => {

    return (
        <NavLink to={`/video/${adv.id}`} className="tv">
            <img src={adv.preview} alt="" className='tvposter' />
        </NavLink>
    )


}

export default Adventuretvshows