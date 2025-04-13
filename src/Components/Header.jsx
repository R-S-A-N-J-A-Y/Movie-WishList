import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-secondary header">
      <div class="container-fluid d-flex justify-content-center gap-5">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/stats" className="nav-link">
          Statistics
        </NavLink>
        <NavLink to="/addmovie" className="nav-link">
          Add Movie
        </NavLink>
        <NavLink to="/wishlist" className="nav-link">
          My WishList
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
