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
  PriceValue,
  Price,
  Cents
} from "./styles";

const TicketsBox = () => (
  <Container>
    <TicketLot>
      <LotType>2º Lote</LotType>
      <TicketTotal>220 Ingressos</TicketTotal>
    </TicketLot>
    <PriceBox>
      <PriceCurrency>R$</PriceCurrency>
      <Price>
        <PriceValue>400</PriceValue>
        <Cents>,00</Cents>
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
