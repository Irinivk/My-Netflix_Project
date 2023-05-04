import './horror.css'
import { NavLink } from "react-router-dom";



const AllHorrorMovies = ({ hor }) => {

    return (
        <div className='horrorm'>
             <NavLink to={`/video/${hor.id}`} className="link">
                <img src={hor.preview} alt="" className='poster' />
            </NavLink>
        </div>
       
        
    )

}


export default AllHorrorMovies