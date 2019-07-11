import React from "react";
import Button from "../Button";
import Logo from "../../images/logosmall.png";
import { colors, metrics } from "../../global/index";
import { Container, ImageLogo } from "./styles";

const Menu = () => (
  <Container>
    <ImageLogo src={Logo} />
    <Button
      width={435}
      backgroundColor={colors.white}
      bThickness={4}
      bRadius={metrics.borderRadius.round}
    >
      Clique para se inscrever!
    </Button>
  </Container>
);

export default Menu;
