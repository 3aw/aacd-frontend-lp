import React, { Component } from "react";
import Button from "../../components/Button";
import { Container } from "./styles";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Button width={300}>Qualquer coisas</Button>
      </Container>
    );
  }
}
