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
import Button from "../../components/Button";
import { colors, metrics } from "../../global/index";
import { Link } from "react-router-dom";

export default class Canceled extends Component {
  render() {
    return (
      <Container active={true}>
        <Box>
          <Image src={Logo} />
          <TextWrap>
            <Title>
              :/
              <br />
              Desculpe,
              <br /> algo deu errado
            </Title>
            <Text>
              Tente novamente ou entre em contato com a operadora do seu cartão.
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
                Fechar
              </Button>
            </Link>
          </ButtonWrap>
        </Box>
      </Container>
    );
  }
}
