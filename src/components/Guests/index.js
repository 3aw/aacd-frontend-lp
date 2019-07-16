import React from "react";
import GuestBox from "../GuestBox";
import { Container, Title, GuestsContainer } from "./styles";
import { colors, metrics } from "../../global/index";
import { connect } from "react-redux";
import Button from "../Button/";
import * as formActions from "../../store/reducers/actions/form";

const Guests = ({ form, guests, dispatch }) => (
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
    <Button
      width={460}
      backgroundColor={colors.white}
      bThickness={5}
      bRadius={metrics.borderRadius.round}
      onClick={() => dispatch(formActions.showForm(form))}
    >
      Clique para se inscrever!
    </Button>
  </Container>
);

export default connect(state => ({ form: state.form, guests: state.guests }))(
  Guests
);
