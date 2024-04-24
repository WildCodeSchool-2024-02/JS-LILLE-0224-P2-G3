import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePage } from "../../contexts/PageContext";
import Api from "../Categories/Api";
import "./Search.scss";

function Results() {
  const [resultsSearchByName, setResultsSearchByName] = useState([]);
  const { page, PrevioushandleClick, NexthandleClick } = usePage();

  const { state } = useLocation();

  useEffect(() => {
    const getByName = () => {
      Api.getByName(state.query, page).then((resp) => {
        setResultsSearchByName(resp.data.results);
      });
    };

    getByName();
  }, [state.query, page]);
  return (
    <div>
      <h2> Résultats pour {state.query}</h2>
      <div className="search_grid_container">
        <div className="search_grid">
          {resultsSearchByName &&
            resultsSearchByName.map((item) => (
              <div className="search_card" key={`card-${item.id}`}>
                <img
                  className="search_image"
                  src={item.background_image}
                  alt=""
                />
                <div className="search_info">
                  <div className="search_name">
                    {item.name}
                    <div className="platform">
                      {item.platforms &&
                        item.platforms.slice(0, 3).map((plat) => (
                          <div
                            className="platform_name"
                            key={plat.platform.name}
                          >
                            {" "}
                            {plat.platform.name}
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="search_date">
                    {item.released}
                    <div className="rating">{item.rating} ★</div>
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
