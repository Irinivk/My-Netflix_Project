import { NavLink } from "react-router-dom";
import './comedytvshow.css'

const Comedytvshow = ({ com }) => {

    return (
        <NavLink to={`/videos/${com.id}/details`} className="tv">
            <img src={com.preview} alt="" className='dnmaftvposter' />
        </NavLink>
    )

}

export default Comedytvshow