import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../Categories/Api";
import "./CategoryCard.scss";

function CategoryCard() {
  const [game, setGame] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    const getGame = () => {
      Api.getGame(state.CategoryId).then((resp) => {
        setGame(resp.data.results);
      });
    };
    getGame();
  }, [state]);

  return (
    <div>
      <div>
        <h2>GENRE</h2>
        <div className="category_grid_container">
          <div className="category_grid">
            {game.map((jeu) => (
              <div key={jeu.id} className="category_card">
                <img
                  className="category_image"
                  alt=""
                  src={jeu.background_image}
                  style={{ width: "500px" }}
                />
                <div>
                  <p className="category_name">{jeu.name}</p>
                  <p className="rating">{jeu.rating} ⭐️</p>
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
