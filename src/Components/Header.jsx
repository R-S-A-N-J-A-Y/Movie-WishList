import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [url, setUrl] = useState("/");
  const [ismdScreen, setmdScreen] = useState(false);

  useEffect(() => {
    setUrl(location.pathname);
    const handleResize = () => {
      setmdScreen(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  return (
    <nav className="navbar header">
      <div
        className={`d-flex justify-content-${
          ismdScreen ? "start" : "center"
        } gap-5 scrollable-header w-100 ${ismdScreen ? "px-4" : ""}`}
      >
        <div className="d-flex flex-column align-items-center gap-2">
          <NavLink to="/" className="nav-link header-nav">
            Home
          </NavLink>
          {url === "/" && <div className="line"></div>}
        </div>

        <div className="d-flex flex-column align-items-center gap-2">
          <NavLink to="/stats" className="nav-link header-nav">
            Statistics
          </NavLink>
          {url === "/stats" && <div className="line"></div>}
        </div>
        <div className="d-flex flex-column align-items-center gap-2">
          <NavLink to="/addmovie" className="nav-link header-nav">
            Add Movie
          </NavLink>
          {url === "/addmovie" && <div className="line"></div>}
        </div>
        <div className="d-flex flex-column align-items-center gap-2">
          <NavLink to="/wishlist" className="nav-link header-nav">
            My WishList
          </NavLink>
          {url === "/wishlist" && <div className="line"></div>}
        </div>
      </div>
    </nav>
  );
};

export default Header;
