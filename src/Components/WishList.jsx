import { useMovie } from "../Contexts/MovieContext";
import MovieCard from "./MovieCard";

const WishList = () => {
  const { Favorites } = useMovie();
  return (
    <div className="m-2 p-3">
      <h1 className="text-center">My Favorites</h1>
      <div className="m-0 row row-cols-5 g-3">
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
