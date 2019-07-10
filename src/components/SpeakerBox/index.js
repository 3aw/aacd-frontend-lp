import React from "react";
import Speaker from "../../images/teste2.png";
import { Container, Image, Theme, Name, Ocupation, TopText } from "./styles";

const SpeakerBox = () => (
  <Container>
    <TopText>
      <Image src={Speaker} />
      <Theme>Motivação</Theme>
      <Name>Bernadinho</Name>
    </TopText>
    <Ocupation>
      Técnico da Seleção Brasileira de voleibol e campeão olímpico
    </Ocupation>
  </Container>
);

export default SpeakerBox;
