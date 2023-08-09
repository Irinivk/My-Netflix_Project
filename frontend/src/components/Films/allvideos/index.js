import { fetchVideos } from "../../../store/videos"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect } from "react"
// import FetchVideosIndex from "../allvideosindex.js/index.js"
import Allaction from "./AllAction"
import AllAdventure from "./AllAdventure"
import AllComedy from "./AllComedy"
import AllCrime from "./AllCrime"
import AllDrama from "./AllDrama"
import AllHorror from "./AllHorror"
import AllMystery from "./AllMystery"
import { NavLink } from "react-router-dom";
import './AllindexMov.css'


const Allfilms = () => {
    const dispatch = useDispatch()

    const videos = useSelector(state => Object.values(state.video))

    useEffect(() => {
        dispatch(fetchVideos())
    })
    //  console.log(videos.genre)


    let genreArrayAction = [];
    let genreArrayAdventure = [];
    let genreArrayComedy = [];
    let genreArrayCrime = [];
    let genreArrayMystery = [];
    let genreArrayHorror = [];
    let genreArrayDrama = [];
    for (let i = 0; i < videos.length; i++) {
        // console.log(videos[i].genre)
        if (!videos[i].genre) return null
        // for (let j = 0; j < videos[i].Genres.length; j++) {
            // console.log(movies[i].Genres[j].name)
            if (videos[i].genre === 'Action') {
                genreArrayAction.push(videos[i])

            }
            if (videos[i].genre === 'Adventure') {
                genreArrayAdventure.push(videos[i])
            }
            if (videos[i].genre === 'Comedy') {
                genreArrayComedy.push(videos[i])
            }
            if (videos[i].genre.includes('Crime')) {
                genreArrayCrime.push(videos[i])
            }
            if (videos[i].genre.includes('Mystery')) {
                genreArrayMystery.push(videos[i])
            }
            if (videos[i].genre.includes('Horror')) {
                genreArrayHorror.push(videos[i])
            }
            if (videos[i].genre.includes('Drama')) {
                genreArrayDrama.push(videos[i])
            }
        // }
    }

    console.log(videos[1])
    return (
        <div className="wrapper" >
            <div className="backgrounddjnjf">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zwAM5UnGd2s?autoplay=1&controls=0&showinfo=0&autohide=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h2 class="bottom-right">The Nun</h2>
                <p>When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together, they uncover the order's unholy secret.</p>
                <NavLink to={`/video/nun/details`} className="wfefq" >
                    <button>Details</button>
                </NavLink>
            </div>
            
        <div className="allfilmstitles">
            <h1>Action</h1>
                {/* <h2>Bottom Right</h2> */}
            <div className="Allactionbox">
                {genreArrayAction.map(mov => (
                    <Allaction
                        className='imga'
                        mov={mov}
                        key={mov.id}
                    />
                ))}
            </div>
            <h1>Adventure</h1>
            <div className="Alladvboxes">
                {genreArrayAdventure.map(adv => (
                    <AllAdventure
                        className='imga'
                        adv={adv}
                        key={adv.id}
                    />
                ))}
            </div>
            <h1>Comedy</h1>
            <div className="Allcomedyboxes">
                {genreArrayComedy.map(com => (
                    <AllComedy
                        className='imga'
                        com={com}
                        key={com.id}
                    />
                ))}
            </div>
            <h1>Crime</h1>
            <div className="Allcrimeboxes">
                {genreArrayCrime.map(cri => (
                    <AllCrime
                        className='imga'
                        cri={cri}
                        key={cri.id}
                    />
                ))}
            </div>
            <h1>Mystery</h1>
            <div className="Allmysteryboxes">
                {genreArrayMystery.map(mys => (
                    <AllMystery
                        className='imga'
                        mys={mys}
                        key={mys.id}
                    />
                ))}
            </div>
            <h1>Horror</h1>
            <div className="Allhorrorboxes">
                {genreArrayHorror.map(hor => (
                    <AllHorror
                        className='imga'
                        hor={hor}
                        key={hor.id}
                    />
                ))}
            </div>
            <h1>Drama</h1>
            <div className="AllDramaboxes">
                {genreArrayDrama.map(dra => (
                    <AllDrama
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

export default Allfilms