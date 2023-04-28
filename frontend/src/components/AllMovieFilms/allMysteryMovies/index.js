import './mystery.css'
import { NavLink } from "react-router-dom";



const AllMysteryMovies = ({ mys }) => {


    return (
        <NavLink to={`/video/${mys.id}`} className="link">
             <img src={mys.preview} alt="" className='poster'/>
        </NavLink>
    )

}


export default AllMysteryMovies