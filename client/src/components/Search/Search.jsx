
import { useNavigate } from "react-router-dom";
import "./Search.scss";

function Search() {

  const navigate = useNavigate();

  return (
    <div className="filter_navbar" >
      <input
        type="search"
        name="search-form"
        id="search-form"
        className="searchnavbar"
        onChange={(e) => navigate('/rechercher', { state: { query: e.target.value } })}
        placeholder="Search your next game"

      />
    </div>
  );
}

export default Search;
