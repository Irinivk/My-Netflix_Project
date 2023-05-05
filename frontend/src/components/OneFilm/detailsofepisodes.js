import './detailsofepisodes.css'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { displayVideo } from '../../store/videos';
// import { fetchTVShows } from '../../store/videos';
import { displayEpisode } from '../../store/videos';

const Episodedetails = () => {
    const { episodeId } = useParams()

    const dispatch = useDispatch()


    // const user = useSelector(state => state.session.user);
    const video = useSelector((state) =>
        state.video ? state.video[episodeId] : null
    );

    useEffect(() => {
        dispatch(displayEpisode(episodeId))
    }, [dispatch, episodeId])

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

export default Episodedetails