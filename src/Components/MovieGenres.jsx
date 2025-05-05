import React from "react";
import GenreCard from "./GenreCard";
import { useNavigate } from "react-router-dom";

const MovieGenres = () => {
  const Navigator = useNavigate();

  return (
    <div className="m-3 border border-2 border-white rounded-5 d-flex flex-column p-4">
      <h3 className="mb-4">Genre List Available: </h3>
      <GenreCard />

      <div className="mb-3">
        <button
          className="btn btn-primary p-2 border border-primary rounded-3"
          onClick={() => Navigator("/genrelist")}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default MovieGenres;
