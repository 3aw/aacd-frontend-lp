import React from "react";
import { Container } from "./styles";
import { connect } from "react-redux";

const Button = ({
  bRadius,
  backgroundColor,
  children,
  width,
  disabled,
  bThickness,
  onClick,
  form,
  dispatch,
  teste //jjjj
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
export default connect(state => ({ form: state }))(Button);
