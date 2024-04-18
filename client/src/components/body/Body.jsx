import { useState } from "react";
import logoProfil from "../../assets/images/logoprofil.png";
import "./Body.scss";

function Body() {
  const [pseudoValue, setPseudoValue] = useState("");
  const handlePseudoChange = (event) => {
    setPseudoValue(event.target.value);
  };

  const handlePseudoSubmit = () => {
    const userHeaders = document.getElementsByClassName("userHeader");
    for (let i = 0; i < userHeaders.length; i += 1) {
      userHeaders[i].innerText = pseudoValue;
    }
  };

  const [adressValue, setAdressValue] = useState("");
  const handleAdressChange = (event) => {
    setAdressValue(event.target.value);
  };

  const handleAdresseSubmit = () => {
    document.getElementById("put_adress").innerText = adressValue;
  };

  return (
    <div className="all_body">
      <div className="logo_nom">
        <div className="logo">
          <img className="logopng" alt="logopng" src={logoProfil} />
        </div>
        <div className="nom_adress">
          <h1 className="userHeader">Utilisateur</h1>
          <div className="user_adress">
            <p>Adresse : </p>
            <p id="put_adress">&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="all_parametre">
        <h2 className="parametre">Paramètres</h2>
        <div className="perso_profil">
          <h3>Personalisé profil</h3>
        </div>
        <div className="all_pseudo">
          <div className="pseudo">
            <h3>Pseudonyme</h3>
          </div>
          <div className="input_send">
            <div className="input">
              <input
                className="putpseudo"
                type="search"
                value={pseudoValue}
                onChange={handlePseudoChange}
              />
            </div>
            <div className="button_send">
              <button
                className="button"
                type="submit"
                onClick={handlePseudoSubmit}
              >
                envoyé
              </button>
            </div>
          </div>
        </div>
        <div className="all_avatar">
          <div className="avatar">
            <h3>Avatar</h3>
          </div>
          <div className="input_send">
            <div className="input">
              <input className="putavatar" type="search" />
            </div>
            <div className="button_send">
              <button className="button" type="submit">
                envoyé
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="all_adresse">
        <div className="adresse">
          <h3>adresse</h3>
          <h4>Adresse</h4>
        </div>
        <div className="input_adress">
          <div className="input">
            <input
              id="put_adress"
              type="search"
              value={adressValue}
              onChange={handleAdressChange}
            />
          </div>
          <div className="button_adresse">
            <button
              className="button"
              type="submit"
              onClick={handleAdresseSubmit}
            >
              envoyé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
