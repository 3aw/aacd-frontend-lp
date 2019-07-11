import React, { Component } from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import Guests from "../../components/Guests";
import ThemesAndSpeakers from "../../components/ThemesAndSpeakers";
import Tickets from "../../components/Tickets";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
// import TicketReturn from "../../components/TicketReturn/index";
import Menu from "../../components/Menu";
import Button from "../../components/Button";

export default class Home extends Component {
  state = {
    hidden: true,
    button: Button
  };
  constructor(props) {
    super(props);

    // Bind the function to this component, so it has access to this.state
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    window.addEventListener("click", this.handleClick);
  }
  handleClick = () => {
    console.log("Funfou");
  };
  render() {
    return (
      <Container>
        <Menu />
        <Form />
        <Header />
        <Guests />
        <ThemesAndSpeakers />
        <Tickets />
        <Footer />
      </Container>
    );
  }
}
