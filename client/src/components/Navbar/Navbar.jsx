import { useState } from "react";
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
              <li className="li_">
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
              </li>
              <li className="li_button">
                <div className="button_search">
                  <button type="button" onClick={toggleSearch}>
                    <img
                      className="search_logo"
                      src="../../../public/button/rechercher.png"
                      alt="rechercher"
                    />
                  </button>
                </div>
              </li>
            </ul>
            <div className="search_navbar">{isSearchVisible && <Search />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
