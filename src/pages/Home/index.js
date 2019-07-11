import React, { Component } from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import Guests from "../../components/Guests";
import ThemesAndSpeakers from "../../components/ThemesAndSpeakers";
import Tickets from "../../components/Tickets";
import Footer from "../../components/Footer";

export default class Home extends Component {
  render() {
    return (
      <Container>
        {/* <Header />
        <Guests />
        <ThemesAndSpeakers />
        <Tickets /> */}
        <Footer />
      </Container>
    );
  }
}
