import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { displayUserVideos } from "../../store/videos";
import { NavLink } from "react-router-dom";
import UserFilmsIndex from "./userVideos";



const UserFilms = () => {

    const dispatch = useDispatch()

    const videos = useSelector(state => Object.values(state.video))

    useEffect(() => {
        dispatch(displayUserVideos())
    }, [dispatch])

    console.log(videos)
    return (
        <div>
            <h1>Manage Your Films</h1>
            { videos.length === 0 &&
                <NavLink to={'/videos/new'} className='create-a-new-spot' >Create a New Film</NavLink>
            }
            <div className="userVideoCards">
                {videos.map(vid => (
                    <UserFilmsIndex
                        vid={vid}
                        key={vid.id}
                    />
                ))}
            </div>
        </div>
        
    )
}

export default UserFilms