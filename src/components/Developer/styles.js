import styled from "styled-components";
import { colors } from "../../global/index";
import Developer from "../../images/3aw.png";
import React from "react";

export const Container = styled.div`
  width: 100%;
  background: url(${colors.white});
  display: flex;
  justify-content: center;
  padding: 20px 0;
  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
`;
export const Text = styled.p`
  font-family: "Asap", sans-serif;
  font-size: 10px;
  letter-spacing: 1px;
  color: ${colors.dark};
  white-space: nowrap;
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: 8px;
    margin-top: 12px;
    margin-bottom: 10px;
  }
`;
export const Logo = styled.img`
  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const Dev = () => (
  <BoxContent>
    <Text>Desenvolvido por:</Text>
    <Logo src={Developer} />
  </BoxContent>
);
