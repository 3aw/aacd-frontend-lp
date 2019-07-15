import React from "react";
import { Container } from "./styles";

const Button = ({
  bRadius,
  backgroundColor,
  children,
  width,
  disabled,
  bThickness,
  onClick
}) => (
  <Container
    bRadius={bRadius}
    backgroundColor={backgroundColor}
    width={width}
    disabled={disabled}
    bThickness={bThickness}
    onClick={onClick}
  >
    {children}
  </Container>
);
export default Button;
