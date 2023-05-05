import { NavLink } from "react-router-dom";
import './AllCom.css'

const AllComedy = ({ com }) => {
    console.log(com)
    return (
        <NavLink to={`/videos/${com.id}/details`} className="All">
            <img src={com.preview} alt="" className='Alldsfsdposter' />
        </NavLink>
    )

}   

export default AllComedy