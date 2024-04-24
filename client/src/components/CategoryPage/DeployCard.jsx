import { useEffect, useState } from "react";
import Api from "../Categories/Api";

function DeployCard() {
  const [cardDeploy, setCardDeploy] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await Api.getDetails();
        if (response.status === 200) {
          setCardDeploy(response.data); // Utilisez response.data pour accéder aux données de l'API
        } else {
          throw new Error("Erreur lors de la récupération des données");
        }
      } catch (error) {
        console.error("Erreur:", error);
      }
    };
    getDetails();
  }, []);

  return (
    <div>
      {cardDeploy ? (
        <div>
          <p>Nom: {cardDeploy.name}</p>
          <p>Description: {cardDeploy.description}</p>
          <p>Slug: {cardDeploy.slug}</p>
          <p>Metacritic: {cardDeploy.metacritic}</p>
          <img src={cardDeploy.background_image} alt="test" />
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
}

export default DeployCard;
