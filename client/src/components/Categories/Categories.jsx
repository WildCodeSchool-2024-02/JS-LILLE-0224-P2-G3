import { useEffect, useState } from "react";
import Api from "./Api";
import "./Categories.scss";

function Categories() {
  //    SHOW THE DIFFERENT CATEGORIES
  const [categorie, setCategories] = useState([]);

  const getCategories = () => {
    Api.getCategories.then((resp) => {
      setCategories(resp.data.results);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  //    GET THE GENDER WHEN YOU CLICK
  // LIGNES DU DESSOUS COMMENTÉES POUR PUSH DE 21 À 39
  // const [gamesByGenreId, setGamesByGenreId] = useState([]);

  // const getGamesbyGenreId = (id) => {
  //   Api.getGamesbyGenreId(id).then((resp) => {
  //     setGamesByGenreId(resp.data.results);
  //   });
  // };

  return (
    <div>
      <h2> genre</h2>
      <div className="grid_categorie_card">
        {categorie.map((item) => (
          <div
            role="presentation"
            key={`${item.name}-${item.id}`}
            // onClick={() => {
            //   getGamesbyGenreId(item.id);
            // }}
            className="categorie_card"
          >
            <h4 className="categorie_name">{item.name}</h4>
            <img
              className="image_categorie"
              src={item.image_background}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
