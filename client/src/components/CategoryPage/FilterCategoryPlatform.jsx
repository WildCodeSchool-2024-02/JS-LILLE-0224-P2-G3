import { useState } from "react";
import PropTypes from "prop-types";

function FilterCategoryPlatform({ games, setGames, allGames }) {
  //      Declaration of state for the selected category and the filtered elements
  const [selectedPlatform, setSelectedPlatform] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [filteredGames, setFilteredGames] = useState(games);

  //      Function to handle the change of selected category
  const handleSelectChange = (event) => {
    const platform = event.target.value;
    setSelectedPlatform(platform);
    if (platform.includes("option")) {
      setGames(allGames);
    } else {
      const filtered = allGames.filter((item) =>
        item.platforms.some(
          (platformObj) => platformObj.platform.name === platform
        )
      );
      setGames(filtered);
      setFilteredGames(filtered);
    }
  };

  return (
    <>
      <label htmlFor="platform-select" style={{ color: "white" }}>
        Choisir une plateforme :
      </label>

      <select
        name="platforms"
        id="platform-select"
        value={selectedPlatform}
        onChange={handleSelectChange}
      >
        <option value="option">--Choisir une option--</option>
        <option value="PC">PC</option>
        <option value="Nintendo Switch">Nintendo Switch</option>
        <option value="Wii">Wii</option>
        <option value="xbox One">xbox One</option>
        <option value="xbox serie S/X">xbox serie S/X</option>
        <option value="PlayStation 3">PlayStation 3</option>
        <option value="PlayStation 4">PlayStation 4</option>
        <option value="PlayStation 5">PlayStation 5</option>
      </select>
    </>
  );
}

FilterCategoryPlatform.propTypes = {
  games: PropTypes.string.isRequired,
  setGames: PropTypes.string.isRequired,
  allGames: PropTypes.string.isRequired,
};

export default FilterCategoryPlatform;
