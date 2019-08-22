import Speaker from "../../images/Speakers/dr_claudio.png";
import Speaker2 from "../../images/Speakers/bernadinho.png";
import Speaker4 from "../../images/Speakers/coen.png";
import Speaker5 from "../../images/Speakers/anatheresa.png";
import Speaker6 from "../../images/Speakers/gilgiardelli.png";
import Speaker7 from "../../images/Speakers/annachaia.png";
import Speaker8 from "../../images/Speakers/luizahelena.png";
import Speaker9 from "../../images/Speakers/paulostorani.png";
import Speaker10 from "../../images/Speakers/marcelokheirallah.png";

const INITIAL_STATE = [
  {
    id: 1,

    image: Speaker,
    theme: "Inovação",
    name: "Dr. Claudio Lottenberg",
    ocupation:
      "Presidente do Conselho de ADM do Hospital Albert Einstein e da UnitedHealth Group Brazil",
    confirmed: true
  },
  {
    id: 2,
    image: Speaker2,
    theme: "Motivação",
    name: "Bernardinho",
    ocupation:
      "Ex-Técnico da Seleção Brasileira de voleibol e campeão olímpico",
    confirmed: true
  },
  {
    id: 4,

    image: Speaker4,
    theme: "Amor",
    name: "Monja Coen",
    ocupation: "Líder Espiritual",
    confirmed: true
  },
  {
    id: 5,

    image: Speaker5,
    theme: "Confiança",
    name: "Ana Theresa Borsari",
    ocupation: "Presidente da peugeot brasil e conselheira da vivo",
    confirmed: true
  },
  {
    id: 6,

    image: Speaker6,
    theme: "Transformação",
    name: "Gil Giardelli",
    ocupation:
      "Professor Do Mit, Colunista Bandnews E Ref. Em Inovação Digital",
    confirmed: true
  },
  {
    id: 7,

    image: Speaker7,
    theme: "Adaptabilidade",
    name: "Anna Chaia",
    ocupation: "CEO e Escritora",
    confirmed: true
  },
  {
    id: 8,

    image: Speaker8,
    theme: "Negócio",
    name: "Luiza Helena Trajano",
    ocupation: "Presidente do conselho de administração do magazine luiza",
    confirmed: true
  },
  {
    id: 9,

    image: Speaker9,
    theme: "Determinação e Dedicação",
    name: "Paulo Storani",
    ocupation:
      "Capitão Veterano do BOPE, consultor dos filmes Tropa de Elite e Antropólogo",
    confirmed: true
  },
  {
    id: 10,
    image: Speaker10,
    theme: "Ong oportunidade aacd",
    name: "Marcelo Felipe Kheirallah",
    ocupation: "Presidente Voluntário do conselho de admin. Da aacd",
    confirmed: true
  }
];

export default function speakers(state = INITIAL_STATE, action) {
  return state;
}
