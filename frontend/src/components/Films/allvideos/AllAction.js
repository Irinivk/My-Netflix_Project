import { NavLink } from "react-router-dom";
import './Allact.css'
// import OpenModalMenuItem from "../../Navigation/OpenModulMenyItem";
// import detailofMo from "./detailofAllmovies";

const Allaction = ({ mov }) => {



    return (

        <NavLink to={`/videos/${mov.id}/details`} className="All">
            <img src={mov.preview} alt="" className='Alldaposter'/>
        </NavLink>
    
      
    )

}

export default Allaction