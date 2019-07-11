import styled from "styled-components";
import bg from "../../images/Backgrounds/bg-tickets.png";
import React from "react";
import { colors, metrics } from "../../global/index";

export const Container = styled.div`
  width: 100%;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  padding-bottom: 135px;
  position: relative;
`;

export const TitleBox = styled.div`
  text-align: center;
  border-bottom: solid 2px ${colors.lightgreen};
  min-width: 700px;
  margin: 60px 0;
`;

export const TitleText = styled.h2`
  font-family: "Oswald", sans-serif;
  font-size: ${metrics.fonts.Title};
  color: ${colors.white};
  text-transform: uppercase;
  letter-spacing: 9.6px;
  margin-bottom: 20px;
`;
export const TicketsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Title = () => (
  <TitleBox>
    <TitleText>ingressos e local</TitleText>
  </TitleBox>
);

export const BoxBackground = styled.div`
  width: 600px;
  background: ${colors.lightgreen};
  height: 120px;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 0;
  border-radius: ${metrics.borderRadius.soft};
  bottom: -65px;
`;
export const Box = styled(BoxBackground)`
  background: ${colors.darkgreen};
  padding: 25px 0 35px 35px;
  left: 15px;
  bottom: 10px;
  display: flex;
  flex-direction: column;
`;
export const Local = styled.p`
  font-family: "Oswald", sans-serif;
  font-size: ${metrics.fonts.xlarge};
  color: #5da5a5;
  letter-spacing: 5.6px;
  font-weight: 300;
  text-transform: uppercase;
`;
export const Address = styled(Local)`
  font-weight: 700;
  font-family: "Asap", sans-serif;
  letter-spacing: 0;
  color: #f2d399;
`;

export const FloatingBox = () => (
  <BoxBackground>
    <Box>
      <Local>Local:</Local>
      <Address>Centro de Convenções Rebouças</Address>
    </Box>
  </BoxBackground>
);
