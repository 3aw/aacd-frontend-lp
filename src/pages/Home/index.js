import React, { Component } from "react";
import { colors, metrics } from "../../global/index";
import Button from "../../components/Button";
import GuestBox from "../../components/GuestBox";
import SpeakerBox from "../../components/SpeakerBox";
import { Container } from "./styles";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Button
          bRadius={metrics.borderRadius.round}
          backgroundColor={colors.white}
          width={200}
        >
          Qualquer coisas
        </Button>
        <GuestBox />
        <SpeakerBox />
      </Container>
    );
  }
}
