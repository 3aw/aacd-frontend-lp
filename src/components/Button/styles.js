import styled from "styled-components";
import React from "react";
import { colors, metrics } from "../../global/index";

export const BorderWrap = styled.div`
  width: ${props => props.width}%;
  background: linear-gradient(to right, #d26a35, #e6ad2f);
  border-radius: ${props => props.bRadius};
  padding: ${props => props.bThickness}px;
  display: block;
  margin: ${props => (props.center ? "0 auto" : "0")};
  min-width: 30%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    padding: 2px;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: ${props => props.bRadius};
  text-align: center;
  font-family: "Asap", sans-serif;
  padding: ${props => props.height}px 0;
  font-weight: "400";
  text-transform: uppercase;
  font-size: 18px;
  color: ${colors.orange};
  width: 100%;
  letter-spacing: 2px;
  background: ${props => props.backgroundColor};
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #d26a35, #e6ad2f);
    color: ${colors.white};
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: ${props => props.mheight}px 0;
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
  height,
  mheight,
  center
}) =>
  disabled ? (
    <DisabledBorderWrap bThickness={bThickness} bRadius={bRadius} width={width}>
      <DisabledButton
        height={height}
        bRadius={bRadius}
        backgroundColor={colors.white}
        mheight={mheight}
      >
        {children}
      </DisabledButton>
    </DisabledBorderWrap>
  ) : (
    <BorderWrap
      center={center}
      bThickness={bThickness}
      bRadius={bRadius}
      width={width}
    >
      <Button
        height={height}
        onClick={onClick}
        bRadius={bRadius}
        backgroundColor={backgroundColor}
        mheight={mheight}
      >
        {children}
      </Button>
    </BorderWrap>
  );
