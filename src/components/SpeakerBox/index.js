import React from "react";
import Speaker from "../../images/Speakers/dr_claudio.png";
import {
  Container,
  Image,
  Theme,
  Name,
  Ocupation,
  TopText,
  Strong
} from "./styles";
import M from "../../images/M.png";

const SpeakerBox = props => (
  <Container bg={props.bg}>
    <TopText>
      <Image src={props.image} />
      <Theme>{props.theme}</Theme>
      <Name>{props.name}</Name>
    </TopText>
    <Ocupation>{props.ocupation}</Ocupation>
  </Container>
);

export default SpeakerBox;
