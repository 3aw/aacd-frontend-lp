import Guest from "../../images/Guests/bobfloriano.png";
import Speaker from "../../images/Speakers/dr_claudio.png";
const INITIAL_STATE = [
  {
    id: 1,
    image: Speaker,
    function: "Mestre de Cerimônia",
    name: "Bob Floriano",
    ocupation: "Jornalista e Locutor"
  },
  {
    id: 2,
    image: Speaker,
    function: "Mediador",
    name: "Cesar Tralli",
    ocupation: "Jornalista da TV Globo"
  },
  {
    id: 3,
    image: Speaker,
    function: "coktail e poket show",
    name: "Sabrina parlatori",
    ocupation: "Cantora e apresentadora"
  }
];

export default function guests(state = INITIAL_STATE, action) {
  return state;
}
