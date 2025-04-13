import { createContext, useContext, useState } from "react";

export const MovieContext = createContext();

const initalMovies = [
  {
    id: 1,
    title: "Avengers: Infinity War",
    director: "Anthony and Joe Russo",
    moviePreview: "/public/MoviePreview/InfinityWar.jpg",
    genre: "Superhero",
    rating: 8.4,
    isWatched: true,
    isFavorite: true,
  },
];

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(initalMovies);

  const toggleWatched = (id) => {
    setMovies(
      movies.map((mov) =>
        mov.id === id ? { ...mov, isWatched: !mov.isWatched } : mov
      )
    );
  };

  return (
    <MovieContext.Provider value={{ movies, toggleWatched }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => useContext(MovieContext);
