import { NavLink } from "react-router-dom";
import './comedytvshow.css'

const Comedytvshow = ({ com }) => {

    return (
        <NavLink to={`/video/${com.id}`} className="tv">
            <img src={com.preview} alt="" className='tvposter' />
        </NavLink>
    )

}

export default Comedytvshow