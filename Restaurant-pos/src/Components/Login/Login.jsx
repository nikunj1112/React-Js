import React, { useState } from "react";
import "./Login.css";
import "remixicon/fonts/remixicon.css";

import imgo1 from "../../assets/img/login-img/login-img2.png"; // 🪄 Left side logo or image

export default function Login() {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [empCode, setEmpCode] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      role === "manager" &&
      email === "manager@urbanspice.com" &&
      password === "admin123"
    ) {
      alert("Manager login successful!");
      setError("");
    } else if (
      role === "employee" &&
      empCode === "EMP001" &&
      password === "waiter123"
    ) {
      alert("Employee login successful!");
      setError("");
    } else {
      setError("Invalid credentials or role selection.");
    }
  };

  return (
    <div className="single-login-page">
      <div className="login-card">
        {/* 👑 Logo Section */}
        <div className="branding-content">
          <img src={imgo1} alt="Maharaja Palace Logo" className="branding-logo" />
          <p className="branding-tagline">Experience Royal Dining at its Finest</p>
        </div>

        {/* 🪄 Role Selection */}
        <div className="role-selection-group">
          <i className="ri-user-settings-line role-icon"></i>
          <select
            className="role-select-dropdown"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              setError("");
            }}
          >
            <option value="">Select Role</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
          </select>
        </div>

        {/* 🔐 Login Form */}
        {role && (
          <form onSubmit={handleSubmit} className="login-form">
            {role === "manager" && (
              <div className="input-group">
                <label htmlFor="managerEmail">Email</label>
                <input
                  type="email"
                  id="managerEmail"
                  placeholder="manager@maharajapalace.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            )}

            {role === "employee" && (
              <div className="input-group">
                <label htmlFor="employeeCode">Employee Code</label>
                <input
                  type="text"
                  id="employeeCode"
                  placeholder="e.g., MP-EMP-001"
                  value={empCode}
                  onChange={(e) => setEmpCode(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="login-submit-btn">
              <i className="ri-login-box-line btn-icon"></i> Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
