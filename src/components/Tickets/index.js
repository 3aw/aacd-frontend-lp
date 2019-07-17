import React from "react";
import { Wrapper } from "../../global/globalStyle";
import { Container, Title, TicketsContainer } from "./styles";
import TicketsBox from "../../components/TicketsBox";
import { connect } from "react-redux";

const Tickets = ({ tickets, dispatch }) => (
  <Container>
    <Wrapper>
      <Title />
      <TicketsContainer>
        {tickets.map(ticket => (
          <TicketsBox
            key={ticket.id}
            disabled={ticket.disabled}
            lot={ticket.pack}
            tickets={ticket.total}
            currency={ticket.currency}
            price={ticket.price}
            value={ticket.value}
          />
        ))}
      </TicketsContainer>
    </Wrapper>
  </Container>
);

export default connect(state => ({ tickets: state.tickets }))(Tickets);
