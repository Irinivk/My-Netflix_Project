import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
// import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    // const dispatch = useDispatch();

    // const logout = (e) => {
    //     e.preventDefault();
    //     dispatch(sessionActions.logout());
    // };

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div className='hometopscreen'>
                <div className='browselinks'>
                    <NavLink exact to="/browse">Home</NavLink>
                    <NavLink exact to="/browse/movies">Movies</NavLink>
                    <NavLink exact to="/browse/shows/tv">TV-Shows</NavLink>
                    <NavLink exact to="/browse/user/films">My-List</NavLink>
                </div>
                <div className='userbutton'>
                    <ProfileButton user={sessionUser} />
                </div>
                
            </div>
        );
    } else {
        sessionLinks = (
            <div className='hugekbkhba'>  
                <div className='smandsnad'>
                     
                        <NavLink exact to="/">Home</NavLink>
                   
                    <div className='ajsndas'>
                        <button>
                             <NavLink to="/login">Log In</NavLink>
                        </button>
                    </div>
                </div>
                <div className='amsndsLANDJds'>
                        <h1>Create and Upload your own Film Today!</h1>
                        <h2>Watch Films created by your peers!</h2>
                    <div className='andhqvfkbf'>
                         <button>
                          <NavLink to="/signup">Sign Up</NavLink>
                     </button>
                    </div>
                    

                </div>
                
            </div>
            
        );
    }

    return (
        <ul>
            {isLoaded && sessionLinks}
        </ul>
    );
}

export default Navigation;