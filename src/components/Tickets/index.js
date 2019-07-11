import React, { Component } from "react";
import { Wrapper } from "../../global/globalStyle";
import { Container, Title, TicketsContainer, FloatingBox } from "./styles";
import TicketsBox from "../../components/TicketsBox";

export default class Tickets extends Component {
  state = {
    tickets: [
      {
        id: 1,
        pack: "1º lote",
        total: "40 ingressos",
        currency: "R$",
        price: "300,00",
        disabled: true
      },
      {
        id: 2,
        pack: "2º lote",
        total: "220 ingressos",
        currency: "R$",
        price: "400,00",
        disabled: false
      },
      {
        id: 3,
        pack: "3º lote",
        total: "220 ingressos",
        currency: "R$",
        price: "450,00",
        disabled: false
      }
    ]
  };
  render() {
    return (
      <Container>
        <Wrapper>
          <Title />
          <TicketsContainer>
            {this.state.tickets.map(ticket => (
              <TicketsBox
                key={ticket.id}
                disabled={ticket.disabled}
                lot={ticket.pack}
                tickets={ticket.total}
                currency={ticket.currency}
                price={ticket.price}
              />
            ))}
          </TicketsContainer>
        </Wrapper>
        <FloatingBox />
      </Container>
    );
  }
}
