import React from "react";
import Button from "../../components/Button";
import { colors, metrics } from "../../global/index";
import * as formActions from "../../store/reducers/actions/form";
import { connect } from "react-redux";
import {
  Container,
  TicketLot,
  LotType,
  TicketTotal,
  PriceBox,
  PriceCurrency,
  Price,
  PriceTotal
} from "./styles";

const TicketsBox = ({
  disabled,
  lot,
  tickets,
  currency,
  price,
  form,
  dispatch
}) => (
  <Container>
    <TicketLot>
      <LotType>{lot}</LotType>
      <TicketTotal>{tickets}</TicketTotal>
    </TicketLot>
    <PriceBox>
      <Price>
        <PriceCurrency>{currency}</PriceCurrency>
        <PriceTotal>{price}</PriceTotal>
      </Price>
    </PriceBox>
    <Button
      width={165}
      bRadius={metrics.borderRadius.square}
      backgroundColor={colors.white}
      bThickness={2}
      disabled={disabled}
      onClick={() => dispatch(formActions.showForm(form))}
    >
      Comprar
    </Button>
  </Container>
);

export default connect(state => ({ form: state.form }))(TicketsBox);
