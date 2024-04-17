import  { useEffect, useState } from "react";
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
        {!showAllCategs && (<>
          {categories.slice(0, 4).map((item) => (
            <div className="categorie_card" key={`card-${item.name}`}>
              <img
                className="image_categorie"
                src={item.image_background}
                alt=""
              />
              <h4 className="categorie_name">{item.name}</h4>
            </div>
          ))}
          <button type="button" onClick={() => setShowAllCategs(true)}>
            show me more
          </button>
        </>

        )}
        {showAllCategs && (
          categories.map((item) => (
            <div className="categorie_card" key={`card-${item.name}`}>
              <img
                className="image_categorie"
                src={item.image_background}
                alt=""
              />
              <h4 className="categorie_name">{item.name}</h4>
            </div>
          )))}
      </div>
    </div>
  );
}

export default Categories;