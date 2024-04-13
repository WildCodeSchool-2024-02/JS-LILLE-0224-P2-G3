import PropTypes from "prop-types";
import "./TrendingCard.scss";

function TrendingCard({ tendances, focusCard, setFocusCard }) {
  //      DISPOSITION CHANGE : CARD CLICKED GO TO FOCUS
  const handleChange = () => {
    if (!focusCard.title.includes(tendances.title)) {
      setFocusCard(tendances);
    }
  };

  return (
    <div className={`${tendances.class} trending_card_container`}>
      <div role="presentation" onClick={handleChange} onKeyDown={handleChange}>
        <img
          className="trending_card_image"
          src={tendances.image}
          alt={tendances.title}
        />
      </div>
      <div className="trending_card_info">
        <h3>{tendances.title}</h3>
        <p>{tendances.info}</p>
      </div>
    </div>
  );
}

TrendingCard.propTypes = {
  tendances: PropTypes.shape({
    class: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
  focusCard: PropTypes.string.isRequired,
  setFocusCard: PropTypes.string.isRequired,
};

export default TrendingCard;
