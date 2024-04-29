import "./Burgermenu.scss";
import PropTypes from "prop-types";

function Burgermenu({ isOpen, toggleMenu }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        role="presentation"
        onClick={toggleMenu}
      >
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
        {isOpen && (
          <div className="menu">
            <a href="#trending" onClick={() => scrollToSection("trends")}>
              Tendances
            </a>
            <a href="#streaming" onClick={() => scrollToSection("stream")}>
              Streaming
            </a>
            <a href="#category" onClick={() => scrollToSection("categ")}>
              Catégories
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

Burgermenu.propTypes = {
  isOpen: PropTypes.string.isRequired,
  toggleMenu: PropTypes.string.isRequired,
};

export default Burgermenu;
