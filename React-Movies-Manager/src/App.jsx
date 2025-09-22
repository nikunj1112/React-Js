import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import MovieForm from "./components/MovieForm/MovieForm.jsx";
import Favourite from "./components/favourite/favourite.jsx";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  // Load user from sessionStorage on mount
  useEffect(() => {
    const storedUser = sessionStorage.getItem("currentUser");
    if (storedUser) setCurrentUser(storedUser);
  }, []);

  // Function to set user both in state and sessionStorage
  const handleSetUser = (name) => {
    sessionStorage.setItem("currentUser", name);
    setCurrentUser(name);
  };

  return (
    <Router>
      <Routes>
        {/* Pass setUser prop to Login to update state */}
        <Route path="/" element={<Login setUser={handleSetUser} />} />
        
        {/* Pass currentUser to MovieForm */}
        <Route path="/movies" element={<MovieForm currentUser={currentUser} />} />
        <Route path="/favourites" element={<Favourite />} />

      </Routes>

    </Router>
  );
}

export default App;
