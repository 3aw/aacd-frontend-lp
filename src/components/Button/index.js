import React from "react";
import { Container } from "./styles";

const Button = ({
  bRadius,
  backgroundColor,
  children,
  width,
  disabled,
  bThickness,
  onClick,
  height
}) => (
  <Container
    bRadius={bRadius}
    backgroundColor={backgroundColor}
    width={width}
    disabled={disabled}
    bThickness={bThickness}
    onClick={onClick}
    height={height}
  >
    {children}
  </Container>
);
export default Button;
