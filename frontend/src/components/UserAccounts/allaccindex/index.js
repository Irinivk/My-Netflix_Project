import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";


const AllUserAccIndex = ({ accounts }) => {


    return (
        <div>
            <NavLink to={'/browse'} >
                <img 
                src={accounts.prevImage} alt=""/>
                <h1 > {accounts.first_name} </h1>
            </NavLink>      
        </div>
    )
}


export default AllUserAccIndex