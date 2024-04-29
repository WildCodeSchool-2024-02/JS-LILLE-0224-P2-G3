import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import "./Navbar.scss";

function Navbar() {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
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
                <Link to="./">
                  <button type="button">
                    <img
                      className="home_logo"
                      src="/public/button/home.png"
                      alt="home"
                    />
                  </button>
                </Link>
              </li>
              <li>
                <Link to="./">
                  <a
                    href="#trending"
                    onClick={() => scrollToSection("trending")}
                  >
                    Tendances
                  </a>
                </Link>
              </li>
              <li>
                <Link to="./">
                  <a
                    href="#streaming"
                    onClick={() => scrollToSection("streaming")}
                  >
                    Streaming
                  </a>
                </Link>
              </li>
              <li>
                <Link to="./">
                  <a
                    href="#category"
                    onClick={() => scrollToSection("category")}
                  >
                    Catégories
                  </a>
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
          </div>

          {isSearchVisible && <Search />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
