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
  min-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 90px;
  @media screen and (max-width: 1024px) {
    padding-top: 50px;
  }
`;

export const TitleBox = styled.div`
  text-align: center;
  border-bottom: solid 2px ${colors.red};
  margin-bottom: 80px;
  width: 60%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
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
  padding: 15px 0;
  @media screen and (max-width: 1024px) {
    justify-content: ${props => props.mbjustify};
  }
`;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  width: 50%;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
    justify-content: center;
  }
`;
export const Border = styled.div`
  width: 2px;
  height: 20px;
  background-color: ${metrics.red};
  position: absolute;
`;

export const Sponsors = () => (
  <>
    <ItemWrap>
      <SponsorsBox>
        <SupportersText>Patrocínio</SupportersText>
      </SponsorsBox>
      <SupportersBox mbjustify={"center"} justify={"flex-start"} width={100}>
        <SupportImage marginRight={94} src={whirlpool} />
        <SupportImage src={consuladodamulher} />
      </SupportersBox>
    </ItemWrap>
    <ItemWrap>
      <SponsorsBox>
        <SupportersText>Apoio</SupportersText>
      </SponsorsBox>
      <SupportersBox justify={"space-between"} width={100}>
        <SupportImage src={pufpuf} />
        <SupportImage src={hiffman} />
        <SupportImage src={bueno} />
        <SupportImage src={reboucas} />
      </SupportersBox>
    </ItemWrap>
  </>
);

export const SupportersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ContactBox = styled(TitleBox)`
  margin: 0 0 40px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
export const ContactText = styled(TitleText)`
  font-size: ${metrics.fonts.regular};
  margin-bottom: 0;
  letter-spacing: 4px;
  justify-self: flex-end;
  margin-top: 80px;
`;
export const Text = styled.p`
  letter-spacing: ${props => props.ls}px;
  font-family: "Asap", sans-serif;
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  font-weight: ${props => props.weight};
  text-transform: uppercase;
  display: inline-block;
  white-space: nowrap;
`;
export const ContactsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Box = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  min-height: 130px;
  @media screen and (max-width: 1024px) {
    margin-top: 50px;
  }
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contacts = () => (
  <ContactsContainer>
    <Box>
      <Text ls={2.4} size={24} weight={500} color={colors.dark}>
        Andrea Lins
      </Text>
      <Item>
        <Text ls={3.2} size={16} weight={500} color={colors.red}>
          E-mail
        </Text>
        <Text ls={1.6} size={16} weight={700} color={colors.green}>
          androdrigues@aacd.org.br
        </Text>
      </Item>
      <Item>
        <Text ls={3.2} size={16} weight={500} color={colors.red}>
          Telefones
        </Text>
        <Text ls={1.6} size={16} weight={700} color={colors.green}>
          (11) 5576 - 0460
        </Text>
      </Item>
    </Box>
    <Box>
      <Text ls={2.4} size={24} weight={500} color={colors.dark}>
        Geziane Pereira
      </Text>
      <Item>
        <Text ls={3.2} size={16} weight={500} color={colors.red}>
          E-mail
        </Text>
        <Text ls={1.6} size={16} weight={700} color={colors.green}>
          gleticia@aacd.org.br
        </Text>
      </Item>
      <Item>
        <Text ls={3.2} size={16} weight={500} color={colors.red}>
          Telefones
        </Text>
        <Text ls={1.6} size={16} weight={700} color={colors.green}>
          (11) 5576 - 0867
        </Text>
      </Item>
    </Box>
  </ContactsContainer>
);
export const Bold = styled.p`
  letter-spacing: 3.2px;
  font-family: "Asap", sans-serif;
  font-size: ${metrics.fonts.medium};
  color: ${colors.dark};
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
  display: inline;
`;
export const Fixed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const Wrap = styled.div;
export const ContactSection = ({ children }) => (
  <Fixed>
    <ContactText>Contato</ContactText>
    <ContactBox>
      <Text
        ls={3.2}
        size={metrics.fonts.medium}
        color={colors.dark}
        weight={400}
      >
        equipe de eventos da&nbsp;
      </Text>
      <Bold> aacd</Bold>
    </ContactBox>
  </Fixed>
);
