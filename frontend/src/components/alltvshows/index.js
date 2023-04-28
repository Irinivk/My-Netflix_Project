import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchTVShows } from "../../store/videos"
import AllTVShowsIndex from "../alltvshowsindex"


const AllTVShows = () => {
    const dispatch = useDispatch()

    const tvshows = useSelector(state => Object.values(state.video))

    useEffect(() => {
        dispatch(fetchTVShows())
    }, [dispatch])

    // console.log(tvshows)
    return (
        <div>
            {tvshows.map(tv => (
                <AllTVShowsIndex
                    tv={tv}
                    key={tv.id}
                />
            ))}
        </div>
    )

}

export default AllTVShows