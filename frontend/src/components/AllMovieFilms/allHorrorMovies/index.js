import './horror.css'
import { NavLink } from "react-router-dom";



const AllHorrorMovies = ({ hor }) => {

    return (
        <NavLink to={`/video/${hor.id}`} className="link">
            <img src={hor.preview} alt="" className='poster' />
        </NavLink>
        
    )

}


export default AllHorrorMovies