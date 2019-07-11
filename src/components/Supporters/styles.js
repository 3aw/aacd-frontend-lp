import styled from "styled-components";
import { colors, metrics } from "../../global/index";
import React from "react";
import bueno from "../../images/Sponsors/bueno.png";
import consuladodamulher from "../../images/Sponsors/consuladodamulher.png";
import hiffman from "../../images/Sponsors/hiffman.png";
import pufpuf from "../../images/Sponsors/pufpuf.png";
import reboucas from "../../images/Sponsors/reboucas.png";
import whirlpool from "../../images/Sponsors/whirlpool.png";

export const Container = styled.div`
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleBox = styled.div`
  text-align: center;
  border-bottom: solid 2px ${colors.red};
  margin-bottom: 80px;
  width: 60%;
`;

export const TitleText = styled.h2`
  font-family: "Oswald", sans-serif;
  font-size: ${metrics.fonts.large};
  color: ${colors.red};
  text-transform: uppercase;
  letter-spacing: 4.8px;
  margin-bottom: 20px;
`;

export const Title = ({ children }) => (
  <TitleBox>
    <TitleText>{children}</TitleText>
  </TitleBox>
);

export const SponsorsBox = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
`;
export const SupportersText = styled.p`
  font-size: ${metrics.fonts.medium};
  color: ${colors.darkgreen};
  font-family: "Oswald";
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3.2px;
`;

export const SupportImage = styled.img`
  margin-right: ${props => props.marginRight}px;
`;
export const SupportersBox = styled(SponsorsBox)`
  width: ${props => props.width}%;
  justify-content: ${props => props.justify};
  align-items: center;
  border-right: solid 2px ${colors.red};
  padding: 15px 0;
  :last-child {
    border: none;
  }
`;

export const SponsorsText = () => (
  <>
    <SponsorsBox>
      <SupportersText>Patrocínio</SupportersText>
    </SponsorsBox>
    <SponsorsBox>
      <SupportersText>Apoio</SupportersText>
    </SponsorsBox>
  </>
);

export const Sponsors = () => (
  <>
    <SupportersBox justify={"flex-start"} width={50}>
      <SupportImage marginRight={94} src={whirlpool} />
      <SupportImage src={consuladodamulher} />
    </SupportersBox>
    <SupportersBox justify={"space-between"} width={45}>
      <SupportImage src={pufpuf} />
      <SupportImage src={hiffman} />
      <SupportImage src={bueno} />
      <SupportImage src={reboucas} />
    </SupportersBox>
  </>
);

export const SupportersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ContactBox = styled(TitleBox)`
  margin: 80px 0 40px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10%;
`;
export const ContactText = styled(TitleText)`
  font-size: ${metrics.fonts.regular};
  margin-bottom: 0;
  letter-spacing: 4px;
`;
export const Text = styled.p`
  letter-spacing: ${props => props.ls}px;
  font-family: "Asap", sans-serif;
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: ${props => props.weight};
  text-transform: uppercase;
  display: inline-block;
  white-space: nowrap;
`;

export const Contact = () => (
  <ContactBox>
    <ContactText>Contato</ContactText>
    <Text ls={3.2} size={metrics.fonts.medium} color={"#1f313c"} weight={400}>
      equipe de eventos da <Text weight={700}>aacd</Text>
    </Text>
  </ContactBox>
);
