import React from "react";
import MovieGenres from "./MovieGenres";
import MovieStats from "./MovieStats";
import { useMovie } from "../Contexts/MovieContext";

const Stats = () => {
  const { AvailableMovies, WatchedMovies, FavoriteMovies } = useMovie();
  const arr = [AvailableMovies, WatchedMovies, FavoriteMovies];

  return (
    <div className="d-flex justify-content-between p-5">
      <div className="row p-3 row-cols-2 gx-3 gy-5">
        {arr.map((item, index) => (
          <div className="col p-4">
            <MovieStats index={index} item={item} />
          </div>
        ))}
      </div>

      <MovieGenres />
    </div>
  );
};

export default Stats;
