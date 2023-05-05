import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayVideo } from '../../store/videos';
import { NavLink } from "react-router-dom";
import './detailsofthefilm.css'


const Thefilmdetails = () => {



    const { videoId } = useParams()

    const dispatch = useDispatch()

    // console.log('hello')
    // const user = useSelector(state => state.session.user);
    const video = useSelector((state) =>
        state.video ? state.video[videoId] : null
    );

    useEffect(() => {
        dispatch(displayVideo(videoId))
    }, [dispatch, videoId])

    if (!video) return null

    console.log(video.Episodes)

    if (!video.Episodes) return null
    return (
        <div className="thewroa">
            <div className='onevideo'>
                <img src={video.preview}  alt='' className="kdbkjeqbf"/>
            </div>
            <div className="infoty">
                <h1>{video.name}</h1>
                <h2>{video.description}</h2>
            </div>
            <div className="dhbbjewf">
                

                {video.Episodes.length !== 0 &&
                    
                        video.Episodes.map((epi) => (
                        <NavLink to={`/episodes/${epi.id}`} className="All">
                            <div className="kbebfqjbhkhd">
                        
                                <img src={epi.preview} alt="" className="hbjkhbfkq"/>
                                <h3>{`Episode ${epi.number} Season ${epi.season}`}</h3>
                                <h4>{epi.description}</h4>
                        
                    </div>    
                            </NavLink>
                    
               
                ))
                
                }
               
            </div>
            {video.Episodes.length === 0 &&
                <div className="kfjebhf">
                    <NavLink to={`/video/${video.id}`} >
                        <button>Play</button>
                    </NavLink>
                 </div>    
            }     
        </div>
        

    )


}

export default Thefilmdetails