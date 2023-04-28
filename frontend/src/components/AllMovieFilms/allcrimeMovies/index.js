import './crime.css'
import { NavLink } from "react-router-dom";



const AllCrimeMovies = ({ cri }) => {


    return (
        <NavLink to={`/video/${cri.id}`} className="link">
            <img src={cri.preview} alt="" className='poster' />
        </NavLink>
        
    )

}


export default AllCrimeMovies