import logoFooter from "../../../public/logo/logo-final.png";
import "./Footer.scss";

function Footer() {
  return (
    <div className="all">
      <div className="footer_all">
        <div className="mention_legal">
          <ul>
            <li>Les mentions</li>
            <li>legal</li>
            <li>encore</li>
            <li>Site vers RAWG</li>
          </ul>
        </div>
        <div className="logo_footer">
          <img className="imglogo_footer" src={logoFooter} alt="logo_footer" />
          <div className="mention_legal_rawg">
            <p>2024 © RAWG, Behind The Games</p>
          </div>
        </div>
        <div className="creator_footer">
          <ul>
            <li>Arnauld Montandon</li>
            <li>Audrey Baudry</li>
            <li>Elias Ben Brahim</li>
            <li>Morgan Pouilly</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
