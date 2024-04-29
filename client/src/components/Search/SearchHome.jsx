import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.scss";

function SearchHome() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/rechercher?query=${query}`, {
      state: { query },
    });
    setQuery("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
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
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          placeholder="Rechercher"
        />
      </form>
    </div>
  );
}

export default SearchHome;
