import styled from "styled-components";
import React from "react";
import { colors, metrics } from "../../global/index";

export const BorderWrap = styled.div`
  width: ${props => props.width}px;
  background: linear-gradient(to right, #d26a35, #e6ad2f);
  border-radius: ${props => props.bRadius};
  padding: ${props => props.bThickness}px;
`;

export const Button = styled.button`
  border: none;
  border-radius: ${props => props.bRadius};
  text-align: center;
  font-family: "Asap", sans-serif;
  padding: ${props => props.height}px 0px;
  font-weight: "400";
  text-transform: uppercase;
  font-size: ${metrics.fonts.regular};
  color: ${colors.orange};
  width: 100%;
  background: ${props => props.backgroundColor};
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #d26a35, #e6ad2f);
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
  bThickness,
  onClick,
  height
}) =>
  disabled ? (
    <DisabledBorderWrap bThickness={bThickness} bRadius={bRadius} width={width}>
      <DisabledButton
        height={height}
        bRadius={bRadius}
        backgroundColor={colors.white}
      >
        {children}
      </DisabledButton>
    </DisabledBorderWrap>
  ) : (
    <BorderWrap bThickness={bThickness} bRadius={bRadius} width={width}>
      <Button
        height={height}
        onClick={onClick}
        bRadius={bRadius}
        backgroundColor={backgroundColor}
      >
        {children}
      </Button>
    </BorderWrap>
  );
