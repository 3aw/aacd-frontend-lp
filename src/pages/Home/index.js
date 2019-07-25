import React, { Component } from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import Guests from "../../components/Guests";
import ThemesAndSpeakers from "../../components/ThemesAndSpeakers";
import Tickets from "../../components/Tickets";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import TicketReturn from "../../components/TicketReturn/index";
import Menu from "../../components/Menu";
import { connect } from "react-redux";
import Location from "../../components/Location";

class Home extends Component {
  render() {
    const { form } = this.props;
    return (
      <Container>
        {!form.disabled ? (
          <Form />
        ) : (
          <>
            <Menu />
            <Header />
            <ThemesAndSpeakers />
            <Guests />
            <Tickets />
            <Location />
            <Footer />
          </>
        )}
      </Container>
    );
  }
}

export default connect(state => ({ form: state.form }))(Home);
