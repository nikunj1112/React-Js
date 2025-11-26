import React, { useState, useEffect } from "react";
import { signup, fetchusers } from "../../slices/userslice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Signup.css";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchusers());
    }, [dispatch]);

    const navigate = useNavigate();

    return (
        <div className="signup-wrapper">
            <div className="signup-card">
                <h2 className="title">Create Account</h2>

                <p className="subtitle">Join us and start your journey!</p>

                <div className="input-group">
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Email</label>
                </div>

                <div className="input-group">
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>Password</label>
                </div>

                <button
                    className="btn signup-btn"
                    onClick={() => dispatch(signup({ email, password }))}
                >
                    Create Account
                </button>
                <p className="login-text">
                    Already have an account?
                    <span
                        className="login-link"
                        onClick={() => navigate("/")}
                    >
                        Login
                    </span>
                </p>


            </div>
        </div>
    );
}
