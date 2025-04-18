import { useMovie } from "../Contexts/MovieContext";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { movies } = useMovie();

  return (
    <div className="m-2 p-4 movie-list">
      <h1 className="text-center">Available Movies</h1>
      <div className="m-0 row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 gx-4 gy-5">
        {movies.map((movie) => (
          <div className="col" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
