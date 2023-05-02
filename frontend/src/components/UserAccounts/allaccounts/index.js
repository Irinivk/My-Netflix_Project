import { fetchAcc } from "../../../store/accounts"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import AllUserAccIndex from "../allaccindex"
// import { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const AllUsersAcc = () => {
    const dispatch = useDispatch()


    const acc = useSelector(state => Object.values(state.accounts))

    useEffect(() => {
        dispatch(fetchAcc())
    }, [dispatch])


    return (
        <div>
            {acc.map(accounts => (
                <AllUserAccIndex 
                    accounts={accounts}
                    key={accounts.id}
                />
            ))}
            {/* <FontAwesomeIcon icon={faUserPlus} size="xl" style={{ color: "#212121", }} /> */}
        </div>
    )
}

export default AllUsersAcc