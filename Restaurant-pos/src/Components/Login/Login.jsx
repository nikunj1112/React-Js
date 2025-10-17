import React, { useState } from "react";
import "./Login.css";
import "remixicon/fonts/remixicon.css";
import { useNavigate } from "react-router-dom";
import imgo1 from "../../assets/img/login-img/login-img2.png";
import db from "../../../Api/db.json"; // ✅ JSON file with users and menu

export default function Login() {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [empCode, setEmpCode] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Manager Login Logic (unchanged)
    if (role === "manager") {
      const managerFound = db.users?.managers?.find(
        (m) => m.email.toLowerCase().trim() === email.toLowerCase().trim()
      );

      if (managerFound && managerFound.password === password) {
        alert(`✅ Manager login successful! Welcome, ${managerFound.name}`);
        setError("");
        navigate("/manager/dashboard"); // ✅ Go to Manager Dashboard
        return;
      } else {
        setError("❌ Invalid manager credentials.");
        return;
      }
    }

    // ✅ Employee (Waiter) Login Logic
    if (role === "employee") {
      // 🟢 Step 1: Check in db.json
      const waiterFromDB = db.users?.waiters?.find(
        (w) => w.email.toLowerCase().trim() === empCode.toLowerCase().trim()
      );

      // 🟢 Step 2: Check in localStorage (if added dynamically)
      const localEmployees = JSON.parse(localStorage.getItem("employees")) || [];
      const waiterFromLocal = localEmployees.find(
        (w) => w.email?.toLowerCase().trim() === empCode.toLowerCase().trim()
      );

      const waiterFound = waiterFromDB || waiterFromLocal;

      if (waiterFound && waiterFound.password === password) {
        alert(`✅ Employee login successful! Welcome, ${waiterFound.name}`);
        setError("");
        navigate("/dashboard"); // ✅ Go to Waiter Dashboard
        return;
      } else {
        setError("❌ Invalid employee credentials.");
        return;
      }
    }

    setError("❌ Please select a role and enter valid credentials.");
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
              setEmail("");
              setEmpCode("");
              setPassword("");
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
                <label htmlFor="employeeCode">Employee Email</label>
                <input
                  type="text"
                  id="employeeCode"
                  placeholder="e.g., rakesh.mehta@maharajapalace.com"
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
