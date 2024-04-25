import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../Categories/Api";
import FilterCategoryPlatform from "./FilterCategoryPlatform";
import "./CategoryCard.scss";

function CategoryCard() {
  const [games, setGames] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    const getGamesByGenre = () => {
      Api.getGamesByGenre(state.CategoryId).then((resp) => {
        setGames(resp.data.results);
        setAllGames(resp.data.results);
      });
    };
    getGamesByGenre();

  }, [state]);

  return (
    <div>
      <div>
        <h2>GENRE</h2>
        <FilterCategoryPlatform
          games={games}
          setGames={setGames}
          allGames={allGames}
          setAllGames={setAllGames}
        />
        <div className="category_grid_container">
          <div className="category_grid">
            {games.map((game) => (
              <div key={game.id} className="category_card">

                <img
                  className="category_image"
                  alt=""
                  src={game.background_image}
                  style={{ width: "500px" }}
                />
                <div>
                  <p className="category_name">{game.name}</p>
                  <p className="rating">{game.rating} ⭐️</p>
                  <div className="platform">
                    {game.platforms &&
                      game.platforms.map((plat) => (
                        <div className="platform_name" key={plat.platform.name}>
                          {" "}
                          {plat.platform.name}
                        </div>
                      ))}
                  </div>
                </div>
                <div className="platform">
                  {games.platforms &&
                    games.platforms.map((plat) => (
                      <div className="platform_name" key={plat.platform.name}>
                        {" "}
                        {plat.platform.name}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
