import React, { Component } from "react";
import Logo from "../../images/logo.png";
import Button from "../../components/Button";
import {
  Container,
  ImpactarLogo,
  HeaderBox,
  TitleBox,
  Text,
  Info
} from "./styles";
import { colors, metrics } from "../../global";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <HeaderBox>
          <ImpactarLogo src={Logo} />
          <TitleBox />
          <Text>
            Reunimos personalidades e profissionais conceituados em diversas
            áreas para abordar temas e histórias impactantes, assim como os
            exemplos de superação da AACD. Permita-se participar dessa agradável
            experiência que irá impactar sua vida pessoal e profissionalde forma
            única.
          </Text>
          <Info />
          <Button
            width={370}
            backgroundColor={colors.lightblue}
            bRadius={metrics.borderRadius.round}
            bThickness={4}
          >
            Clique para se inscrever!
          </Button>
        </HeaderBox>
      </Container>
    );
  }
}
