import React from "react";
import Guest from "../../images/Guests/bobfloriano.png";
import { Container, Image, Function, Name, Ocupation, TopText } from "./styles";

const GuestBox = props => (
  <Container>
    <Image src={props.image} />
    <Function>{props.function}</Function>
    <Name>{props.name}</Name>
    <Ocupation>{props.ocupation}</Ocupation>
  </Container>
);

export default GuestBox;
