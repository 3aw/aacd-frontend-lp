import React from "react";
import GuestBox from "../GuestBox";
import { Container, Title, GuestsContainer } from "./styles";
import { connect } from "react-redux";

const Guests = ({ guests, dispatch }) => (
  <Container>
    <Title />
    <GuestsContainer>
      {guests.map(guest => (
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

export default connect(state => ({ guests: state.guests }))(Guests);
