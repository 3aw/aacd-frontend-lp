import React from "react";
import Logo from "../../images/logo.png";
import Button from "../../components/Button";
import Menu from "../Menu";
import {
  Container,
  ImpactarLogo,
  HeaderBox,
  TitleBox,
  Text,
  Info,
  EventInfo
} from "./styles";
import { colors, metrics } from "../../global";
import { connect } from "react-redux";
import * as formActions from "../../store/reducers/actions/form";

const Header = ({ form, dispatch }) => (
  <Container>
    <Menu />
    <HeaderBox>
      <ImpactarLogo src={Logo} />
      <TitleBox />
      <EventInfo />
      <Text>
        Reunimos personalidades e profissionais conceituados em diversas áreas
        para abordar temas e histórias impactantes, assim como os exemplos de
        superação da AACD. Permita-se participar dessa agradável experiência que
        irá impactar sua vida pessoal e profissional de forma única.
      </Text>
      <Info />
      <Button
        width={530}
        backgroundColor={colors.lightblue}
        bRadius={metrics.borderRadius.round}
        bThickness={2}
        onClick={() => dispatch(formActions.showForm(form))}
        height={20}
      >
        Clique para se inscrever!
      </Button>
    </HeaderBox>
  </Container>
);

export default connect(state => ({ form: state.form }))(Header);
