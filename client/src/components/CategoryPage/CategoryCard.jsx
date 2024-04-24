import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../Categories/Api";
import "./CategoryCard.scss";

function CategoryCard() {
  const [games, setGames] = useState([]);
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getGames = () => {
      Api.getGames(state.CategoryId).then((resp) => {
        setGames(resp.data.results);
      });
    };
    getGames();
  }, [state]);

  return (
    <div>
      <div>
        <h2>GENRE</h2>

        <div className="category_grid_container">
          <div className="category_grid">
            {games.map((jeu) => (
              <div
                key={jeu.id}
                role="presentation"
                className="category_card"
                onClick={() => {
                  navigate("/decouvrir/categorie/jeu", {
                    state: { GameId: jeu.GameId },
                  });
                }}
              >
                <div className="Hide">
                  <img
                    className="category_image"
                    alt=""
                    src={jeu.background_image}
                    style={{ width: "500px" }}
                  />
                </div>
                <div className="Display">
                  <p className="category_name">{jeu.name}</p>
                  <p className="rating">{jeu.rating} ⭐️</p>
                  <p className="id">{jeu.id} </p>
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
