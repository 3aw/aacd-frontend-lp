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
`;

export const TitleText = styled.h2`
  font-family: "Oswald", sans-serif;
  font-size: ${metrics.fonts.Title};
  color: ${colors.red};
  text-transform: uppercase;
  letter-spacing: 9.6px;
  margin-bottom: 20px;
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
`;

export const Title = () => (
  <TitleBox>
    <TitleText>Temas e Palestrantes</TitleText>
  </TitleBox>
);
