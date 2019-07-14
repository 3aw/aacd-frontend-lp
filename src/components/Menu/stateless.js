import React from "react";
import { Container, ImageLogo } from "./styles";
import Button from "../Button";
import Logo from "../../images/logosmall.png";
import { colors, metrics } from "../../global/index";
import { connect } from "react-redux";
import * as formActions from "../../store/reducers/actions/form";

const Menu = ({ form, menu, dispatch }) => (
  <Container hidden={false}>
    <ImageLogo src={Logo} />
    <Button
      disabled={false}
      width={435}
      backgroundColor={colors.white}
      bThickness={4}
      bRadius={metrics.borderRadius.round}
      onClick={() => dispatch(formActions.showForm(form))}
    >
      Clique para se inscrever!
    </Button>
  </Container>
);

export default connect(state => ({ form: state.form, menu: state.menu }))(Menu);
