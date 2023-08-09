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
             <div class="background-image28273">
                        <img src='src="https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/c741e848-5f1b-4230-8400-909aa0a4ac80/US-en-20230807-popsignuptwoweeks-perspective_alpha_website_small.jpg"'
                        srcSet='https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/c741e848-5f1b-4230-8400-909aa0a4ac80/US-en-20230807-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/c741e848-5f1b-4230-8400-909aa0a4ac80/US-en-20230807-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/c741e848-5f1b-4230-8400-909aa0a4ac80/US-en-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w'
                        />
                    </div>
                
                <div className='smandsnad'>
                   
                        <NavLink exact to="/">Home</NavLink>
                   
                    <div className='ajsndas'>
                        <button>
                             <NavLink to="/login">Sign In</NavLink>
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
            {/* <img src='https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/41237afb-6f3a-48e2-8b0d-fd3171752a38/US-en-20230417-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='' /> */}
            {isLoaded && sessionLinks}
        </ul>
    );
}

export default Navigation;