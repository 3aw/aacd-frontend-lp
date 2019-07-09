import React from "react";
import Guest from "../../images/test.png";
import { Container, Image, Function, Name, Ocupation } from "./styles";

const GuestBox = () => (
  <Container>
    <Image src={Guest} />
    <Function>Mestre de Cerimônia</Function>
    <Name>Bob Floriano</Name>
    <Ocupation>Jornalista e locutor</Ocupation>
  </Container>
);

export default GuestBox;
