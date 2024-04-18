import { useNavigate } from "react-router-dom";

function Search() {

  const navigate = useNavigate();

  return (
    <div className="input-box" style={{ padding: '30px' }}>
      <input
        type="search"
        name="search-form"
        id="search-form"
        className="search-input"
        onChange={(e) => navigate('/rechercher', { state: { query: e.target.value } })}
        placeholder="Search user"

      />
    </div>
  );
}

export default Search;
