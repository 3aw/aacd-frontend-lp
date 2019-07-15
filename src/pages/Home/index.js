import React, { Component } from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import Guests from "../../components/Guests";
import ThemesAndSpeakers from "../../components/ThemesAndSpeakers";
import Tickets from "../../components/Tickets";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import TicketReturn from "../../components/TicketReturn/index";
import store from "../../store";
import Menu from "../../components/Menu";
import Button from "../../components/Button";
import { Provider } from "react-redux";

export default class Home extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Menu />
          <Form />
          <TicketReturn />
          <Header />
          <ThemesAndSpeakers />
          <Guests />
          <Tickets />
          <Footer />
        </Container>
      </Provider>
    );
  }
}
