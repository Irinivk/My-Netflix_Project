import { NavLink } from "react-router-dom";
import './mysterytvshow.css'

const Mysterytvshow = ({ mys }) => {

    return (
        <NavLink to={`/videos/${mys.id}/details`} className="tv">
            <img src={mys.preview} alt="" className='afkdlnstvposter' />
        </NavLink>
    )

}

export default Mysterytvshow