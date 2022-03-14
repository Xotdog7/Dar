import { Movie, Actor } from "./types";

export const movies: Movie[] = [
  {
    id: 1,
    title: "Batman",
    description: "asd",
    duration: 120,
    image: "https://i.pinimg.com/originals/36/60/58/366058cd421e6a981e50c6f800abbbd0.png",
  },
  {
    id: 2,
    title: "Spiderman",
    description: "asd",
    duration: 90,
    image: "https://cdn.mos.cms.futurecdn.net/y2FXvdPpK8WBj79PivRUgk.jpg",
  },
  {
    id: 3,
    title: "Robin",
    description: "asd",
    duration: 120,
    image: "https://m.media-amazon.com/images/I/71CaceHyy+L.SY300_.jpg",
  },
];

export const actors: Actor[] = [
  {
    id: 1,
    name: "Леонардо ДиКаприо",
    dateOfBirth: "11 ноября, 1974",
    film: "Не смотрите наверх",
  },
  {
    id: 2,
    name: "Брэд Питт",
    dateOfBirth: "18 декабря, 1963",
    film: "Бойцовский клуб",
  },
  {
    id: 3,
    name: "Леонардо ДиКаприо",
    dateOfBirth: "11 ноября, 1974",
    film: "Не смотрите наверх",
  },
];
