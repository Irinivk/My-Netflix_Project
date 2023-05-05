import { NavLink } from "react-router-dom";
import './acttvshow.css'

const ActionTvShow = ({ mov }) => {

    return (
        <NavLink to={`/videos/${mov.id}/details`} className="tv">
            <img src={mov.preview} alt="" className='kjnadtvposter' />
        </NavLink>
    )

}

export default ActionTvShow