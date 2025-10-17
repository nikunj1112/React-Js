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

    // ✅ Manager Login Logic
    if (role === "manager") {
      const managerFound = db.users?.managers?.find(
        (m) => m.email.toLowerCase().trim() === email.toLowerCase().trim()
      );

      if (managerFound && managerFound.password === password) {
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            name: managerFound.name,
            email: managerFound.email,
            role: "manager",
          })
        );
        alert(`✅ Manager login successful! Welcome, ${managerFound.name}`);
        navigate("/manager/dashboard");
        return;
      } else {
        setError("❌ Invalid manager credentials.");
        return;
      }
    }

    // ✅ Employee Login Logic
    if (role === "employee") {
      // Check in db.json
      const waiterFromDB = db.users?.waiters?.find(
        (w) => w.email.toLowerCase().trim() === empCode.toLowerCase().trim()
      );

      // Check in localStorage (if added dynamically)
      const localEmployees = JSON.parse(localStorage.getItem("employees")) || [];
      const waiterFromLocal = localEmployees.find(
        (w) => w.email?.toLowerCase().trim() === empCode.toLowerCase().trim()
      );

      const waiterFound = waiterFromDB || waiterFromLocal;

      if (waiterFound && waiterFound.password === password) {
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            name: waiterFound.name,
            email: waiterFound.email,
            role: "employee",
          })
        );
        alert(`✅ Employee login successful! Welcome, ${waiterFound.name}`);
        navigate("/dashboard");
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
        <div className="branding-content">
          <img src={imgo1} alt="Maharaja Palace Logo" className="branding-logo" />
          <p className="branding-tagline">Experience Royal Dining at its Finest</p>
        </div>

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

        {role && (
          <form onSubmit={handleSubmit} className="login-form">
            {role === "manager" && (
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="manager@maharajapalace.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            )}

            {role === "employee" && (
              <div className="input-group">
                <label>Employee Email</label>
                <input
                  type="text"
                  placeholder="e.g., rakesh.mehta@maharajapalace.com"
                  value={empCode}
                  onChange={(e) => setEmpCode(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
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
