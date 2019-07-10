import React, { Component } from "react";
import GuestBox from "../GuestBox";
import Guest from "../../images/Guests/bobfloriano.png";

import { Container, Title, GuestsContainer } from "./styles";

export default class Guests extends Component {
  state = {
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
  render() {
    return (
      <Container>
        <Title />
        <GuestsContainer>
          {this.state.guests.map(guest => (
            <GuestBox
              key={guest.id}
              image={guest.image}
              function={guest.function}
              name={guest.name}
              ocupation={guest.ocupation}
            />
          ))}
        </GuestsContainer>
      </Container>
    );
  }
}
