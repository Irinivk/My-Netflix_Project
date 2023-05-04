import { csrfFetch } from "./csrf"

export const LOAD_ACCOUNTS = 'accounts/LOAD_ACCOUNTS'


export const loadAccounts = (accounts) => ({
    type: LOAD_ACCOUNTS,
    accounts
})

export const fetchAcc = () => async (dispatch) => {
    const res = await csrfFetch('/api/accounts')

    if (res.ok) {
        const acc = await res.json()
        dispatch(loadAccounts(acc))
    }
}

export const createAccount = (account) => async (dispatch) => {
    const res = await csrfFetch('/api/accounts', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(account)
    })

    if (res.ok) {
        const theacc = await res.json();
        console.log(theacc)
        return theacc;
    }

}


const AccountReducer = (state = {}, action) => {
    switch(action.type) {
        case LOAD_ACCOUNTS:
            const newAcc = {...state}
            // console.log(action.accounts.Accounts)
            action.accounts.Accounts.forEach(acc => {
                newAcc[acc.id] = acc
            });
            // console.log(newAcc)
            return newAcc
        default:
            return state
    }
}

export default AccountReducer