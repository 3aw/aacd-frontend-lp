import Guest from "../../images/Guests/bobfloriano.png";
const INITIAL_STATE = {
  guests: [
    {
      id: 1,
      image: Guest,
      function: "Mestre de Cerimônia",
      name: "Bob Floriano",
      ocupation: "Jornalista e Locutor"
    },
    {
      id: 2,
      image: Guest,
      function: "Mediador",
      name: "Cesar Tralli",
      ocupation: "Jornalista da TV Globo"
    },
    {
      id: 3,
      image: Guest,
      function: "coktail e poket show com",
      name: "Sabrina parlatori",
      ocupation: "Cantora e apresentadora"
    }
  ]
};

export default function form(state = INITIAL_STATE, action) {
  return state;
}
