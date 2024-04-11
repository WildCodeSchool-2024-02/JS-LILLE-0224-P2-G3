import PropTypes from "prop-types";
import "./TrendingCards.scss";

function TrendingCards({ tendances }) {
  return (
    <div className={`${tendances.class} trending_card_container `}>
      <img className="trending_card_image" src={tendances.image} alt="" />
      <div className="trending_card_info">
        <h3>{tendances.title}</h3>
        <p>{tendances.info}</p>
      </div>
    </div>
  );
}

TrendingCards.propTypes = {
  tendances: PropTypes.shape({
    class: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
};
export default TrendingCards;
