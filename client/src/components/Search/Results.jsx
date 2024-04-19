import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../Categories/Api";
import "./Search.scss";


function Results() {
    const [resultsSearchByName, setResultsSearchByName] = useState([]);
    const { state } = useLocation();

    const getByName = () => {
        Api.getByName(state.query).then((resp) => {
            setResultsSearchByName(resp.data.results);
        });
    }

    useEffect(() => {
        getByName();
    }, [state.query])



    return (

        <div>
            <h2> Résultats pour {getByName}</h2>
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
                                            {item.platforms && item.platforms.slice(0, 3).map((plat) => (
                                                <div className="platform_name" key={plat.platform.name}> {plat.platform.name}</div>
                                            )
                                            )}
                                        </div>
                                    </div>
                                    <div className="search_date">
                                        {item.released}
                                        <div className="rating">
                                            {item.rating} ★
                                        </div>
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