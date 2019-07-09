import React from "react";
import { Container } from "./styles";

const Button = (props, { children }) => (
  <Container width={props.width}>{props.children}</Container>
);
export default Button;
