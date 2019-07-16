import styled from "styled-components";
import React from "react";
import { colors, metrics } from "../../global/index";

export const Container = styled.div`
  width: 100%;
  background: #fff;
`;

export const BoxBackground = styled.div`
  width: 600px;
  background: ${colors.lightgreen};
  height: 120px;
  position: relative;
  left: 0;
  top: 0;
  border-radius: ${metrics.borderRadius.soft};
  bottom: -65px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.7);
  width: 600px;
  height: 260px;
`;
export const Box = styled(BoxBackground)`
  background: ${colors.darkgreen};
  padding: 25px 0 35px 35px;
  left: 25px;
  top: 22px;
  display: flex;
  flex-direction: column;
  height: 215px;
`;
export const Local = styled.p`
  font-family: "Oswald", sans-serif;
  font-size: ${metrics.fonts.xlarge};
  color: #5da5a5;
  letter-spacing: 5.6px;
  font-weight: 300;
  text-transform: uppercase;
`;
export const Address = styled(Local)`
  font-weight: 700;
  font-family: "Asap", sans-serif;
  letter-spacing: 0;
  color: #f2d399;
`;

export const FloatingBox = () => (
  <BoxBackground>
    <Box>
      <Local>Local:</Local>
      <Address>Centro de Convenções Rebouças</Address>
    </Box>
  </BoxBackground>
);
