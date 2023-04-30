import { NavLink } from 'react-router-dom';
import OpenModalMenuItem from '../Navigation/OpenModulMenyItem';
import DeleteUserVideo from '../DeleteUserFilm';
import './detailuserfilm.css'


const UserFilmsIndex = ({ vid }) => {


    console.log(vid)

    return (
        <div className='alldetailuservideo'>
            <div className='imagesuser'>
                <NavLink to={`/video/${vid.id}`}>
                    <img src={vid.preview} alt=''></img>
                </NavLink>
            </div>
            <div className='user-buttons'>
                {/* <NavLink to={`/spots/${spot.id}/edit`} className='user-update'> */}
                    <button type="button">Update</button>
                {/* </NavLink> */}

                <OpenModalMenuItem
                    itemText="Delete"
                    className='user-delete'
                    modalComponent={<DeleteUserVideo vid={vid} />}
                />
            </div>
        </div>
    )
}


export default UserFilmsIndex