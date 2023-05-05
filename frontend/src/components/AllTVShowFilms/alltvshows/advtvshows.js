import { NavLink } from "react-router-dom";
import './advtvshow.css'

const Adventuretvshows = ({ adv }) => {

    return (
        <NavLink to={`/videos/${adv.id}/details`} className="tv">
            <img src={adv.preview} alt="" className='adbnmsnbtvposter' />
        </NavLink>
    )


}

export default Adventuretvshows