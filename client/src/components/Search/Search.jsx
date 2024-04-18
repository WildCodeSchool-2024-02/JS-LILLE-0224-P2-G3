import { useState } from "react";
import Api from "../Categories/Api";
import "./Search.scss";

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
            <div className="search_grid">
                <div>
                    {resultsSearchByName &&
                        resultsSearchByName.map((item) => (
                            <div className="search_result" key={`card-${item.id}`}>
                                <img
                                    className="image_result"
                                    src={item.background_image}
                                    alt=""
                                />{" "}
                                {item.name}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Search;
