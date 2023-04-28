import { csrfFetch } from "./csrf"


export const LOAD_VIDEOS = 'videos/LOAD_VIDEOS'
export const LOAD_MOVIES = 'videos/LOAD_MOVIES'
export const LOAD_TVSHOWS = 'videos/LOAD_TVSHOWS'

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