import React from "react";
import Speaker from "../../images/teste2.png";
import { Container, Image, Theme, Name, Ocupation } from "./styles";

const SpeakerBox = () => (
  <Container>
    <Image src={Speaker} />
    <Theme>Motivação</Theme>
    <Name>Bernadinho</Name>
    <Ocupation>
      Técnico da Seleção Brasileira de voleibol e campeão olímpico
    </Ocupation>
  </Container>
);

export default SpeakerBox;
