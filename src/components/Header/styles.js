import styled from "styled-components";
import React from "react";
import { colors, metrics } from "../../global/index";
import IncomeLogo from "../../images/income.png";
import bgmobile from "../../images/bgmobile.png";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 105px;
  @media screen and (max-width: 1024px) {
    background: #e7fffe;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 45px;
  }
`;

export const ImpactarLogo = styled.img`
  @media screen and (max-width: 1024px) {
    align-self: center;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderBox = styled.header`
  width: 50%;
  padding-left: 55px;
  position: relative;
  padding-top: 70px;
  @media screen and (max-width: 1280px) {
    width: 60%;
  }
  @media screen and (max-width: 1024px) {
    background: url(${bgmobile});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top;
    width: 100%;
    padding: 200px 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    padding: 200px 20px 0;
  }
`;

export const Title = styled.h2`
  font-family: "Oswald", sans-serif;
  font-size: ${metrics.fonts.Title};
  color: ${colors.red};
  font-weight: ${props => props.fw};
  text-transform: uppercase;
  letter-spacing: 2.4px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const TitleContainer = styled.div`
  margin-top: 50px;
  line-height: 52px;
  @media screen and (max-width: 1024px) {
    order: 0;
  }
  @media screen and (max-width: 768px) {
    line-height: 23px;
    margin-top: 80px;
  }
`;

export const Text = styled.p`
  font-family: "Asap", sans-serif;
  font-size: ${metrics.fonts.medium};
  font-weight: 400;
  color: ${colors.darkgreen};
  padding-right: 28%;
  @media screen and (max-width: 1024px) {
    padding: 0;
    color: #515151;
  }
  @media screen and (max-width: 768px) {
    color: #515151;
    font-size: 14px;
  }
`;

export const InfoText = styled.p`
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: ${colors.lightred};
  font-weight: 200;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    letter-spacing: 1.2px;
  }
`;
export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 90%;
  margin-bottom: 60px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;
export const TextBox = styled.div`
  width: 40%;
`;

export const Income = styled.img`
  margin-right: 20px;
  align-self: center;
  width: 52px;
  height: 76px;
  @media screen and (max-width: 1024px) {
    align-self: center;
  }
  @media screen and (max-width: 768px) {
    width: 24px;
    height: 38px;
    margin-right: 10px;
  }
`;
export const EventInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  padding: 10px 0 20px;
  flex-wrap: wrap;
  @media screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
export const InfoDate = styled.div`
  min-width: ${props => props.width}%;
`;
export const DateItem = styled.p`
  font-size: ${metrics.fonts.Title};
  font-family: "Oswald";
  font-weight: 300;
  color: ${colors.green};
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const EventInfoText = styled(DateItem)`
  font-size: ${metrics.fonts.medium};
  color: ${colors.lightred};
  letter-spacing: 3.2px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 5px;
  }
`;

export const EventInfoHour = styled(EventInfoText)`
  font-size: ${metrics.fonts.xlarge};
  color: ${colors.green};
  font-family: "Asap", sans-serif;
  font-weight: 700;
  text-transform: none;
  white-space: nowrap;
  letter-spacing: 0;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 5px;
  }
`;
export const MobileWrapBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  @media screen and (max-width: 1450px) {
    width: 65%;
  }
  @media screen and (max-width: 1350px) {
    width: 70%;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1024px) {
    width: 50%;
    flex-direction: column;
  }
`;

export const EventInfo = () => (
  <EventInfoContainer>
    <InfoDate width={30}>
      <DateItem>01.out.19</DateItem>
    </InfoDate>
    <MobileWrapBox>
      <InfoDate width={60}>
        <EventInfoText>Credenciamento</EventInfoText>
        <EventInfoHour>18h30</EventInfoHour>
      </InfoDate>
      <InfoDate width={40}>
        <EventInfoText>Evento</EventInfoText>
        <EventInfoHour>19h até às 23h</EventInfoHour>
      </InfoDate>
    </MobileWrapBox>
  </EventInfoContainer>
);

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
