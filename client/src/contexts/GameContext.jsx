import { createContext, useContext, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import Api from "../services/Api";

const GameContext = createContext();

export function GameProvider({ children }) {
  const openGameWebsite = useCallback(async (gameId) => {
    // useCallback est un hook qui permet de stocker l'argument et le renvoyer
    // async permet d'executer le script une fois que le site est chargé
    try {
      // try permet d'envelopper le code et si une erreur apparait pendant l'execution le catch se declenche
      const response = await Api.getWebSite(gameId);
      // await permet d'attendre que la valeur de la fonction dois disponible car Api.getWebSite(gameId) peut prendre du temps
      const game = response.data;
      if (game.website) {
        window.open(game.website, "_blank");
        // window open permet d'ouvir le site dans une nouvelle fenetre
      } else {
        console.error("No website available for this game.");
      }
    } catch (error) {
      console.error("Error fetching game website:", error);
    }
  }, []);

  const contextValue = useMemo(
    // useMemo suite erreur Eslint c'est un hook qui permet de mettre en stock le resultat d'un autre hook
    () => ({
      openGameWebsite,
    }),
    [openGameWebsite]
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}
GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useGame = () => useContext(GameContext);
