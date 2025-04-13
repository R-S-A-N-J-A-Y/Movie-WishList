import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [url, setUrl] = useState("/");

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-sm header">
      <div className="container-fluid d-flex justify-content-center gap-5">
        <div className="d-flex flex-column align-items-center gap-2">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          {url === "/" && <div className="line"></div>}
        </div>

        <div className="d-flex flex-column align-items-center gap-2">
          <NavLink to="/stats" className="nav-link">
            Statistics
          </NavLink>
          {url === "/stats" && <div className="line"></div>}
        </div>
        <div className="d-flex flex-column align-items-center gap-2">
          <NavLink to="/addmovie" className="nav-link">
            Add Movie
          </NavLink>
          {url === "/addmovie" && <div className="line"></div>}
        </div>
        <div className="d-flex flex-column align-items-center gap-2">
          <NavLink to="/wishlist" className="nav-link">
            My WishList
          </NavLink>
          {url === "/wishlist" && <div className="line"></div>}
        </div>
      </div>
    </nav>
  );
};

export default Header;
