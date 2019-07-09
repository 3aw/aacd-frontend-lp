import React from "react";
import { Container } from "./styles";

const Button = props => (
  <Container
    bRadius={props.bRadius}
    backgroundColor={props.backgroundColor}
    width={props.width}
    disabled={props.disabled}
  >
    {props.children}
  </Container>
);
export default Button;
