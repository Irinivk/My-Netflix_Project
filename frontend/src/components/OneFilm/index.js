import './Onefilm.css'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayVideo } from '../../store/videos';





const LoadOneVideo = () => {

    const { videoId } = useParams()

    const dispatch = useDispatch()


    const user = useSelector(state => state.session.user);
    const video = useSelector((state) =>
        state.video ? state.video[videoId] : null
    );

    useEffect(() => {
        dispatch(displayVideo(videoId))
    }, [dispatch, videoId])

    if (!video) return null

    console.log(video)

    return (
        <div className='onevideo'>
        <video controls width="250"
        poster={video.preview}
        >
                <source
                    src={video.url}
                    /> 
        </video>
        </div>
        
    )
}


export default LoadOneVideo