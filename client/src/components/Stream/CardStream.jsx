import PropTypes from "prop-types";
import "./CardStream.scss";

function CardStream({ stream }) {
  return (
    <div className={`${stream.class} card_stream`}>
      <div className="card_stream_container">
        <img
          className="cards_stream_image"
          src={stream.image}
          alt={stream.name}
        />
        <div className="card_stream_info">
          <h4>{stream.name}</h4>
          <p>{stream.description}</p>
        </div>
      </div>
    </div>
  );
}

CardStream.propTypes = {
  stream: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardStream;
