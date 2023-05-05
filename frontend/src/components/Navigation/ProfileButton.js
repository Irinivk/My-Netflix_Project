import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { NavLink } from 'react-router-dom';
import './Profilebutton.css'

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    

    const ulRef = useRef();

    // const openMenu = () => {
    //     if (showMenu) return;
    //     setShowMenu(true);
    // };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
            if (!ulRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

    return (
        <div className = "userButton">
            <button className="dropbtn">
                <i className="fas fa-user-circle" />
            </button>
            <div className="dropdown-content" ref={ulRef}>
                <div className="userInfo">
                    <ul className={ulClassName} ref={ulRef}>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <NavLink exact to="/videos/new">Upload</NavLink>
                <NavLink exact to="/">Manage Profiles</NavLink>
                <li>
                    <button onClick={logout}>Log Out</button>
                </li>
            </ul>
                </div>
                
            </div>
            
        </div>
    );
}

export default ProfileButton;