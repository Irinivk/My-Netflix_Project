import { NavLink } from "react-router-dom";
import './Allact.css'

const Allaction = ({ mov }) => {

    return (
        <NavLink to={`/video/${mov.id}`} className="All">
            <img src={mov.preview} alt="" className='Allposter' />
        </NavLink>
    )

}

export default Allaction