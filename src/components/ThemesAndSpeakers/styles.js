import styled from "styled-components";
import React from "react";
import { colors, metrics } from "../../global/index";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

export const TitleBox = styled.div`
  text-align: center;
  border-bottom: solid 2px ${colors.red};
  width: 700px;
  margin-bottom: 35px;
  @media screen and (max-width: 768px) {
    width: 100%;
    border-bottom: none;
    ::after {
      display: block;
      width: 50%;
      background: #be0710;
      height: 2px;
      content: "";
      margin: 0 auto;
    }
  }
`;

export const TitleText = styled.h2`
  font-family: "Oswald", sans-serif;
  font-size: ${metrics.fonts.Title};
  color: ${colors.red};
  text-transform: uppercase;
  letter-spacing: 9.6px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    color: #be0710;
    letter-spacing: 4px;
  }
`;

export const SpeakerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media screen and (max-width: 1200px) {
    width: 80%;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 960px) {
    width: 60%;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Title = () => (
  <TitleBox>
    <TitleText>Temas e Palestrantes</TitleText>
  </TitleBox>
);
