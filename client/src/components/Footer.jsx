import logoFooter from "../assets/images/LogoFooter.png";
import "./Footer.scss";

function Footer() {
  return (
    <div className="All">
      <div className="FooterAll">
        <div className="mentionLegal">
          <ul>
            <li>Les mentions</li>
            <li>legal</li>
            <li>encore</li>
            <li>plus</li>
            <li>et toujours plus</li>
          </ul>
        </div>
        <div className="logoFooter">
          <img className="imgLogoFooter" src={logoFooter} alt="logofooter" />
        </div>
        <div className="createurFooter">
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
