import { useEffect, useState } from "react";
import Api from "./Api";
import "./Categories.scss";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [showAllCategs, setShowAllCategs] = useState();

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 390) {
      setShowAllCategs(false);
    } else { setShowAllCategs(true) }
  });

const getCategories = () => {
  Api.getCategories().then((resp) => { // Notez l'ajout de ()
    setCategories(resp.data.results);
  });
};

  useEffect(() => {
    getCategories();
    setShowAllCategs(window.innerWidth > 650);
  }, []);

  return (
    <div>
      <h2 id="category"> CATÉGORIES</h2>
      <div className="grid_category_card">
        {!showAllCategs && (<>
          {categories.slice(0, 4).map((item) => (
            <div className="categories_card" key={`card-${item.name}`}>
              <img
                className="image_category"
                src={item.image_background}
                alt=""
              />
              <h4 className="category_name">{item.name}</h4>
            </div>
          ))}
          <button className="button-with-logo" type="button" onClick={() => setShowAllCategs(true)}>
            <img src="/public/button/arrow-down.png" alt="Logo" className="logo" />
          </button>
        </>
        )}
        {showAllCategs && (
          categories.map((item) => (
            <div className="categories_card" key={`card-${item.name}`}>
              <img
                className="image_category"
                src={item.image_background}
                alt=""
              />
              <h4 className="category_name">{item.name}</h4>
            </div>
          )))}
      </div>
    </div>
  );
}

export default Categories;