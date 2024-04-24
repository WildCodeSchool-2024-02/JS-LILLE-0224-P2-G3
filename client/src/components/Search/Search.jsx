import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.scss";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/rechercher?query=${query}`);
    setQuery("");
  };

  return (
    <div className="filter_navbar">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="searchnavbar"
          value={query}
          onChange={handleChange}
          placeholder="Rechercher votre prochain jeu"
        />
      </form>
    </div>
  );
}

export default Search;
