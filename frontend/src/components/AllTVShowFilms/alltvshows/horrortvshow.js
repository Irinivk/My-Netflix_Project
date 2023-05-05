import { NavLink } from "react-router-dom";
import './horrortvshow.css'

const Horrortvshow = ({ hor }) => {

    return (
        <NavLink to={`/videos/${hor.id}/details`} className="tv">
            <img src={hor.preview} alt="" className='dllamdbhfdtvposter' />
        </NavLink>
    )

}

export default Horrortvshow