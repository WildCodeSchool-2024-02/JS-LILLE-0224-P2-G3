import { createContext, useContext, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import Api from "../services/Api";

const GameContext = createContext();

export function GameProvider({ children }) {
  const openGameWebsite = useCallback(async (gameId) => {
    try {
      const response = await Api.getWebSite(gameId);
      const game = response.data;
      if (game.website) {
        window.open(game.website, "_blank");
      } else {
        console.error("No website available for this game.");
      }
    } catch (error) {
      console.error("Error fetching game website:", error);
    }
  }, []);

  const contextValue = useMemo(
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
