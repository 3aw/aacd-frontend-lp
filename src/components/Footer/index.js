import React from "react";
import Supporters from "../Supporters";
import Developer from "../Developer";
import { Container } from "./styles";
import { colors } from "../../global/index";
import { Wrapper } from "../../global/globalStyle";

const Footer = () => (
  <>
    <Container>
      <Wrapper backgroundColor={colors.lightblue}>
        <Supporters />
      </Wrapper>
    </Container>
    <Developer />
  </>
);

export default Footer;
