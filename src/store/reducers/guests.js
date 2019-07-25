import Guest1 from "../../images/Speakers/cesar.png";
import Guest2 from "../../images/Speakers/bob.png";
import Guest3 from "../../images/Speakers/sabrina.png";
const INITIAL_STATE = [
  {
    id: 1,
    image: Guest1,
    function: "Mediador",
    name: "Cesar Tralli",
    ocupation: "Jornalista da TV Globo"
  },
  {
    id: 2,
    image: Guest2,
    function: "Mestre de Cerimônia",
    name: "Cesar Tralli",
    ocupation: "Jornalista e locutor"
  },
  {
    id: 3,
    image: Guest3,
    function: "coktail e poket show",
    name: "Sabrina parlatori",
    ocupation: "Cantora e apresentadora"
  }
];

export default function guests(state = INITIAL_STATE, action) {
  return state;
}
