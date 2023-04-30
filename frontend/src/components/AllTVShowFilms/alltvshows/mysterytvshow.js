import { NavLink } from "react-router-dom";
import './mysterytvshow.css'

const Mysterytvshow = ({ mys }) => {

    return (
        <NavLink to={`/video/${mys.id}`} className="tv">
            <img src={mys.preview} alt="" className='tvposter' />
        </NavLink>
    )

}

export default Mysterytvshow