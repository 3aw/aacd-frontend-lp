import styled from "styled-components";
import React from "react";
import formbg from "../../images/backgroundForm.png";
import formbgmobile from "../../images/formbgmobile.png";
import { colors, metrics } from "../../global/index";

export const Container = styled.div`
  width: 100%;
  display: flex;
  background: ${colors.white};
  /* position: fixed; */
  /* left: ${props => (props.disabled ? "-100%" : "0")}; */
  transition: left 0.7s;
  z-index: 999;
  justify-content: center;
  background-image: url(${formbg});
  background-repeat: no-repeat;
  background-position: top left;
  @media screen and (max-width: 768px){
    background: url(${formbgmobile});
    background-position-y: top;
    background-repeat: no-repeat;
    background-position-x: 85%;
  }
`;
// item
export const Box = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Cancel = styled.div`
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
  @media screen and (max-width: 768px) {
    align-self: center;
    margin-top: 5px;
  }
`;

export const TitleBar = props => (
  <TitleBox>
    <Item alignSelf={"center"}>
      <FormTitle>Participe</FormTitle>
    </Item>
    <Item alignSelf={"flex-end"}>
      <Cancel onClick={props.onClick}>Cancelar</Cancel>
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
  display: block;
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

export const SubscribersContainer = styled(FormContent)`
  display: ${props => (props.active ? "block" : "none")};
`;

export const FormContainer = styled.form`
  height: 100vh;
  width: 100%;
  padding: 35px 70px 60px 170px;
  @media screen and (max-width: 1024px) {
    padding: 0 30px;
  }
`;

export const ParticipantBox = styled.div`
  padding: 10px 0 20px;
`;

export const TitleForm = styled.div`
  font-family: "Oswald", sans-serif;
  font-size: 25px;
  color: ${colors.gray};
  text-transform: uppercase;
  margin: 20px 0 0 0;
`;

export const LoadingBox = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vw;
  background-color: rgba(200, 200, 200, 0.8);
  z-index: 999;
  display: flex;
  padding-top: calc(50vh - 180px);
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100vh;
    text-align: center;
  }
`;

export const Text = styled.div`
  font-family: "Oswald", sans-serif;
  font-size: 32px;
  color: #a6222c;
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
