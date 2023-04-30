import { NavLink } from "react-router-dom";
import './acttvshow.css'

const ActionTvShow = ({ mov }) => {

    return (
        <NavLink to={`/video/${mov.id}`} className="tv">
            <img src={mov.preview} alt="" className='tvposter' />
        </NavLink>
    )

}

export default ActionTvShow