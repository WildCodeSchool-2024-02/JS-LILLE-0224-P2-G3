import "./CardStream.scss";
import CardStream from "./CardStream";

function CardStreamList() {
  const streamerList = [
    {
      name: "SQUEEZIE",
      image: "/public/twitch/squeezie.jpeg",
      description:
        "Squeezie, numéro un sur Youtube, captive son public avec son humour vif et ses sessions de jeu passionnantes sur Twitch, attirant des millions de spectateurs à chaque stream.",
      video: "/public/twitch/squeezie.mp4",
      class: "card1",
    },
    {
      name: "MAGHLA",
      image: "/public/twitch/maghla.jpeg",
      description:
        "Maghla, créatrice talentueuse, attire un large public grâce à son gameplay expert, rassemblant une communauté dévouée notamment lors de ses streams sur les jeux d'horreur",
      class: "card2",
    },
    {
      name: "DOMINGO",
      image: "/public/twitch/domingo.jpeg",
      description:
        "Domingo, streamer très populaire sur Twitch grâce à son émission Popcorn basée sur des interviews et des jeux avec des célébrités actuelles, rassemble une communauté passionnée.",
      class: "card3",
    },
    {
      name: "MISTER MV",
      image: "/public/twitch/mistermv.jpeg",
      description:
        "Mister MV, un streamer renommé sur Twitch, séduit son public avec son expertise dans les jeux vidéo rétro et son style de narration captivant, attirant une base de fans fidèles à chaque stream et vidéo Youtube.",
      class: "card4",
    },
  ];

  return (
    <>
      <div>
        <h2>STREAM</h2>
      </div>
      <div className="streamer_list">
        {streamerList.map((streamer) => (
          <CardStream stream={streamer} key={streamer.name} />
        ))}
      </div>
      <button type="button">Voir plus</button>
    </>
  );
}

export default CardStreamList;
