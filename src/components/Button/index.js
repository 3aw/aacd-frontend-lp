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
  height,
  center
}) => (
  <Container
    bRadius={bRadius}
    backgroundColor={backgroundColor}
    width={width}
    disabled={true}
    bThickness={bThickness}
    onClick={onClick}
    height={height}
    center={center}
  >
    Aguarde Informações de venda
  </Container>
);
export default Button;
