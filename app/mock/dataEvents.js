// Database with all events and souvenirs, catched by components CarMax.jsx (futur events) and CardMaxPast.jsx, Card.jsx (in Events.jsx)

const dataEvents = [
  {
    id: 2,
    title: "Reprise des cours",
    date: "2023 - 2024",
    date_souvenir: "",
    location: "Montagny-en-Vexin et Montjavoult",
    description:
      "Les cours de l'Acam reprennent le lundi 2 octobre 2023. Visitez l'onglet Cours disponibles de notre site web pour choisir vos cours. Vous pourrez y télécharger les bulletins d'adhésion et de souscription, puis nous les renvoyer remplis.",
    souvenir: "",
    src: "/images/events/202310_reprise_facon_julien_2.jpg",
    alt: "Reprise des cours",
    link: "/cours",
    past: false,
    souvenirs: false,
  },
  {
    id: 1,
    title: "Les jARTdins de Montagny",
    date: "27 et 28 mai 2023",
    date_souvenir: "mai 2023",
    location: "Le village",
    description:
      "C'est la vingtième édition de cette manifestation organisée par l'Acam qui accueille près de 5000 visiteurs. \n Depuis 20 ans, attirant un large public de tous horizons, l’événement « les jARTdins de Montagny » est un rendez-vous incontournable du printemps. \nLe village de Montagny-en-Vexin accueille dans ses jardins les réalisations d’artistes plasticiens désirant trouver des lieux d’expositions non conventionnels. \nCroisée des chemins entre l’Ile de France et la Normandie, Montagny-en-Vexin est une porte d’entrée des Hauts-de-France où cette « grande promenade des Arts » démontre le dynamisme et la créativité de nos artistes. \nDurant tout le week-end : des moments musicaux, de danse, de chants, de théâtre... à découvrir.",
    souvenir: "",
    src: "/images/events/202305_jartdins.jpeg",
    medias: {
      src1: "/images/events/20230527_jartdins/01.jpg",
      src2: "/images/events/20230527_jartdins/02.jpeg",
      src3: "/images/events/20230527_jartdins/03.jpeg",
      src4: "/images/events/20230527_jartdins/04.jpeg",
      src5: "/images/events/20230527_jartdins/05.jpeg",
      src6: "/images/events/20230527_jartdins/06.jpeg",
      src7: "/images/events/20230527_jartdins/07.jpg",
      src8: "/images/events/20230527_jartdins/08.jpeg",
      src9: "/images/events/20230527_jartdins/09.jpeg",
      src10: "/images/events/20230527_jartdins/10.jpeg",
      src11: "/images/events/20230527_jartdins/11.jpeg",
      src12: "/images/events/20230527_jartdins/12.jpg",
      src13: "/images/events/20230527_jartdins/13.jpg",
    },
    alt: "jARTdins de Montagny 2023",
    link: "https://www.lesjartdinsdemontagny.fr/index.html",
    // link: "/cours",
    past: true,
    souvenirs: true,
  },
];

export default dataEvents;

/* Template objet json
   {
    id: 1,
    title: "Soirée baroque",
    date: "25 mars 2023 à 20h30",
    date_souvenir: "",
    location: "",
    description: "",
    souvenir: "",
    src: "/images/events/20230325_baroque.jpg",
    medias: {
      src1: "/images/events/",
      src2: "/images/souvenirs/",
      src3: "/images/souvenirs/",
      src4: "/images/souvenirs/",
      src5: "/images/souvenirs/",
      src6: "/images/souvenirs/",
      src7: "/images/souvenirs/",
      src8: "/images/souvenirs/",
      src9: "/images/souvenirs/",
      src10: "/images/souvenirs/",
    },
    alt: "Soirée baroque",
    link: "",
    past: false,
    souvenirs: false,
  },
 */
