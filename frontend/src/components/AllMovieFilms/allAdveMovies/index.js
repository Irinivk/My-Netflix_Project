import './adv.css'
import { NavLink } from "react-router-dom";


const AllAdvMovies = ({adv}) => {


    return (
        <NavLink to={`/video/${adv.id}`} className="link">
            <img src={adv.preview} alt="" className='poster' />
        </NavLink>
        
    )

}


export default AllAdvMovies