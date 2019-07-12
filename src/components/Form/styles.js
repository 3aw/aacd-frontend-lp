import styled from "styled-components";
import React from "react";
import formbg from "../../images/backgroundForm.png";
import girlbg from "../../images/formgirl.png";
import { colors, metrics } from "../../global/index";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${colors.white};
  position: fixed;
  left: ${props => (props.disabled ? "-100%" : "0")};
  transition: left 1s;
  z-index: 999;
`;
// item
export const Box = styled.div`
  width: 50%;
  background: url(${formbg});
  background-repeat: no-repeat;
  background-position: top left;
  :last-child {
    background: url(${girlbg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
`;

export const Cancel = styled.button`
  background: none;
  border: none;
  color: ${colors.lightred};
  font-size: 15px;
  font-family: "Asap", sans-serif;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  display: block;
  align-self: flex-end;
`;

export const FormTitle = styled.h2`
  font-family: "Oswald", sans-serif;
  font-size: ${metrics.fonts.xxlarge};
  color: ${colors.red};
  letter-spacing: 2px;
  text-transform: uppercase;
`;
export const TitleBox = styled.div`
  display: flex;
  height: 85px;
  justify-content: space-between;
  position: relative;
  &:after {
    content: "";
    display: block;
    width: 260px;
    height: 3px;
    background: ${colors.red};
    position: absolute;
    bottom: 0;
  }
`;

export const Item = styled.div`
  align-self: ${props => props.alignSelf};
`;

export const TitleBar = () => (
  <TitleBox>
    <Item alignSelf={"center"}>
      <FormTitle>Participe</FormTitle>
    </Item>
    <Item alignSelf={"flex-end"}>
      <Cancel>Cancelar</Cancel>
    </Item>
  </TitleBox>
);
export const FormText = styled.p`
  font-family: "Asap", sans-serif;
  font-size: ${metrics.fonts.xmedium};
  color: #000;
  padding-bottom: 10px;
  text-transform: uppercase;
  font-weight: 500;
`;
export const InputElement = styled.input`
  width: 100%;
  padding: 15px 20px 10px;
  border: solid 2px #6f6f6f;
  font-family: "Asap", sans-serif;
  font-size: ${metrics.fonts.xmedium};
  :focus {
    border: solid 2px ${colors.lightred};
    color: ${colors.lightred};
  }
`;
export const FormContent = styled.div`
  width: 100%;
  padding: 20px 0 10px;
`; // form item

export const FormContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 35px 70px 60px 170px;
`;
