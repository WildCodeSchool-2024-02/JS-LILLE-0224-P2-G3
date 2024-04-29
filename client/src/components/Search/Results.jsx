import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePage } from "../../contexts/PageContext";
import { useGame } from "../../contexts/GameContext";
import Api from "../../services/Api";
import FilterCategoryPlatform from "../Filter/FilterCategoryPlatform";
import "./Search.scss";

function Results() {
  const [games, setGames] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const { state } = useLocation();
  const { openGameWebsite } = useGame();
  const handleOpenGameWebsite = (gameId) => {
    openGameWebsite(gameId);
  };

  const { page, PrevioushandleClick, NexthandleClick } = usePage();

  const getByName = () => {
    Api.getByName(state.query, page).then((resp) => {
      setGames(resp.data.results);
        setAllGames(resp.data.results);
      });
    };

  useEffect(() => {
    getByName();
    
  }, [state.query, page]);

  return (
    <div>
      <h2> Résultats pour {state.query}</h2>
      <FilterCategoryPlatform
          games={games}
          setGames={setGames}
          allGames={allGames}
          setAllGames={setAllGames}
        />
      <div className="search_grid_container">
        <div className="search_grid">
          {games &&
            games.map((game) => (
              <div className="search_card" key={`card-${game.id}`}>
                <img
                  className="search_image"
                  src={game.background_image}
                  alt=""
                  key={item.id}
                  role="presentation"
                  onClick={() => handleOpenGameWebsite(item.id)}
                />
                <div className="search_info">
                  <div className="search_name">
                    {game.name}
                    <div className="platform">
                    {game.platforms &&
                      game.platforms.map((plat) => {
                        if (
                          plat.platform.name === "Wii" ||
                          plat.platform.name === "Nintendo Switch" ||
                          plat.platform.name === "Xbox One" ||
                          plat.platform.name === "Xbox Series S/X" ||
                          plat.platform.name === "PC" ||
                          plat.platform.name === "PlayStation 3" ||
                          plat.platform.name === "PlayStation 4" ||
                          plat.platform.name === "PlayStation 5"
                        ) {
                          return (
                            <div
                              className="platform_name"
                              key={plat.platform.name}
                            >
                              {" "}
                              {plat.platform.name}
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                  <div className="search_date">
                    {game.released}
                    <div className="rating">{game.rating} ★</div>
                  </div>
                </div>
              </div>
            ))}
          <div className="pagination">
            <button type="button" onClick={PrevioushandleClick}>
              précédent
            </button>
            <p>{page}</p>
            <button type="button" onClick={NexthandleClick}>
              suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
