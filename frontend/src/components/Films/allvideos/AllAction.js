import { NavLink } from "react-router-dom";
import './Allact.css'

const Allaction = ({ mov }) => {

    return (
        <NavLink to={`/video/${mov.id}`} className="All">
            <img src={mov.preview} alt="" className='Alldaposter' />
        </NavLink>
    )

}

export default Allaction