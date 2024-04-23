import Search from "../Search/Search";
import "./Navbar.scss";


function Navbar() {
  return (
    <div className="navbar_top">
      <div className="navbar">
        <div className="logo_titre_navbar">
          <div className="imglogo_navbar">
            <img className="image_navbar_logo" src="../public/logo/logo-final.png" alt="logo" />
          </div>
        </div>
        <div className="anchor_filter_navbar">
          <div className="anchor_navbar">
            <ul>
              <li>Tendances</li>
              <li>Streaming</li>
              <li>Catégories</li>
              <li>Rechercher</li>
            </ul>
          </div>

          <Search />
        </div>
      </div>

    </div>
  );
}

export default Navbar;
