import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy login check (replace with backend / Firebase later)
    if (email === "user@test.com" && password === "123456") {
      alert("✅ Login Successful!");
      navigate("/"); // redirect to Home after login
    } else {
      alert("❌ Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box shadow-lg">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-login w-100">
            Login
          </button>

          <p className="text-center mt-3">
            Don’t have an account?{" "}
            <span
              style={{ color: "#f14849", cursor: "pointer" }}
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
