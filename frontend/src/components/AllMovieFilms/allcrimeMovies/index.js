import './crime.css'
import { NavLink } from "react-router-dom";



const AllCrimeMovies = ({ cri }) => {


    return (
        <NavLink to={`/videos/${cri.id}/details`} className="link">
            <img src={cri.preview} alt="" className='asdjkbdposter' />
        </NavLink>
        
    )

}


export default AllCrimeMovies