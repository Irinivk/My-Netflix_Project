import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchMovies } from "../../store/videos"
import AllMoviesIndex from "../allMoviesIndex"


const AllMovies = () => {
    const dispatch = useDispatch()

    const movies = useSelector(state => Object.values(state.video))

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    // console.log(movies)
    return (
        <div>
            {movies.map(mov => (
                <AllMoviesIndex 
                mov ={mov}
                key={mov.id}
                /> 
            ))}
        </div>
    )

}

export default AllMovies