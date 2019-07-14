import React from "react";
import { Container } from "./styles";
import { connect } from "react-redux";
import * as formActions from "../../store/reducers/actions/form";

// function showForm(form) {
//   if (form.disabled == true) {
//     return {
//       type: "SHOW_FORM",
//       disabled: false
//     };
//   } else {
//     return {
//       type: "TOGGLE_FORM",
//       disabled: true
//     };
//   }
// }

const Button = ({
  bRadius,
  backgroundColor,
  children,
  width,
  disabled,
  bThickness,
  onClick,
  form,
  dispatch
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
export default connect(state => ({ form: state.form }))(Button);
