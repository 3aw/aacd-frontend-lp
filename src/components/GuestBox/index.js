import React from "react";
import Guest from "../../images/Guests/bobfloriano.png";
import { Container, Image, Function, Name, Ocupation, TopText } from "./styles";

const GuestBox = () => (
  <Container>
    <Image src={Guest} />
    <Function>Mestre de Cerimônia</Function>
    <Name>Bob Floriano</Name>
    <Ocupation>Jornalista e locutor</Ocupation>
  </Container>
);

export default GuestBox;
