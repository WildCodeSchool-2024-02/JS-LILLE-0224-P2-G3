import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Burgermenu from "./Burgermenu";
import "./Navbar.scss";

function Navbar() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="navbar_top">
      <div className="navbar">
        <div className="logo_titre_navbar">
          <div className="imglogo_navbar">
            <img
              className="image_navbar_logo"
              src="../public/logo/logo-final.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="anchor_filter_navbar">
          <div className="anchor_navbar">
            <ul>
              <li>
                <a href="#trending" onClick={() => scrollToSection("trends")}>
                  Tendances
                </a>
              </li>
              <li>
                <a href="#streaming" onClick={() => scrollToSection("stream")}>
                  Streaming
                </a>
              </li>
              <li>
                <a href="#category" onClick={() => scrollToSection("categ")}>
                  Catégories
                </a>
                <Link to="./" type="button">
                 
                    <img
                      className="home_logo"
                      src="/public/button/home.png"
                      alt="home"
                    />
                 
                </Link>
              </li>
              <li>
                <Link
                  to="./#trending"
                  onClick={() => scrollToSection("trending")}
                >
                  Tendances
                </Link>
              </li>
              <li>
                <Link
                  to="./#streaming"
                  onClick={() => scrollToSection("streaming")}
                >
                  Streaming
                </Link>
              </li>
              <li>
                <Link
                  to="./#category"
                  onClick={() => scrollToSection("category")}
                >
                  Catégories
                </Link>
              </li>
              <li>
                <button type="button" onClick={toggleSearch}>
                  <img
                    className="search_logo"

                    src="/public/button/rechercher.png"
                    alt="rechercher"
                  />
                </button>
              </li>
            </ul>
            <div
              className="hamburger"
              role="presentation"
              onClick={toggleHamburger}
            >
              <Burgermenu isOpen={hamburgerOpen} toggleMenu={toggleHamburger} />
            </div>
            <div className="search_navbar">{isSearchVisible && <Search />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
