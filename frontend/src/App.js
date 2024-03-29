import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Allfilms from "./components/Films/allvideos";
import AllUsersAcc from "./components/UserAccounts/allaccounts";
import AllTVShows from "./components/AllTVShowFilms/alltvshows";
import AllMovies from "./components/AllMovieFilms/allmovies";
import NewGenre from "./components/CreateNewGenre";
import LoadOneVideo from "./components/OneFilm";
import UserFilms from "./components/UserFIlms";
import CreateNewAcc from "./components/UserAccounts/hdbhd";
import Thefilmdetails from "./components/OneFilm/detailsoffilm";
import Episodedetails from "./components/OneFilm/detailsofepisodes";
import TheNunFilm from "./components/Films/allvideos/TheNunFilm";

function App() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {sessionUser && <Switch>  
        
        <Route exact path="/" component={AllUsersAcc} />
        <Route exact path="/browse" component={Allfilms} /> 
        <Route path='/browse/user/films' component={UserFilms} />
        <Route path='/browse/movies' component={AllMovies} />  
        <Route path='/browse/shows/tv' component={AllTVShows} />
        <Route exact path='/videos/:videoId/details' component={Thefilmdetails} />
        <Route exact path="/video/:videoId" component={LoadOneVideo} />
        <Route path="/videos/new" component={NewGenre} />
        <Route exact path='/create/account' component={CreateNewAcc} /> 
        <Route exact path='/episodes/:episodeId' component={Episodedetails} />
        <Route exact path='/video/nun/details' component={TheNunFilm} />

      </Switch>}

    </>
  );
}

export default App;

