import './adv.css'
import { NavLink } from "react-router-dom";


const AllAdvMovies = ({adv}) => {


    return (
        <NavLink to={`/videos/${adv.id}/details`} className="link">
            <img src={adv.preview} alt="" className='asdaposter' />
        </NavLink>
        
    )

}


export default AllAdvMovies