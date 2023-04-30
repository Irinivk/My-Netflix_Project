import { NavLink } from "react-router-dom";
import './AllCom.css'

const AllComedy = ({ com }) => {
    console.log(com)
    return (
        <NavLink to={`/video/${com.id}`} className="All">
            <img src={com.preview} alt="" className='Allposter' />
        </NavLink>
    )

}   

export default AllComedy