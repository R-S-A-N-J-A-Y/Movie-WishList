import React from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { TbTrashFilled } from "react-icons/tb";
import { PiFilmSlate } from "react-icons/pi";
import { useMovie } from "../Contexts/MovieContext";

const MovieCard = ({ movie }) => {
  const { toggleWatched } = useMovie();

  return (
    <div className="card movie-card">
      <div className="movie-card-top">
        <img className="card-img-top" src={movie.moviePreview}></img>
        <p className="movie-img-floater d-flex align-items-center gap-2">
          <PiFilmSlate size={25} /> {movie.rating}
        </p>
      </div>

      <div className="card-body movie-card-body">
        <h4 className="card-title">{movie.title}</h4>
        <p className="card-text">{movie.director}</p>
        <div className="pe-3 d-flex justify-content-between align-items-center ">
          <button
            className={`btn btn-${movie.isWatched ? "secondary" : "primary"}`}
            onClick={() => toggleWatched(movie.id)}
          >
            {movie.isWatched ? "Mark Unwatched" : " Add to Watch "}
          </button>
          <button className="movie-card-btn">
            {movie.isFavorite ? (
              <GoHeartFill size={29} color="red" />
            ) : (
              <GoHeart size={30} />
            )}
          </button>
          <button className="movie-card-btn">
            <TbTrashFilled color="white" size={29} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
