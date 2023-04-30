import { NavLink } from "react-router-dom";
import './crimetvshow.css'

const Crimetvshow = ({ cri }) => {

    return (
        <NavLink to={`/video/${cri.id}`} className="tv">
            <img src={cri.preview} alt="" className='tvposter' />
        </NavLink>
    )

}

export default Crimetvshow