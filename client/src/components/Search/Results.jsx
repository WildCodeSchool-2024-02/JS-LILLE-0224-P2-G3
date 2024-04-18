import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../Categories/Api";


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
            toto
            <h2> Résultats pour {getByName}</h2>
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

export default Results;