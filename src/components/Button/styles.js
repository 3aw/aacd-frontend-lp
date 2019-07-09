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
  border-radius: 32px;
  padding: 4px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  border-radius: 32px;
  text-align: center;
  font-family: "Asap";
  padding: 10px 0;
  font-weight: "400";
  font-size: ${metrics.fonts.regular};
  color: ${colors.orange};
  width: 100%;
  background: #fff;
  cursor: pointer;
  &:hover {
    background: linear-gradient(#d26a35, #e6ad2f);
    color: ${colors.white};
  }
`;

export const Container = (props, { children }) => (
  <BorderWrap width={props.width}>
    <Button>{children}</Button>
  </BorderWrap>
);
