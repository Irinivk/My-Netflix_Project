import { fetchVideos } from "../../../store/videos"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import FetchVideosIndex from "../allvideosindex.js/index.js"


const Allfilms = () => {
    const dispatch = useDispatch()

    const videos = useSelector(state => Object.values(state.video))

    useEffect(() => {
        dispatch(fetchVideos())
    })
    //  console.log(videos)
    return (
        <div>
            {videos.map(video => (
                <FetchVideosIndex
                    video={video}
                    key={video.id}
                />
            ))}
        </div>
    )
}

export default Allfilms