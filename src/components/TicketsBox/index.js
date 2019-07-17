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
  value,
  dispatch
}) => (
  <Container>
    <TicketLot>
      <LotType disabled={disabled}>{lot}</LotType>
      <TicketTotal disabled={disabled}>{tickets}</TicketTotal>
    </TicketLot>
    <PriceBox>
      <Price>
        <PriceCurrency disabled={disabled}>{currency}</PriceCurrency>
        <PriceTotal disabled={disabled}>{price}</PriceTotal>
      </Price>
    </PriceBox>
    <Button
      width={165}
      bRadius={metrics.borderRadius.square}
      backgroundColor={colors.white}
      bThickness={2}
      disabled={disabled}
      height={5}
      onClick={() => dispatch(formActions.showForm(form))}
    >
      {value}
    </Button>
  </Container>
);

export default connect(state => ({ form: state.form }))(TicketsBox);
