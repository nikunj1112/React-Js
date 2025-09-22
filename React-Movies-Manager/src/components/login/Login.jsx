import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // import CSS

export default function Login({ setUser }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    setUser(name);
    sessionStorage.setItem("currentUser", name);
    navigate("/movies");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
