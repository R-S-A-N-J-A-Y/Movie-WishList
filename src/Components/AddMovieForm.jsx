import React, { useState } from "react";
import { IoMdGlobe } from "react-icons/io";
import { useMovie } from "../Contexts/MovieContext";

const AddMovieForm = () => {
  const { AddMovie } = useMovie();

  const [movie, setMovie] = useState({
    title: "",
    director: "",
    moviePreview: "",
    genre: "",
    rating: "",
  });

  const [error, setError] = useState({});

  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const Validate = () => {
    let Error = {};
    if (movie.title === "") Error.name = "*Movie Name is Required.";

    if (movie.director === "") Error.director = "*Director Name is Required.";
    if (movie.genre === "") Error.genre = "*Genre is Required.";
    if (movie.rating === "") Error.rating = "*Rating is Required.";
    if (movie.moviePreview === "")
      Error.moviePreview = "*Movie Preview is Required.";

    if (Object.keys(Error).length > 0) {
      setError(Error);
      return false;
    }

    const title = /^[A-Za-z0-9\s:'"!?,.-]{1,100}$/;
    const director = /^[A-Za-z\s]{2,50}$/;
    const moviePreview = /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif|bmp)$/i;
    const genre = /^[A-Za-z\s]{3,30}$/;
    const rating = /^(10(\.0)?|[0-9](\.[0-9])?)$/;

    if (!title.test(movie.title))
      Error.name = "*Movie Name can only contain letters, numbers, and :";
    if (!director.test(movie.director))
      Error.director = "*Director Name can only contain letters.";
    if (!moviePreview.test(movie.moviePreview))
      Error.moviePreview = "*Movie Preview must be a valid URL.";
    if (!genre.test(movie.genre))
      Error.genre = "*Genre can only contain letters.";
    if (!rating.test(movie.rating))
      Error.rating = "*Rating must be a number between 0 and 10.";

    if (Object.keys(Error).length > 0) {
      setError(Error);
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!Validate()) return;

    AddMovie(movie);

    setMovie({
      title: "",
      director: "",
      moviePreview: "",
      genre: "",
      rating: "",
    });
  };

  return (
    <div className="responsive-width border border-white rounded-3 p-4 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label ">Movie Name</label>
          <input
            type="text"
            className="form-control bg-dark text-white"
            name="title"
            value={movie.title}
            onChange={handleChange}
          />
          {error.name && <p className="text-danger">{error.name}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Director</label>
          <input
            type="text"
            className="form-control bg-dark text-white"
            name="director"
            value={movie.director}
            onChange={handleChange}
          />
          {error.director && <p className="text-danger">{error.director}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Genre</label>
          <input
            type="text"
            className="form-control bg-dark text-white"
            name="genre"
            value={movie.genre}
            onChange={handleChange}
          />
          {error.genre && <p className="text-danger">{error.genre}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Ratings</label>
          <input
            type="text"
            className="form-control bg-dark text-white"
            name="rating"
            value={movie.rating}
            onChange={handleChange}
          />
          {error.rating && <p className="text-danger">{error.rating}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Movie Preview Link</label>
          <div className="input-group">
            <span
              className="input-group-text bg-dark text-white"
              id="basic-addon1"
            >
              <IoMdGlobe size={24} />
            </span>
            <input
              type="text"
              className="form-control bg-dark text-white"
              name="moviePreview"
              value={movie.moviePreview}
              onChange={handleChange}
            />
          </div>
          {error.moviePreview && (
            <p className="text-danger">{error.moviePreview}</p>
          )}
        </div>
        <div>
          <button className="btn btn-primary">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;
