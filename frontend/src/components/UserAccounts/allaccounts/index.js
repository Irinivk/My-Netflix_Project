import { fetchAcc } from "../../../store/accounts"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import AllUserAccIndex from "../allaccindex"
import { NavLink } from 'react-router-dom';
import './allaccounts.css'

const AllUsersAcc = () => {
    const dispatch = useDispatch()


    const acc = useSelector(state => Object.values(state.accounts))

    useEffect(() => {
        dispatch(fetchAcc())
    }, [dispatch])

    console.log(acc)

    return (
        <div className="ecerty">
            <h1>Who's watching?</h1>
            <div className="allaccounts"> 
            {/* <div className="accimages"> */}
            {acc.map(accounts => (
                <AllUserAccIndex 
                    accounts={accounts}
                    key={accounts.id}
                />
            ))} 
            <div>
                
            </div>
                <NavLink to='/create/account'>
                    <img src='https://cdn.onlinewebfonts.com/svg/img_520036.png' alt="" className="sjnd"/>
                </NavLink>
            {/* </div> */}
            
            
        </div>
        <div className="allaccbutton">
                <button onClick={() => alert('Feature managing your accounts coming soon')}>Manage Profiles</button>
            </div>
        </div>
        
    )
}

export default AllUsersAcc