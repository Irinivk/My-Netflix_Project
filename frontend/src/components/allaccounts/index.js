import { fetchAcc } from "../../store/accounts"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import AllUserAccIndex from "../allaccindex"

const AllUsersAcc = () => {
    const dispatch = useDispatch()

    const acc = useSelector(state => Object.values(state.accounts))

    useEffect(() => {
        dispatch(fetchAcc())
    }, [dispatch])


    // console.log(acc)
    return (
        <div>
            {acc.map(accounts => (
                <AllUserAccIndex 
                    accounts={accounts}
                    key={accounts.id}
                />
            ))}
        </div>
    )
}

export default AllUsersAcc