import { NavLink } from "react-router-dom";
import './Allhor.css'

const AllHorror = ({ hor }) => {

    return (
        <NavLink to={`/video/${hor.id}`} className="All">
            <img src={hor.preview} alt="" className='Allposter' />
        </NavLink>
    )

}

export default AllHorror