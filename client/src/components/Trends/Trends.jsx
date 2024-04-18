import { useState, useEffect } from "react";
import TrendingCard from "./TrendingCard/TrendingCard";

function Trends() {
  const trendsList = [
    {
      image: "/public/trends/starwars.jpeg",
      title: "Sortie de Star Wars Outlaws",
      info: "Une fuite en provenance du Japon nous a permis d’apprendre que le jeu d’Ubisoft Massive sortirait cet été, mais il nous restait encore à découvrir la bande-annonce en elle-même, centrée sur l’histoire inédite que le jeu va nous raconter. On ne sera pas surpris par la date mentionnée par ce trailer, mais la vidéo avait de toute façon plein d’autres choses à nous montrer. Star Wars Outlaws prend ici des allures d’Uncharted avec cette grande aventure mouvementée dans laquelle Kay Vess va faire face à de multiples épreuves, notamment en se frottant à un syndicat du crime qu’il ne fallait pas énerver : le Zerek Besh et son chef Sliro qui vont pourchasser notre héroïne. C’est pour cela que Kay devra s’allier malgré elle à d’autre organisations criminelles comme le syndicat Pike ou le cartel Hutt pour échapper à son ennemi principal.",
      link: "https://www.actugaming.net/star-wars-outlaws-tout-savoir-634719/",
      class: "div1",
    },
    {
      image: "/public/trends/nasr.jpeg",
      title: "Nasr ignite domine la league",
      info: "The NASR Ignite team, consisting of JustPurii, Nana, Zaina, Nami, Looxie, Safia, Martii and coached by Maski, has proven to be unstoppable in the Al Majd league, a regional tournament for female Valorant players in the Levant and North Africa, organized by Riot Games & Calyx. The team finished series 1 in May 2023 with a perfect 7-0 record and repeated the feat in series 2 in July 2023 with a 6-0 record, qualifying for the LAN grand finals in KSA at Gamers 8, where they finished Second.",
      link: "https://nasresports.com/nasr-ignite-the-female-valorant-team-from-nasr-esports-dominates-al-majd-levant-and-na-league/",
      class: "div2",
    },
    {
      image: "/public/trends/zevent-2022.jpeg",
      title: "Retour du Zevent",
      info: "Le Z Event est de retour. Après une interruption d’un an, l’évènement va revenir en 2024. C’est ce qu’a annoncé le 12 mars Adrien Nougaret, alias Zerator, à l’occasion de son passage dans Popcorn, l’émission organisée sur Twitch par Pierre-Alexis Bizot, alias Domingo. « Il y aura un Z Event cette année. On travaille dessus », a déclaré l’intéressé.",
      link: "https://www.numerama.com/politique/1651766-il-y-aura-un-z-event-le-marathon-caritatif-du-jeu-video-revient-apres-un-an-de-pause.html",
      class: "div3",
    },
    {
      image: "/public/trends/activision.jpeg",
      title: "Rachat d'Activision Blizzard",
      info: "L’autorité de régulation britannique a finalement donné son accord au rachat de l’éditeur de jeux vidéo américain Activision Blizzard par le géant Microsoft. Près de deux ans après son annonce, l’opération record à 68,7 milliards aboutit",
      link: "https://www.letemps.ch/economie/le-dernier-obstacle-au-rachat-d-activision-blizzard-par-microsoft-est-leve",
      class: "div4",
    },
    {
      image: "/public/trends/zlan-2024.jpeg",
      title: "Zlan 2024",
      info: "ZeratoR a révélé toutes les infos sur la ZLAN 2024 ! Lors d’un nouveau PowerPoint de qualité présenté le 6 avril, on a pu découvrir la liste des complètes des jeux, leurs règles particulières, les dats et le format global de la compétition !",
      link: "https://www.mandatory.gg/events/zlan/tout-savoir-sur-la-zlan-2024-jeux-dates-format-inscriptions-billeterie-et-plus-encore/",
      class: "div5",
    },
  ];

  const [focusCard, setFocusCard] = useState(trendsList[0]);
  const [othersTrends, setOthersTrends] = useState(
    trendsList.filter((trend) => trend.title !== focusCard.title)
  );

  useEffect(() => {
    const updatedTrendsArray = trendsList.filter(
      (trend) => trend.title !== focusCard.title
    );
    setOthersTrends(updatedTrendsArray);
  }, [focusCard]);

  //    DISPOSITION MOBILE
  const [cardIndex, setCardIndex] = useState(0);
  const buttonPrevious = () => {
    setCardIndex(cardIndex - 1);
  };
  const buttonNext = () => {
    setCardIndex(cardIndex + 1);
  };

  return (
    <>
      <h2>TENDANCES</h2>
      <div className="all_cards">
        <div className="focus_card">
          <TrendingCard tendances={focusCard} />
        </div>
        <div className="buttons">
          {cardIndex > 0 && (
            <button
              className="button_previous"
              type="button"
              onClick={buttonPrevious}
            >
              &lt;
            </button>
          )}
        </div>
        <div className="focus_card_mobile">
          <TrendingCard tendances={trendsList[cardIndex]} id="focus_mobile " />
        </div>

        <div className="otherCards">
          {othersTrends.map((trend) => (
            <TrendingCard
              tendances={trend}
              focusCard={focusCard}
              setFocusCard={setFocusCard}
              key={trendsList.name}
            />
          ))}
        </div>
        <div className="buttons">
          {cardIndex < trendsList.length - 1 && (
            <button className="button_next" type="button" onClick={buttonNext}>
              &gt;
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Trends;
