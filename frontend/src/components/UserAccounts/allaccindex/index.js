import { NavLink } from 'react-router-dom';
import './allaccindex.css'


const AllUserAccIndex = ({ accounts }) => {


    return (
        <div className='allaccimages'>
            <NavLink to={'/browse'} >
                <img 
                src={accounts.prevImage} alt=""/>
                <h1 > {accounts.first_name} </h1>
            </NavLink>   
        </div>
    )
}


export default AllUserAccIndex