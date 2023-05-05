import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchTVShows } from "../../../store/videos";
// import AllTVShowsIndex from "../alltvshowsindex"
import ActionTvShow from "./acttvshow";
import Adventuretvshows from "./advtvshows";
import Comedytvshow from "./comedytvshow";
import Crimetvshow from "./crimetvshow";
import Mysterytvshow from "./mysterytvshow";
import Horrortvshow from "./horrortvshow";
import Dramatvshow from "./dramatvshow";
import { NavLink } from "react-router-dom";
import './tvindex.css';


const AllTVShows = () => {
    const dispatch = useDispatch()

    const tvshows = useSelector(state => Object.values(state.video))

    useEffect(() => {
        dispatch(fetchTVShows())
    }, [dispatch])

    // console.log(tvshows)

    let genreArrayAction = [];
    let genreArrayAdventure = [];
    let genreArrayComedy = [];
    let genreArrayCrime = [];
    let genreArrayMystery = [];
    let genreArrayHorror = [];
    let genreArrayDrama = [];
    for (let i = 0; i < tvshows.length; i++) {
        console.log(tvshows[i].genre)
        if (!tvshows[i].genre) return null
        // for (let j = 0; j < tvshows[i].Genres.length; j++) {
            // console.log(movies[i].Genres[j].name)
            if (tvshows[i].genre === 'Action') {
                genreArrayAction.push(tvshows[i])

            }
            if (tvshows[i].genre === 'Adventure') {
                genreArrayAdventure.push(tvshows[i])
            }
            if (tvshows[i].genre === 'Comedy') {
                genreArrayComedy.push(tvshows[i])
            }
            if (tvshows[i].genre.includes('Crime')) {
                genreArrayCrime.push(tvshows[i])
            }
            if (tvshows[i].genre.includes('Mystery')) {
                genreArrayMystery.push(tvshows[i])
            }
            if (tvshows[i].genre.includes('Horror')) {
                genreArrayHorror.push(tvshows[i])
            }
            if (tvshows[i].genre.includes('Drama')) {
                genreArrayDrama.push(tvshows[i])
            }
        // }

        console.log(tvshows)
    }

    return (
        <div className="wrapper" >
            <div className="backgrounddjnjf">
                <img src="https://tvseriesfinale.com/wp-content/uploads/2014/02/shameless16.jpeg" alt="" />
                <h2 class="bottom-right">Shameless</h2>
                <p>Watch the Irish American family the Gallagher's deal with their alcoholic father Frank. Fiona, the eldest daughter, takes the role of the parent to her five brothers and sisters.</p>
                <NavLink to={`/videos/${9}/details`} className="wfefq" >
                    <button>Details</button>
                </NavLink>
            </div>

        <div className="tvshowtitles">
            {/* {tvshows.map(tv => (
                <AllTVShowsIndex
                    tv={tv}
                    key={tv.id}
                />
            ))} */}
            <h1>Action</h1>
            <div className="actiontv">
                {genreArrayAction.map(mov => (
                    <ActionTvShow
                        className='imga'
                        mov={mov}
                        key={mov.id}
                    />
                ))}
            </div>
            <h1>Adventure</h1>
            <div className="advtv">
                {genreArrayAdventure.map(adv => (
                    <Adventuretvshows
                        className='imga'
                        adv={adv}
                        key={adv.id}
                    />
                ))}
            </div>
            <h1>Comedy</h1>
            <div className="comedytv">
                {genreArrayComedy.map(com => (
                    <Comedytvshow
                        className='imga'
                        com={com}
                        key={com.id}
                    />
                ))}
            </div>
            <h1>Crime</h1>
            <div className="crimetv">
                {genreArrayCrime.map(cri => (
                    <Crimetvshow
                        className='imga'
                        cri={cri}
                        key={cri.id}
                    />
                ))}
            </div>
            <h1>Mystery</h1>
            <div className="mysterytv">
                {genreArrayMystery.map(mys => (
                    <Mysterytvshow
                        className='imga'
                        mys={mys}
                        key={mys.id}
                    />
                ))}
            </div>
            <h1>Horror</h1>
            <div className="horrortv">
                {genreArrayHorror.map(hor => (
                    <Horrortvshow
                        className='imga'
                        hor={hor}
                        key={hor.id}
                    />
                ))}
            </div>
            <h1>Drama</h1>
            <div className="Dramatv">
                {genreArrayDrama.map(dra => (
                    <Dramatvshow
                        className='imga'
                        dra={dra}
                        key={dra.id}
                    />
                ))}
            </div>
         </div>
        </div>
    )

}

export default AllTVShows