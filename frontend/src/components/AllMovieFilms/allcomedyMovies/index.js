import './comedy.css'
import { NavLink } from "react-router-dom";


const AllComedyMovies = ({ com }) => {


    return (
        <NavLink to={`/video/${com.id}`} className="link">
            <img src={com.preview} alt="" className='poster' />
        </NavLink>
        
    )

}


export default AllComedyMovies