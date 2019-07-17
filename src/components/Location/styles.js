import styled from "styled-components";
import React from "react";
import { colors, metrics } from "../../global/index";

export const Container = styled.div`
  width: 100%;
  background: #fff;
  position: relative;
  height: 450px;
`;

export const BoxBackground = styled.div`
  width: 600px;
  background: ${colors.lightgreen};
  height: 120px;
  position: absolute;
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
  position: absolute;
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
export const Map = styled.iframe`
  min-width: 100%;
  height: 100%;
  position: relative;
`;

export const FloatingBox = () => (
  <>
    <Map
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.4130565290375!2d-43.181960884487935!3d-22.89813074332022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f916bb29f3b%3A0x13d9be7ffc282a65!2sRua+S%C3%A3o+Bento%2C+08+-+3o+andar+-+Centro%2C+Rio+de+Janeiro+-+RJ%2C+20090-010!5e0!3m2!1spt-BR!2sbr!4v1563371606350!5m2!1spt-BR!2sbr"
      frameborder="0"
      allowfullscreen
    />
    <BoxBackground>
      <Box>
        <Local>Local:</Local>
        <Address>Centro de Convenções Rebouças</Address>
      </Box>
    </BoxBackground>
  </>
);
