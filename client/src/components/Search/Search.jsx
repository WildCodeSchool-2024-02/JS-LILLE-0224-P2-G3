import { useState } from "react";
import Api from "../Categories/Api";

function Search() {
  const [search, setByName] = useState();
  const [resultsSearchByName, setResultsSearchByName] = useState([]);

  const getByName = (searchh) => {
    Api.getByName(searchh).then((resp) => {
      setResultsSearchByName(resp.data.results);
    });
  };

  return (
    <div className="input-box">
      <input
        type="search"
        name="search-form"
        id="search-form"
        className="search-input"
        onChange={(e) => setByName(e.target.value)}
        onKeyUp={() => getByName(search)}
        placeholder="Search user"
      />
      <div>
        {resultsSearchByName &&
          resultsSearchByName.map((item) => (
            <div className="grid_categorie_card" key={`card-${item.id}`}>
              <img
                className="image_categorie"
                src={item.background_image}
                alt=""
              />{" "}
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
