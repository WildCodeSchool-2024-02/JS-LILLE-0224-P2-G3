import { useEffect, useState } from "react";
import Api from "./Api";
import "./Categories.scss";

function Categories() {
  const [categorie, setCategories] = useState([]);


  const getCategories = () => {
    Api.getCategories.then((resp) => {
      setCategories(resp.data.results);
    });
  }


  useEffect(() => {
    getCategories();
  }, []);


  return (
    <div>
      <h2> genre</h2>
      <div className="grid_categorie_card">
        {categorie.map((item) => (
          <div className="categorie_card" key="{item.name}">
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
