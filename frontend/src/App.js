import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Allfilms from "./components/allvideos";
import AllUsersAcc from "./components/allaccounts";
import AllTVShows from "./components/alltvshows";
import AllMovies from "./components/allmovies";

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
        <Route exact path='/browse/shows/tv' component={AllTVShows} />
        <Route exact path='/browse/movies' component={AllMovies} /> 
        <Route exact path="/" component={AllUsersAcc} /> 
        <Route exact path="/browse" component={Allfilms} />
        
        </Switch>}   
        
    </>
  );  
}

export default App;

