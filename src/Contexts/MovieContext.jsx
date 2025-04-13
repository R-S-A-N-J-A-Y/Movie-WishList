import { createContext, useContext, useState } from "react";

export const MovieContext = createContext();

const initalMovies = [
  {
    id: 1,
    title: "Avengers: Infinity War",
    director: "Anthony and Joe Russo",
    moviePreview: "/public/MoviePreview/InfinityWar.jpg",
    genre: "Superhero",
    rating: 9.3,
    isWatched: true,
    isFavorite: true,
  },
  {
    id: 2,
    title: "Furious 7",
    director: "James Wan",
    moviePreview:
      "https://i.pinimg.com/736x/d4/96/5a/d4965a1709df4fb9fb2700e7d421f78e.jpg",
    genre: "Action",
    rating: 8.6,
    isWatched: false,
    isFavorite: false,
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    moviePreview:
      "https://i.pinimg.com/736x/28/c6/ea/28c6ea971e260f467aa919769b1c8e66.jpg",
    genre: "Action",
    rating: 8.3,
    isWatched: true,
    isFavorite: false,
  },
  {
    id: 4,
    title: "Justice League",
    director: "Zack Snyder",
    moviePreview:
      "https://i.pinimg.com/736x/0d/6a/ca/0d6acaa9adee3a18816224a47727ef5b.jpg",
    genre: "Superhero",
    rating: 9.2,
    isWatched: false,
    isFavorite: false,
  },
  {
    id: 5,
    title: "Avatar",
    director: "James Cameron",
    moviePreview:
      "https://i.pinimg.com/736x/c6/32/1a/c6321a2366e14f7b7bf58bbd0c0ad4a6.jpg",
    genre: "Sci-Fi",
    rating: 8.5,
    isWatched: false,
    isFavorite: false,
  },
  {
    id: 6,
    title: "Spiderman: Across the Spiderverse",
    director: "Joaquim Dos Santos",
    moviePreview:
      "https://i.pinimg.com/736x/4e/5b/d9/4e5bd98200b15ac23f99f6319a95b858.jpg",
    genre: "Superhero",
    rating: 8.4,
    isWatched: false,
    isFavorite: true,
  },
  {
    id: 7,
    title: "Harry Potter and the Half-Blood Prince",
    director: "David Yates",
    moviePreview:
      "https://i.pinimg.com/736x/ee/03/b3/ee03b376ecb58eed4a65936420233507.jpg",
    genre: "Fantasy",
    rating: 8.1,
    isWatched: true,
    isFavorite: false,
  },
  {
    id: 8,
    title: "Transformers: Age of Extinction",
    director: "Michael Bay",
    moviePreview:
      "https://i.pinimg.com/736x/2e/93/47/2e93470a50a734e6d30b5af69317429a.jpg",
    genre: "Action",
    rating: 8.7,
    isWatched: false,
    isFavorite: false,
  },
  {
    id: 9,
    title: "Star Wars: Episode VII - The Force Awakens",
    director: "J.J. Abrams",
    moviePreview:
      "https://i.pinimg.com/736x/90/53/b5/9053b5fe278bb9c856b1f641c17bbf51.jpg",
    genre: "Sci-Fi",
    rating: 8.3,
    isWatched: false,
    isFavorite: false,
  },
  {
    id: 10,
    title: "Jurassic World: Dominion",
    director: "Colin Trevorrow",
    moviePreview:
      "https://i.pinimg.com/736x/a9/e6/e8/a9e6e8362b3901551a463b747ce0a3a2.jpg",
    genre: "Sci-Fi",
    rating: 7.6,
    isWatched: true,
    isFavorite: false,
  },
];

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(initalMovies);
  const [Favorites, setFavorite] = useState(
    initalMovies.filter((mov) => mov.isFavorite)
  );

  const toggleWatched = (id) => {
    setMovies(
      movies.map((mov) =>
        mov.id === id ? { ...mov, isWatched: !mov.isWatched } : mov
      )
    );
  };

  const toggleLikes = (id) => {
    const updatedMovies = movies.map((mov) =>
      mov.id === id ? { ...mov, isFavorite: !mov.isFavorite } : mov
    );
    setMovies(updatedMovies);
    setFavorite(updatedMovies.filter((mov) => mov.isFavorite));
  };

  const AddMovie = (movie) => {
    setMovies([...movies, { id: movies.length + 1, ...movie }]);
  };

  const DeleteMovie = (id) => {
    setMovies(movies.filter((mov) => mov.id !== id));
    setFavorite(Favorites.filter((mov) => mov.id !== id));
  };

  const AvailableMovies = movies.length;
  const WatchedMovies = movies.filter((mov) => mov.isWatched).length;
  const FavoriteMovies = Favorites.length;

  const AllGenres = movies.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + 1;
    return acc;
  }, {});

  return (
    <MovieContext.Provider
      value={{
        movies,
        Favorites,
        toggleWatched,
        toggleLikes,
        AddMovie,
        DeleteMovie,
        AvailableMovies,
        WatchedMovies,
        FavoriteMovies,
        AllGenres,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => useContext(MovieContext);
