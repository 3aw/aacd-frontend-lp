import React from "react";
import Button from "../../components/Button";
import { colors, metrics } from "../../global/index";

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

const TicketsBox = props => (
  <Container>
    <TicketLot>
      <LotType>{props.lot}</LotType>
      <TicketTotal>{props.tickets}</TicketTotal>
    </TicketLot>
    <PriceBox>
      <Price>
        <PriceCurrency>{props.currency}</PriceCurrency>
        <PriceTotal>{props.price}</PriceTotal>
      </Price>
    </PriceBox>
    <Button
      width={165}
      bRadius={metrics.borderRadius.square}
      backgroundColor={colors.white}
      bThickness={2}
    >
      Comprar
    </Button>
  </Container>
);

export default TicketsBox;
