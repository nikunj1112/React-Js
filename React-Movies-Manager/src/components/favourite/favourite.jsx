import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Favourite() {
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();

  // Load favourites from Local Storage
  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);
  }, []);

  // Remove movie from favourites
  const handleRemove = (id) => {
    const updatedFavourites = favourites.filter((movie) => movie.id !== id);
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    alert("Removed from Favourites");
  };

  if (favourites.length === 0) {
    return <h3 style={{ textAlign: "center", marginTop: "50px" }}>No favourite movies yet</h3>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Favourite Movies</h2>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "30px" }}>
        {favourites.map((movie) => (
          <li
            key={movie.id}
            style={{
              background: "#eadaab",
              margin: "10px auto",
              padding: "10px",
              width: "400px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong>{movie.title}</strong> <br />
              Genre: {movie.genre} <br />
              Rating: {movie.rating}/10
            </div>
            <button
              onClick={() => handleRemove(movie.id)}
              style={{
                padding: "5px 10px",
                backgroundColor: "#d9534f",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => navigate("/movies")}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          backgroundColor: "#f14849",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back to Movies
      </button>
    </div>
  );
}
