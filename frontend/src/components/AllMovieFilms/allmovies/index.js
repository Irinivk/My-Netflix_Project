import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchMovies } from "../../../store/videos"
import AllActionMovies from "../allActionMovies"
import AllAdvMovies from "../allAdveMovies"
import AllComedyMovies from "../allcomedyMovies"
import AllCrimeMovies from "../allcrimeMovies"
import AllMysteryMovies from "../allMysteryMovies"
import AllHorrorMovies from "../allHorrorMovies"
import AlldramaMovies from "../allDramaMovies"
import './allmovies.css'


const AllMovies = () => {
    const dispatch = useDispatch()

    const movies = useSelector(state => Object.values(state.video))

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    
    let genreArrayAction = [];
    let genreArrayAdventure = [];
    let genreArrayComedy = [];
    let genreArrayCrime = [];
    let genreArrayMystery = [];
    let genreArrayHorror = [];
    let genreArrayDrama = [];
    for (let i = 0; i < movies.length; i++) {
        // console.log(movies[i].genre)
        if (!movies[i].genre) return null
        // for (let j = 0; j < movies[i].Genres.length; j++) {
            // console.log(movies[i].Genres[j].name)
            if (movies[i].genre === 'Action') {
                genreArrayAction.push(movies[i])
               
            }
            if (movies[i].genre === 'Adventure') {
                genreArrayAdventure.push(movies[i])
            }
            if (movies[i].genre === 'Comedy') {
                genreArrayComedy.push(movies[i])
            }
            if (movies[i].genre.includes('Crime')) {
                genreArrayCrime.push(movies[i])
            }
            if (movies[i].genre.includes('Mystery')) {
                genreArrayMystery.push(movies[i])
            }
            if (movies[i].genre.includes('Horror')) {
                genreArrayHorror.push(movies[i])
            }
            if (movies[i].genre.includes('Drama')) {
                genreArrayDrama.push(movies[i])
            }
        // } 
    }

    
    // console.log(genreArrayHorror)
    // console.log(movies)
    return (
        <div className="Movie_Posters">
            <h1>Action</h1>
            <div className="actionbox">
                {genreArrayAction.map(mov => (
                <AllActionMovies
                className='imga'
                mov ={mov}
                key={mov.id}
                /> 
            ))}
            </div>
            <h1>Adventure</h1>
            <div className="advboxes">
                {genreArrayAdventure.map(adv => (
                <AllAdvMovies 
                    className='imga'
                adv={adv}
                key={adv.id}
                />
            ))}
            </div>
            <h1>Comedy</h1>
            <div className="comedyboxes">
                {genreArrayComedy.map(com => (
                <AllComedyMovies
                    className='imga'
                    com={com}
                    key={com.id}
                />
            ))}
            </div>
            <h1>Crime</h1>
            <div className="crimeboxes">
                {genreArrayCrime.map(cri => (
                <AllCrimeMovies
                    className='imga'
                    cri={cri}
                    key={cri.id}
                />
            ))}
            </div>
            <h1>Mystery</h1>
            <div className="mysteryboxes">
                {genreArrayMystery.map(mys => (
                <AllMysteryMovies
                    className='imga'
                    mys={mys}
                    key={mys.id}
                />
            ))}
            </div>
            <h1>Horror</h1>
            <div className="horrorboxes">
                 {genreArrayHorror.map(hor => (
                <AllHorrorMovies
                    className='imga'
                    hor={hor}
                    key={hor.id}
                />
            ))}
            </div>
            <h1>Drama</h1>
            <div className="dramaboxes">
                {genreArrayDrama.map(dra => (
                    <AlldramaMovies
                        className='imga'
                        dra={dra}
                        key={dra.id}
                    />
                ))}
            </div>
           
        </div>
    )

}

export default AllMovies