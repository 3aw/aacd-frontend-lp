import styled from "styled-components";
import React from "react";
import { colors, metrics } from "../../global/index";

export const BorderWrap = styled.div`
  width: ${props => props.width}px;
  background: linear-gradient(#d26a35, #e6ad2f);
  border-radius: ${props => props.bRadius};
  padding: ${props => props.bThickness}px;
  height: fit-content;
`;

export const Button = styled.button`
  border: none;
  border-radius: ${props => props.bRadius};
  text-align: center;
  font-family: "Asap", sans-serif;
  padding: 10px 0;
  font-weight: "400";
  font-size: ${metrics.fonts.regular};
  color: ${colors.orange};
  width: 100%;
  background: ${props => props.backgroundColor};
  cursor: pointer;
  &:hover {
    background: linear-gradient(#d26a35, #e6ad2f);
    color: ${colors.white};
  }
`;
export const DisabledBorderWrap = styled(BorderWrap)`
  background: ${colors.gray};
`;
export const DisabledButton = styled(Button)`
  color: ${colors.gray};
  cursor: auto;
  &:hover {
    background: #fff;
    color: ${colors.gray};
  }
`;

export const Container = ({
  backgroundColor,
  children,
  width,
  bRadius,
  disabled,
  bThickness
}) =>
  disabled ? (
    <DisabledBorderWrap bThickness={bThickness} bRadius={bRadius} width={width}>
      <DisabledButton bRadius={bRadius} backgroundColor={colors.white}>
        {children}
      </DisabledButton>
    </DisabledBorderWrap>
  ) : (
    <BorderWrap bThickness={bThickness} bRadius={bRadius} width={width}>
      <Button bRadius={bRadius} backgroundColor={backgroundColor}>
        {children}
      </Button>
    </BorderWrap>
  );
