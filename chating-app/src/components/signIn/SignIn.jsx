import React, { useEffect, useState } from "react";
import { signin, fetchusers, signinwithgoogles, signup } from "../../slices/userslice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "./SignIn.css";

// import Logo from "../../assets/img/logo.png";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchusers());
  }, [dispatch]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signin-wrapper">
      <div className="signin-card">

        {/* Logo Section
        <div className="logo-container">
          <img src={Logo} alt="app logo" className="logo" />
        </div> */}

        <h2 className="title">Welcome Back</h2>

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
          className="btn signin-btn"
          onClick={() => {
            dispatch(signin({ email, password }));
            navigate("/home");
          }}
        >
          Sign In
        </button>

        <button
          className="btn google-btn"
          onClick={() => dispatch(signinwithgoogles())}
        >
          Sign In with Google
        </button>

        <p className="signup-text">
          Don't have an account?
          <span
            className="signup-link"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
}
