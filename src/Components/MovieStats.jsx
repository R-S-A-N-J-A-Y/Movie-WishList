import React from "react";
import { useNavigate } from "react-router-dom";

const MovieStats = ({ item, index }) => {
  const navigater = useNavigate();
  const value = ["Available", "Watched", "Favorite"];

  const NavigateToPage = () => {
    if (index === 0) navigater("/");
    else if (index === 2) navigater("/wishlist");
    else navigater("/watched");
  };

  return (
    <div className="stats-card">
      <p>
        Total {value[index]} Movies: {item}{" "}
      </p>
      <button className="btn btn-primary" onClick={NavigateToPage}>
        Click To See
      </button>
    </div>
  );
};

export default MovieStats;
