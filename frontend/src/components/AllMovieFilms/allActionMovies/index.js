import './action.css'
import { NavLink } from "react-router-dom";


const AllActionMovies = ({mov}) => {


    // for (let gen in mov) {
    //     console.log(gen)
    // }

    // console.log(mov.id)

    return (
        <NavLink to={`/videos/${mov.id}/details`} className="link">
            <img src={mov.preview} alt="" className='adasposter' />
        </NavLink>
        
    )
}

export default AllActionMovies