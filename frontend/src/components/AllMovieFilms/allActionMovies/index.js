import './action.css'
import { NavLink } from "react-router-dom";


const AllActionMovies = ({mov}) => {


    // for (let gen in mov) {
    //     console.log(gen)
    // }

    // console.log(mov)

    return (
        <NavLink to={`/video/${mov.id}`} className="link">
            <img src={mov.preview} alt="" className='poster' />
        </NavLink>
        
    )
}

export default AllActionMovies