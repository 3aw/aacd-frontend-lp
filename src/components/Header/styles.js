import styled from "styled-components";
import React from "react";
import { colors, metrics } from "../../global/index";
import IncomeLogo from "../../images/income.png";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 105px;
`;

export const ImpactarLogo = styled.img``;

export const HeaderBox = styled.header`
  width: 50%;
  padding-left: 55px;
  padding-top: 70px;
`;

export const Title = styled.h2`
  font-family: "Oswald", sans-serif;
  font-size: ${metrics.fonts.Title};
  color: ${colors.red};
  font-weight: ${props => props.fw};
  text-transform: uppercase;
  letter-spacing: 2.4px;
`;

export const TitleContainer = styled.div`
  margin-top: 50px;
  line-height: 52px;
`;

export const Text = styled.p`
  font-family: "Asap", sans-serif;
  font-size: ${metrics.fonts.regular};
  font-weight: 400;
  color: ${colors.darkgreen};
  margin-top: 20px;
  padding-right: 28%;
`;

export const InfoText = styled.p`
  font-family: "Oswald", sans-serif;
  font-size: ${metrics.fonts.large};
  color: ${colors.lightred};
  font-weight: 200;
  letter-spacing: 2.4px;
  text-transform: uppercase;
`;
export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 80%;
  margin-bottom: 60px;
`;
export const TextBox = styled.div`
  width: 40%;
`;

export const Income = styled.img`
  margin-right: 20px;
  align-self: center;
  width: 52px;
  height: 76px;
`;

export const TitleBox = () => (
  <TitleContainer>
    <Title fw={200}>Um evento para</Title>
    <Title fw={700}>pensar e compartilhar!</Title>
  </TitleContainer>
);

export const Info = () => (
  <InfoBox>
    <Income src={IncomeLogo} />
    <InfoText>
      Toda a renda do evento será revertida para o tratamento dos pacientes da
      AACD.
    </InfoText>
  </InfoBox>
);
