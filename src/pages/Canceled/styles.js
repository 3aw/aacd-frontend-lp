import styled from "styled-components";
import React from "react";
import { colors, metrics } from "../../global/index";
import Logo from "../../images/returnLogo.png";
import Button from "../../components/Button";

export const Container = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  height: 100vh;
  position: fixed;
  z-index: 9999;
  justify-content: center;
  align-items: center;
  display: ${props => (props.active ? "flex" : "none")};
  @media screen and (max-width: 768px) {
    padding: 0 20px;
    display: flex;
    justify-content: center;
    display: ${props => (props.active ? "block" : "none")};
  }
`;

export const Box = styled.div`
  width: 660px;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 95px 40px;
  border-radius: 16px;
  justify-content: space-between;
  height: 600px;
  @media screen and (max-width: 768px) {
    width: 100%;
    position: relative;
    top: 30px;
    padding: 0 15px;
    justify-content: space-evenly;
    left: 0;
    margin-left: 0;
  }
`;

export const Image = styled.img`
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 130px;
  }
`;

export const Text = styled.p`
  font-size: ${metrics.fonts.regular};
  font-family: "Asap";
  padding: 0 40px;
  text-align: center;
  line-height: 30px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
    padding: 0;
    margin-top: 20px;
    text-align: center;
  }
`;
export const Title = styled.h2`
  font-family: "Oswald", sans-serif;
  font-size: ${metrics.fonts.Title};
  color: ${colors.red};
  text-transform: normal;
  text-align: center;
  line-height: 54px;
  white-space: nowrap;
  font-weight: 700;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-top: 40px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(
    to right,
    black 33%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: top;
  background-size: 30px 5px;
  background-repeat: repeat-x;
  padding-top: 25px;
  @media screen and (max-width: 768px) {
    background-size: 5% 2px;
    padding-top: 0;
  }
`;
export const ButtonWrap = styled.div`
  width: 100%;
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
      width={50}
      bThickness={2}
      height={20}
      bRadius={metrics.borderRadius.round}
      backgroundColor={colors.white}
      onClick={props.onClick}
    >
      fechar
    </Button>
  </Box>
);
