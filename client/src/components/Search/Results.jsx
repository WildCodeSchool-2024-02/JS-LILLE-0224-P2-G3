import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../../services/Api";
import "./Search.scss";
import FilterSearchPlatform from "./FilterSearchPlatform";

function Results() {
  const [resultsSearchByName, setResultsSearchByName] = useState([]);
  const [allGamesResults, setAllGamesResults] = useState();
  const { state } = useLocation();

  const getByName = () => {
    Api.getByName(state.query).then((resp) => {
      setResultsSearchByName(resp.data.results);
      setAllGamesResults(resp.data.results);
    });
  };

  useEffect(() => {
    getByName();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.query]);

  return (
    <div>
      <h2> Résultats pour {state.query}</h2>
      <FilterSearchPlatform
        resultsSearchByName={resultsSearchByName}
        setResultsSearchByName={setResultsSearchByName}
        allGamesResults={allGamesResults}
      />
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
                        item.platforms.map((plat) => {
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
                    {item.released}
                    <div className="rating">{item.rating} ★</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Results;
