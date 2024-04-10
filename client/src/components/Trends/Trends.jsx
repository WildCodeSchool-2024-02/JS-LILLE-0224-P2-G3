import TrendingCards from "./TrendingCards/TrendingCards";

function Trends() {
  const tendances = [
    {
      image: "/public/trends/starwars.jpeg",
      title: "Sortie de Star Wars Outlaws",
      info: "Une fuite en provenance du Japon nous a permis d’apprendre que le jeu d’Ubisoft Massive sortirait cet été, mais il nous restait encore à découvrir la bande-annonce en elle-même, centrée sur l’histoire inédite que le jeu va nous raconter.",
      link: "https://www.actugaming.net/star-wars-outlaws-tout-savoir-634719/",
    },
    {
      image: "/public/trends/nasr.jpeg",
      title: "Nasr ignite domine la league",
      info: "The NASR Ignite team, consisting of JustPurii, Nana, Zaina, Nami, Looxie, Safia, Martii and coached by Maski, has proven to be unstoppable in the Al Majd league, a regional tournament for female Valorant players in the Levant and North Africa, organized by Riot Games & Calyx. The team finished series 1 in May 2023 with a perfect 7-0 record and repeated the feat in series 2 in July 2023 with a 6-0 record, qualifying for the LAN grand finals in KSA at Gamers 8, where they finished Second.",
      link: "https://nasresports.com/nasr-ignite-the-female-valorant-team-from-nasr-esports-dominates-al-majd-levant-and-na-league/",
    },
    {
      image: "/public/trends/zevent.jpeg",
      title: "Retour du Zevent",
      info: "Le Z Event est de retour. Après une interruption d’un an, l’évènement va revenir en 2024. C’est ce qu’a annoncé le 12 mars Adrien Nougaret, alias Zerator, à l’occasion de son passage dans Popcorn, l’émission organisée sur Twitch par Pierre-Alexis Bizot, alias Domingo. « Il y aura un Z Event cette année. On travaille dessus », a déclaré l’intéressé.",
      link: "https://www.numerama.com/politique/1651766-il-y-aura-un-z-event-le-marathon-caritatif-du-jeu-video-revient-apres-un-an-de-pause.html",
    },
    {
      image: "/public/trends/activision.jpeg",
      title: "Rachat d'Activision Blizzard par Microsoft",
      info: "L’autorité de régulation britannique a finalement donné son accord au rachat de l’éditeur de jeux vidéo américain Activision Blizzard par le géant Microsoft. Près de deux ans après son annonce, l’opération record à 68,7 milliards aboutit",
      link: "https://www.letemps.ch/economie/le-dernier-obstacle-au-rachat-d-activision-blizzard-par-microsoft-est-leve",
    },
    {
      image: "/public/trends/zlan.jpeg",
      title: "Zlan 2024 : toutes les informations",
      info: "ZeratoR a révélé toutes les infos sur la ZLAN 2024 ! Lors d’un nouveau PowerPoint de qualité présenté le 6 avril, on a pu découvrir la liste des complètes des jeux, leurs règles particulières, les dats et le format global de la compétition !",
      link: "https://www.mandatory.gg/events/zlan/tout-savoir-sur-la-zlan-2024-jeux-dates-format-inscriptions-billeterie-et-plus-encore/",
    },
  ];

  return (
    <>
      <TrendingCards tendances={tendances[0]} />
      <TrendingCards tendances={tendances[1]} />
      <TrendingCards tendances={tendances[2]} />
      <TrendingCards tendances={tendances[3]} />
      <TrendingCards tendances={tendances[4]} />
    </>
  );
}

export default Trends;
