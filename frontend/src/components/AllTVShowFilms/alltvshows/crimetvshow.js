import { NavLink } from "react-router-dom";
import './crimetvshow.css'

const Crimetvshow = ({ cri }) => {

    return (
        <NavLink to={`/videos/${cri.id}/details`} className="tv">
            <img src={cri.preview} alt="" className='mndDFNtvposter' />
        </NavLink>
    )

}

export default Crimetvshow