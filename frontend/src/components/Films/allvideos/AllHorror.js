import { NavLink } from "react-router-dom";
import './Allhor.css'

const AllHorror = ({ hor }) => {

    return (
        <NavLink to={`/videos/${hor.id}/details`} className="All">
            <img src={hor.preview} alt="" className='Allmsdfnposter' />
        </NavLink>
    )

}

export default AllHorror