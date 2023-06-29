// Database with all events, from 2023, catched by components CarMax.jsx (futur events) and CardMaxPast.jsx, Card.jsx (in Events.jsx)

const dataCourses = [
  {
    id: 3,
    title: "Cours de guitare",
    date1: "Lundi de 9h à 12h et 17h à 20h",
    date2: "Mardi de 17h à 19h",
    date3: "Mercredi de 9h à 12h et de 13h30 à 18h30",
    location: "Annexe de la mairie",
    description: "Cours individuels de 30 min pour tout public.",
    src: "/images/courses/a.jpg?",
    alt: "piano",
    link: "",
    full: false,
  },
  {
    id: 2,
    title: "Cours de piano",
    date1: "Lundi de 9h à 12h et 17h à 20h",
    date2: "Mardi de 17h à 19h",
    date3: "Mercredi de 9h à 12h et de 13h30 à 18h30",
    location: "Annexe de la mairie",
    description: "Cours individuels de 30 min pour tout public.",
    src: "/images/courses/b.jpg?",
    alt: "piano",
    link: "",
    full: true,
  },
  {
    id: 1,
    title: "Cours de violon et alto",
    date1: "Mercredi de 9h à 11h et de 17h30 à 19h00",
    date2: "Vendredi de 16h30 à 19h30",
    date3: "",
    location: "1er étage de la salle des fêtes",
    description: "Cours individuels de 30 min pour tout public.",
    src: "/images/courses/c.jpg",
    alt: "violon",
    link: "",
    full: true,
  },
];

export default dataCourses;

/* Template objet json
     {
      id: ,
      title: "",
      date1: "",
      date2: "",
      date3: "",
      location: "",
      description: "",
      src: "/images/courses/",
      alt: "",
      link: "",
      past: ,
    },
   */
