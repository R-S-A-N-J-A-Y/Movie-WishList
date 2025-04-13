import React from "react";
import GenreCard from "./GenreCard";

const MovieGenres = () => {
  return (
    <div
      className="m-3 border border-2 border-white rounded-5 d-flex flex-column p-4"
      style={{ width: "900px" }}
    >
      <h3 className="mb-4">Genre List Available: </h3>
      <GenreCard />

      <div className="mb-3">
        <button className="btn btn-primary p-2 border border-primary rounded-3">
          View More
        </button>
      </div>
    </div>
  );
};

export default MovieGenres;
