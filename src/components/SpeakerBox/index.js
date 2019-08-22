import React from "react";
import { Container, Image, Theme, Name, Ocupation, TopText } from "./styles";

const SpeakerBox = props => (
  <Container empty={props.empty} bg={props.bg}>
    <TopText>
      <Image src={props.image} />
      <Theme>{props.theme}</Theme>
      <Name>{props.name}</Name>
    </TopText>
    <Ocupation>{props.ocupation}</Ocupation>
  </Container>
);

export default SpeakerBox;
