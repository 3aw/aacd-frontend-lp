import React, { Component } from "react";
import GuestBox from "../GuestBox";

import { Container, Title } from "./styles";

export default class Guests extends Component {
  state: {
    Guests: [
      {
        id: 1,
        image: "",
        function: "Mestre de Cerimônia",
        name: "Bob Floriano",
        ocupation: "Jornalista e Locutor"
      }
    ]
  };
  render() {
    return (
      <Container>
        <Title />
        <GuestBox />
      </Container>
    );
  }
}
