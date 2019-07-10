import React, { Component } from "react";
import { colors, metrics } from "../../global/index";
import { Container } from "./styles";
import Header from "../../components/Header";
import Guests from "../../components/Guests";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        {/* <Guests /> */}
      </Container>
    );
  }
}
