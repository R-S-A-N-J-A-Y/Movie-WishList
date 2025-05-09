import { useMovie } from "../Contexts/MovieContext";
import MovieCard from "./MovieCard";

const WishList = () => {
  const { Favorites } = useMovie();
  return (
    <div className="m-2 p-3 movie-list">
      <h1 className="text-center">My Favorites</h1>
      <div className="m-0 row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 gx-4 gy-5">
        {Favorites.map((movie) => (
          <div className="col">
            <MovieCard key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
