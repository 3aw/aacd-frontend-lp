import styled from "styled-components";
import React from "react";
import { colors, metrics } from "../../global/index";

export const Container = styled.div``;

export const TitleBox = styled.div`
  text-align: center;
  border-bottom: solid 2px ${colors.red};
  width: 700px;
  margin-bottom: 80px;
`;

export const TitleText = styled.h2`
  font-family: "Oswald", sans-serif;
  font-size: ${metrics.fonts.Title};
  color: ${colors.red};
  text-transform: uppercase;
  letter-spacing: 9.6px;
  margin-bottom: 20px;
`;

export const Title = () => (
  <TitleBox>
    <TitleText>Temas e Palestrantes</TitleText>
  </TitleBox>
);
