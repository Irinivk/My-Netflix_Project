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
        <div className="loginbaldhbd">
            <h1>Log In</h1>
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
                    <button type="submit">Log In</button>
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
    );
}

export default LoginFormPage;