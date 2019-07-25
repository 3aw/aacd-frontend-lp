import React from "react";
import styled from "styled-components";
import { colors, metrics } from "../../global/index";

export const Container = styled.div`
  width: 206px;
  height: 260px;
  box-shadow: 0 0 7px 0 rgba(93, 165, 165, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around
  border-radius: ${metrics.borderRadius.square};
  background: url(${props => props.bg});
  background-repeat: no-repeat;
  margin-bottom: 60px;
  margin-right: 15px;
  @media screen and (max-width: 768px) {
    width: 48%;
    margin-right: 0;
    margin-bottom: 20px;
    justify-content: center;
    height: auto;
    padding: 25px 0px;
    background-position: right;
  }
`;

export const Image = styled.img``;

export const ThemeText = styled.h3`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: ${metrics.fonts.regular};
  color: ${colors.darkgreen};
  text-transform: uppercase;
  letter-spacing: 2px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    letter-spacing: 1.4px;
  }
`;

export const Strong = styled.strong`
  color: ${colors.red};
  font-weight: 700;
  display: inline;
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: ${metrics.fonts.regular};
  color: ${colors.red};
  text-transform: uppercase;
  letter-spacing: 2px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    letter-spacing: 1.4px;
  }
`;

export const Theme = ({ children }) => {
  const theme = children;
  const firstLetter = theme.substring(0, 1);
  const word = theme.substring(1);
  return (
    <ThemeText>
      <Strong>{firstLetter}</Strong>
      {word}
    </ThemeText>
  );
};

export const Name = styled.h3`
  color: ${colors.lightred};
  font-family: "Asap", sans-serif;
  text-transform: uppercase;
  font-size: ${metrics.fonts.xmedium};
  font-weight: 400;
  letter-spacing: 1.8px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 5px;
  }
`;
export const Ocupation = styled.p`
  font-family: "Asap", sans-serif;
  font-weight: 400;
  font-size: ${metrics.fonts.small};
  color: ${colors.green};
  text-align: center;
  text-transform: uppercase;
  padding: 0 10px;
  letter-spacing: 1.2px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    padding: 0 10px;
    margin-top: 10px;
  }
`;

export const TopText = styled.div`
  text-align: center;
`;
