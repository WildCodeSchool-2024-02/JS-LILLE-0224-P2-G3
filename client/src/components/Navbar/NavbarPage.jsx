import { useState } from "react";
import Search from "../Search/Search";
import "./Navbar.scss";

function NavbarPage() {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
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
        <div className="navbar_page">
          <div className="anchor_navbar">
            <ul>
              <li>
                <button type="button" onClick={toggleSearch}>
                  <img
                    className="search_logo"
                    src="../../../public/button/home.png"
                    alt="rechercher"
                  />
                </button>
              </li>
              <li>
                <button type="button" onClick={toggleSearch}>
                  <img
                    className="search_logo"
                    src="../../../public/button/rechercher.png"
                    alt="rechercher"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
        {isSearchVisible && <Search />}
      </div>
    </div>
  );
}

export default NavbarPage;
