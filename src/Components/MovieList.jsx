import MovieCard from "./MovieCard";

const movies = [
  {
    id: 1,
    title: "Avengers: Infinity War",
    director: "Anthony and Joe Russo",
    genre: "Superhero",
    rating: 8.4,
    isWatched: true,
    isFavorite: true,
  },
];

const MovieList = () => {
  return (
    <div className="m-2 p-3">
      <h1 className="text-center">My WishList</h1>
      <div className="m-0 row row-cols-5 g-3">
        {movies.map((movie) => (
          <div className="col">
            <MovieCard key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
