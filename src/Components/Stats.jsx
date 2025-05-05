import React from "react";
import MovieGenres from "./MovieGenres";
import MovieStats from "./MovieStats";
import { useMovie } from "../Contexts/MovieContext";

const Stats = () => {
  const { AvailableMovies, WatchedMovies, FavoriteMovies } = useMovie();
  const arr = [AvailableMovies, WatchedMovies, FavoriteMovies];

  return (
    <div className="row row-cols-1 row-cols-xl-2 gx-4 gy-5 p-3 m-0">
      <div className="col p-4 row row-cols-1 row-cols-md-2 gx-2 gy-2 m-0">
        {arr.map((item, index) => (
          <div className="col p-4">
            <MovieStats index={index} item={item} />
          </div>
        ))}
      </div>

      <div className="col">
        <MovieGenres />
      </div>
    </div>
  );
};

export default Stats;
