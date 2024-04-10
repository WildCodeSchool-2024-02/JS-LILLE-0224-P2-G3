import PropTypes from "prop-types";
import "./TrendingCards.scss";

function TrendingCards({ tendances }) {
  return (
    <div>
      <div className="card_details_container">
        <figure>
          <img id="first_card_details" src={tendances.image} alt="" />
        </figure>
        <div className="card_details_info">
          <h3>{tendances.title}</h3>
          <p>{tendances.info}</p>
        </div>
      </div>
    </div>
  );
}

TrendingCards.propTypes = {
  tendances: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
};
export default TrendingCards;
