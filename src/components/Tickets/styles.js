import styled from "styled-components";
import bg from "../../images/bgtickets.png";
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
  .ingressos-esgotados {
    font-family: "Oswald", sans-serif;
    font-size: ${metrics.fonts.Title};
    color: ${colors.white};
    text-transform: uppercase;
    letter-spacing: 9.6px;
    margin-bottom: 20px;
    white-space: nowrap;
    @media screen and (max-width: 768px) {
      white-space: normal;
      font-size: 20px;
      letter-spacing: 4px;
    }
  }
`;

export const TitleBox = styled.div`
  text-align: center;
  border-bottom: solid 2px #77b9b6;
  max-width: 500px;
  margin: 60px 0;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    border: none;
    flex-direction: column;
    margin: 25px 0 0;
    ::after {
      display: block;
      width: 50%;
      background: #77b9b6;
      height: 2px;
      content: "";
      margin: 0 auto;
    }
  }
`;

export const TitleText = styled.h2`
  font-family: "Oswald", sans-serif;
  font-size: ${metrics.fonts.Title};
  color: ${colors.white};
  text-transform: uppercase;
  letter-spacing: 9.6px;
  margin-bottom: 20px;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    white-space: normal;
    font-size: 20px;
    letter-spacing: 4px;
  }
`;
export const TicketsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const TextError = styled(TitleText);

export const Title = () => (
  <TitleBox>
    <TitleText>ingressos e local</TitleText>
  </TitleBox>
);
