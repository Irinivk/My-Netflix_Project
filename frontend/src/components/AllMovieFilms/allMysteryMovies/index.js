import './mystery.css'
import { NavLink } from "react-router-dom";



const AllMysteryMovies = ({ mys }) => {


    return (
        <NavLink to={`/videos/${mys.id}/details`} className="link">
             <img src={mys.preview} alt="" className='mabamnnposter'/>
        </NavLink>
    )

}


export default AllMysteryMovies