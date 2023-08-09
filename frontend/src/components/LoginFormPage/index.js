// frontend/src/components/LoginFormPage/index.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import "./LoginForm.css";

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    const DemoUser = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({ credential: "demo@user.io", password: "password" }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                    setErrors(data.errors);
                }
            });
    };

    return (
        <>
        <div class="background-image273736644">
                        <img src='src="https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/c741e848-5f1b-4230-8400-909aa0a4ac80/US-en-20230807-popsignuptwoweeks-perspective_alpha_website_small.jpg"'
                        srcSet='https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/c741e848-5f1b-4230-8400-909aa0a4ac80/US-en-20230807-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/c741e848-5f1b-4230-8400-909aa0a4ac80/US-en-20230807-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/c741e848-5f1b-4230-8400-909aa0a4ac80/US-en-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w'
                        />
                    </div>
        <div className="loginbaldhbd">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="abbfashfkln">
                    <label>
                    {/* Username or Email */}
                    <input
                        type="text"
                        placeholder="Username or Email"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </label>
                <label>
                    {/* Password */}
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                {errors.credential && <p>{errors.credential}</p>}
                </div>
                <div className="ajkbdhvfqkjbkhb">
                    <button type="submit">Sign In</button>
                    <button className="demo-user" onClick={(e) => DemoUser(e)}>
                         Demo User
                    </button>
                </div>
                
                <div className="jbfuebqlnqfj">
                    <h2>New to User-fy?</h2>
                     <NavLink to='/signup' >Sign Up Now.</NavLink>
                </div>
               

            </form>
        </div>
        </>
    );
}

export default LoginFormPage;