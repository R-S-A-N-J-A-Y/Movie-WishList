import React from "react";
import { useMovie } from "../Contexts/MovieContext";

const GenreCard = () => {
  const { AllGenres } = useMovie();
  const Genres = Object.keys(AllGenres).slice(0, 4);
  return (
    <div className="mt-2 fs-5 genre-card">
      {Genres.map((genre, index) => (
        <p key={index} className="border mb-4 py-2 px-3 rounded-4">
          {genre}
        </p>
      ))}
    </div>
  );
};

export default GenreCard;
