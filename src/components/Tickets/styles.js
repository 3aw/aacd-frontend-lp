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
`;

export const TitleBox = styled.div`
  text-align: center;
  border-bottom: solid 2px ${colors.lightgreen};
  width: 700px;
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
