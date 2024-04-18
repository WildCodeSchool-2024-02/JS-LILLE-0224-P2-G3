import logoTitle from "../../assets/images/logonavbar.png";
import logoProfil from "../../assets/images/logoprofil.png";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbartop">
      <div className="navBar">
        <div className="logo_titre_navbar">
          <div className="imglogo_navbar">
            <img className="image_navbar_logo" src={logoTitle} alt="logo" />
          </div>
        </div>
        <div className="anchor_filter_navbar">
          <div className="anchor_navbar">
            <ul>
              <li>TENDANCES</li>
              <li>STREAMING</li>
              <li>CATEGORIES</li>
            </ul>
          </div>
          <div className="filter_navbar">
            <input className="searchnavbar" type="search" />
          </div>
        </div>

        <div className="logo_profil_navbar">
          <img
            className="image_navbar_profil"
            src={logoProfil}
            alt="logoProfil"
          />
          <div className="profil_navbar">
            <p>Profil</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
