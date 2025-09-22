import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieForm.css";


export default function MovieForm({ currentUser, setUser }) {
  const navigate = useNavigate();

  const [movie, setMovie] = useState({ id: "", title: "", genre: "", rating: "" });
  const [movies, setMovies] = useState([]);

  // Load movies from Local Storage
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(storedMovies);

    // Check if there's a movie to edit
    const editMovie = JSON.parse(localStorage.getItem("editMovie"));
    if (editMovie) {
      setMovie(editMovie);
      localStorage.removeItem("editMovie");
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movie.title || !movie.genre || !movie.rating) {
      alert("All fields are required");
      return;
    }

    let updatedMovies;

    if (movie.id) {
      updatedMovies = movies.map((m) => (m.id === movie.id ? movie : m));
      alert("Movie Updated");
    } else {
      const newMovie = { ...movie, id: Date.now() };
      updatedMovies = [...movies, newMovie];
      alert("Movie Added");
    }

    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
    setMovie({ id: "", title: "", genre: "", rating: "" });
  };

  // Handle Logout
  const handleLogout = () => {
    sessionStorage.removeItem("currentUser");
    if (setUser) setUser("");
    navigate("/");
  };

  // Handle Delete
  const handleDelete = (id) => {
    const updatedMovies = movies.filter((m) => m.id !== id);
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
    alert("Movie Deleted");
  };

  // Handle Edit
  const handleEdit = (movie) => {
    setMovie(movie);
  };

  return (
    <div className="movie-container">
    <div className="movie-header">
      <h2>Hello, {currentUser || sessionStorage.getItem("currentUser")}👋🏻</h2>
      <div className="header-buttons">
        <button className="btn-favourite" onClick={() => navigate("/favourites")}>
          Go to Favourites
        </button>
        <button className="btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  
    <h2>{movie.id ? "Edit Movie" : "Add Movie"}</h2>
    <form className="movie-form" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Movie Title" value={movie.title} onChange={handleChange} />
      <input type="text" name="genre" placeholder="Genre" value={movie.genre} onChange={handleChange} />
      <input type="number" name="rating" placeholder="Rating (1-10)" value={movie.rating} onChange={handleChange} min="1" max="10" />
      <br />
      <button type="submit">{movie.id ? "Update Movie" : "Add Movie"}</button>
    </form>
  
    <ul className="movie-list">
      {movies.map((m) => {
        const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
        const isFavourite = favourites.some((fav) => fav.id === m.id);
  
        return (
          <li key={m.id} className="movie-item">
            <div>
              <strong>{m.title}</strong> <br />
              Genre: {m.genre} <br />
              Rating: {m.rating}/10
            </div>
            <div className="item-buttons">
              <button className="btn-edit" onClick={() => handleEdit(m)}>Edit</button>
              <button className="btn-delete" onClick={() => handleDelete(m.id)}>Delete</button>
              <button
                className={`btn-heart ${isFavourite ? "favourite" : ""}`}
                onClick={() => {
                  if (!isFavourite) {
                    localStorage.setItem("favourites", JSON.stringify([...favourites, m]));
                    alert("Added to Favourites!");
                    setMovies([...movies]);
                  }
                }}
              >
                ❤️
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
  );
}
