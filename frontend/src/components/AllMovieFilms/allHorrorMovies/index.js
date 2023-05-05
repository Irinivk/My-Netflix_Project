import './horror.css'
import { NavLink } from "react-router-dom";



const AllHorrorMovies = ({ hor }) => {

    return (
        <div className='horrorm'>
            <NavLink to={`/videos/${hor.id}/details`} className="link">
                <img src={hor.preview} alt="" className='kNdadlkfnposter' />
            </NavLink>
        </div>
       
        
    )

}


export default AllHorrorMovies