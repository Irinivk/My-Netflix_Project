import { csrfFetch } from "./csrf"


export const LOAD_VIDEOS = 'videos/LOAD_VIDEOS'
export const LOAD_MOVIES = 'videos/LOAD_MOVIES'
export const LOAD_TVSHOWS = 'videos/LOAD_TVSHOWS'
export const LOAD_ONEVIDEO = 'video/LOAD_ONEVIDEO'
export const RECEIVE_VIDEO = 'video/RECEIVE_VIDEO'

export const loadVideos = (videos) => ({
    type: LOAD_VIDEOS,
    videos
})

export const loadMovies = (videos) => ({
    type: LOAD_MOVIES,
    videos
})

export const loadTVShow = (videos) => ({
    type: LOAD_TVSHOWS,
    videos
})

export const loadAVideo = (video) => ({
    type: LOAD_ONEVIDEO,
    video
})

// export const receiveVideo = (video) => ({
//     type: RECEIVE_VIDEO,
//     video
// })

export const fetchVideos = () => async (dispatch) => {
    const res = await csrfFetch('/api/videos')

    if (res.ok) {
        const videos = await res.json()
        dispatch(loadVideos(videos))
    }
}

export const fetchMovies = () => async (dispatch) => {
    const res = await csrfFetch('/api/videos/movies')

    if (res.ok) {
        const movies = await res.json()
        dispatch(loadMovies(movies))
    }
}

export const fetchTVShows = () => async (dispatch) => {
    const res = await csrfFetch('/api/videos/tv-shows')

    if (res.ok) {
        const tvshows = await res.json()
        dispatch(loadTVShow(tvshows))
    }
}

export const createVideo = (video) => async (dispatch) => {
        const res = await csrfFetch('/api/videos/create', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(video)
    })

    console.log(video)
        if (res.ok) {
            const thevideo = await res.json();
            console.log(thevideo)
            // dispatch(receiveVideo(thevideo))
            console.log(thevideo)
            return thevideo;
        }

}

// export const createGenre = (videoId, videoObj) => async (dispatch) => {
  
//         const res = await csrfFetch(`/api/videos/genre/${videoId}`, {
//         method: 'POST',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(videoObj)
//     })
//     console.log(videoId)
//     console.log(videoObj)
    
//         const el = await res.json();
//         console.log(el)
//         return el;
  
   
    
// }

export const displayVideo = (videoId) => async (dispatch) => {
    const res = await csrfFetch(`/api/videos/details/${videoId}`)

    console.log(res)
    if (res.ok) {
        const videoDetails = await res.json()
        dispatch(loadAVideo(videoDetails))
    }
}
 

const VideoReducer = (state = {}, action) => {

    switch(action.type) {
        case LOAD_VIDEOS:
            const newstate = {}
            console.log(state)
            // console.log(action.videos.Videos)
            action.videos.Videos.forEach(vid => {
                newstate[vid.id] = vid
            });
            // console.log(newstate)
            return newstate 
        // case RECEIVE_VIDEO:
        //     console.log(state)
        //     return { ...state, [action.video.id]: action.video };
        case LOAD_ONEVIDEO:
            console.log(action)
            const newOnestate = {}
            
            newOnestate[action.video.id] = action.video
            
            return newOnestate
            // console.log(newOnestate)
            // return newOnestate
        case LOAD_MOVIES:
            const newmoviestate = {}
            // console.log(action)
            action.videos.Videos.forEach(vid => {
                newmoviestate[vid.id] = vid
            });
            // console.log(newmoviestate)
            return newmoviestate
        case LOAD_TVSHOWS:
            const newtvshowsstate = {}
            // console.log(action)
            action.videos.Videos.forEach(vid => {
                newtvshowsstate[vid.id] = vid
            });
            return newtvshowsstate
       
        default:
            return state
    }
}

export default VideoReducer