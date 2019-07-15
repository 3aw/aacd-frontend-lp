import styled from "styled-components";
import React from "react";
import { colors, metrics } from "../../global/index";
import Logo from "../../images/returnLogo.png";
import Button from "../Button";

export const Container = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  height: 100vh;
  position: fixed;
  z-index: 9999;
  display: ${props => (props.active ? "block" : "none")};
`;

export const Box = styled.div`
  width: 660px;
  background: ${colors.white};
  position: absolute;
  left: 50%;
  top: 18%;
  margin-left: -330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 95px 40px;
  border-radius: ${metrics.borderRadius.round};
  justify-content: space-between;
  height: 600px;
`;

export const Image = styled.img``;

export const Text = styled.p`
  font-size: ${metrics.fonts.regular};
  font-family: "Asap";
  padding: 0 40px;
  line-height: 30px;
`;
export const Title = styled.h2`
  font-family: "Oswald", sans-serif;
  font-size: ${metrics.fonts.Title};
  color: ${colors.red};
  text-transform: uppercase;
  white-space: nowrap;
  font-weight: 700;
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FloatingBox = props => (
  <Box>
    <Image src={Logo} />
    <TextWrap>
      <Title>obrigada!</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.
      </Text>
    </TextWrap>
    <Button
      width={240}
      bThickness={4}
      bRadius={metrics.borderRadius.round}
      backgroundColor={colors.white}
      onClick={props.onClick}
    >
      fechar
    </Button>
  </Box>
);
