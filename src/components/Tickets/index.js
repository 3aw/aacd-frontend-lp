import React, { Component } from "react";
import { Wrapper } from "../../global/globalStyle";
import { Container, Title, TicketsContainer } from "./styles";
import TicketsBox from "../../components/TicketsBox";

export default class Tickets extends Component {
  state = {
    tickets: [
      {
        id: 1,
        pack: "1º lote",
        tickets: "40 ingressos",
        currency: "R$",
        price: "300",
        status: 0
      },
      {
        id: 2,
        pack: "2º lote",
        tickets: "220 ingressos",
        currency: "R$",
        price: "400",
        status: 2
      },
      {
        id: 3,
        pack: "3º lote",
        tickets: "220 ingressos",
        currency: "R$",
        price: "450",
        status: 3
      }
    ]
  };
  render() {
    return (
      <Container>
        <Wrapper>
          <Title />
          <TicketsContainer>
            <TicketsBox />
          </TicketsContainer>
        </Wrapper>
      </Container>
    );
  }
}
