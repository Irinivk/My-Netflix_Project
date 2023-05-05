import './comedy.css'
import { NavLink } from "react-router-dom";


const AllComedyMovies = ({ com }) => {


    return (
        <NavLink to={`/videos/${com.id}/details`} className="link">
            <img src={com.preview} alt="" className='KDBHDBposter' />
        </NavLink>
        
    )

}


export default AllComedyMovies