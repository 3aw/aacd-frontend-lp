import React, { Component } from "react";
import {
  Container,
  Box,
  Image,
  TextWrap,
  Title,
  Text,
  ButtonWrap
} from "./styles";
import Logo from "../../images/returnLogo.png";
import Button from "../Button";
import { colors, metrics } from "../../global/index";
import { Link } from "react-router-dom";

export default class TicketReturn extends Component {
  render() {
    return (
      <Container active={true}>
        <Box>
          <Image src={Logo} />
          <TextWrap>
            <Title>Obrigada!</Title>
            <Text>
              Sua compra foi efetuada com sucesso. Apresente seu RG na entrada
              do evento e aproveite!
            </Text>
          </TextWrap>

          <ButtonWrap>
            <Link to="/">
              <Button
                width={100}
                bThickness={2}
                height={20}
                bRadius={metrics.borderRadius.round}
                backgroundColor={colors.white}
              >
                fechar
              </Button>
            </Link>
          </ButtonWrap>
        </Box>
      </Container>
    );
  }
}
