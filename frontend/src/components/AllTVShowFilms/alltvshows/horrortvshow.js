import { NavLink } from "react-router-dom";
import './horrortvshow.css'

const Horrortvshow = ({ hor }) => {

    return (
        <NavLink to={`/video/${hor.id}`} className="tv">
            <img src={hor.preview} alt="" className='tvposter' />
        </NavLink>
    )

}

export default Horrortvshow