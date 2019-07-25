import React from "react";
import { connect } from "react-redux";
import { Container, FloatingBox } from "./styles";
import * as formActions from "../../store/reducers/actions/form";

const TicketReturn = ({ form, dispatch }) => (
  <Container active={true}>
    <FloatingBox onClick={() => dispatch(formActions.toggleAll())} />
  </Container>
);

export default connect(state => ({ form: state.form }))(TicketReturn);
