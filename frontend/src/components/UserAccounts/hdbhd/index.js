import { createAccount } from "../../../store/accounts"
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import './createacc.css'

const CreateNewAcc = () => {
    const history = useHistory()

    const [first_name, setFirst_name] = useState('');
    const [prevImage, setPrevImage] = useState('');
    const [errors, setErrors] = useState({});

    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch()

    useEffect(() => {
        const errors = {}



        if (!first_name.length) errors.first_name = 'Name of your account is required'
        if (!prevImage.length) errors.prevImage = 'Preview image for your account is required'


        setErrors(errors);
    }, [first_name, prevImage])

    const handleSubmit = async (e) => {
        e.preventDefault();


        const acc = {
            userId: sessionUser.id,
            first_name,
            prevImage
        }

        await dispatch(createAccount(acc))

        history.push(`/`)
    }

    return (
        <form onSubmit={handleSubmit} className="AccForm">
             <h1>Add Profile</h1>
            <div className="name1">
                <label>
                    Name
                    <input
                        type="text"
                        id="NameAcc"
                        placeholder="Name of Account"
                        value={first_name}
                        onChange={(e) => setFirst_name(e.target.value)}
                    />
                </label>
                <p className="errors">{errors.first_name}</p>
            </div>
            <div className="prev1">
                <label>
                    Preview Image
                    <input
                        type="text"
                        id="ImageAcc"
                        placeholder="Image for your Account"
                        value={prevImage}
                        onChange={(e) => setPrevImage(e.target.value)}
                    />
                </label>
                <p className="errors">{errors.prevImage}</p>
            </div>
            <div className="candhbfhb">
                <NavLink to='/'>
                <button>Cancel</button>
            </NavLink>
            <button
                type="submit"
                disabled={Boolean(Object.values(errors).length)}
            >
                Create Account
            </button>
            </div>
            
        </form>
    )

}

export default CreateNewAcc