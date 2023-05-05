// import { useModal } from "../../../store/context/Modal"
import { NavLink } from "react-router-dom";


const detailofMo = ({mov}) => {
    <NavLink to={`/video/${mov.id}`} className="All">
         <img src={mov.preview} alt="" className='Alldaposter'/>
    </NavLink>
}

export default detailofMo