import React from "react";
import { Container, ImageLogo } from "./styles";
import Button from "../Button";
import Logo from "../../images/logosmall.png";
import { colors, metrics } from "../../global/index";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import * as formActions from "../../store/reducers/actions/form";

export default function Menu() {
  // function scrollWatch() {
  //   window.addEventListener("scroll", e => handleScroll(e));
  // }
  // function handleScroll(e) {
  //   if (navigator.userAgent.indexOf("Chrome") >= 0) {
  //     if (e.path[1].scrollY > 200) {
  //       dispatch({
  //         type: "SHOW_MENU",
  //         hidden: false
  //       });
  //     } else {
  //       dispatch({
  //         type: "HIDE_MENU",
  //         hidden: true
  //       });
  //     }
  //   } else {
  //     if (e.pageY > 200) {
  //       dispatch({
  //         type: "SHOW_MENU_FIREFOX",
  //         hidden: false
  //       });
  //     } else {
  //       dispatch({
  //         type: "HIDE_MENU_FIREFOX",
  //         hidden: true
  //       });
  //     }
  //   }
  // }
  // document.addEventListener("DOMContentLoaded", scrollWatch());
  const form = useSelector(state => state.form);
  const menu = useSelector(state => state.menu);
  const dispatch = useDispatch();
  return (
    <Container hidden={menu.hidden}>
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
}
