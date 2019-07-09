import styled from "styled-components";
import React from "react";
import { colors, metrics } from "../../global/index";

// export const Container = styled.button`
//   width: ${props => props.width}px;
//   padding: 10px 0;
//   background: none;
//   border: solid 4px #e6ad2f;
//   border-radius: 32px;
//   text-align: center;
//   font-family: "Asap";
//   font-weight: "400";
//   font-size: ${metrics.fonts.regular};
//   color: ${colors.orange};
//   cursor: pointer;
//   :hover {
//     background: linear-gradient(#d26a35, #e6ad2f);
//     color: ${colors.white};
//     border: solid 4px #e6ad2f;
//   }
// `;

export const BorderWrap = styled.div`
  width: ${props => props.width}px;
  background: linear-gradient(#d26a35, #e6ad2f);
  border-radius: ${props => props.bRadius};
  padding: 4px;
  height: fit-content;
`;

export const Button = styled.button`
  border: none;
  border-radius: ${props => props.bRadius};
  text-align: center;
  font-family: "Asap";
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
  disabled
}) =>
  disabled ? (
    <DisabledBorderWrap bRadius={bRadius} width={width}>
      <DisabledButton bRadius={bRadius} backgroundColor={colors.white}>
        {children}
      </DisabledButton>
    </DisabledBorderWrap>
  ) : (
    <BorderWrap bRadius={bRadius} width={width}>
      <Button bRadius={bRadius} backgroundColor={backgroundColor}>
        {children}
      </Button>
    </BorderWrap>
  );
