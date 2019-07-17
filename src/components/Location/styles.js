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
  top: 2px;
  border-radius: ${metrics.borderRadius.soft};
  bottom: -65px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.7);
  width: 600px;
  height: 260px;
`;
export const Box = styled(BoxBackground)`
  background: ${colors.darkgreen};
  padding: 10px 25px;
  left: 25px;
  top: 22px;
  display: flex;
  flex-direction: column;
  height: 215px;
  justify-content: space-between;
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
  font-size: 44px;
  padding-right: 35px;
`;
export const Map = styled.iframe`
  min-width: 100%;
  height: 100%;
  position: relative;
`;
export const MapAddres = styled.p`
  font-family: "Asap", sans-serif;
  font-weight: 400;
  color: #ec682f;
  font-size: ${metrics.fonts.large};
`;

export const FloatingBox = () => (
  <>
    <Map
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d783.7989202903689!2d-46.668592902793904!3d-23.557793388685194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a3b976f820f%3A0x225e51bfb9969f!2zQ2VudHJvIGRlIENvbnZlbsOnw7VlcyBSZWJvdcOnYXM!5e0!3m2!1spt-BR!2sbr!4v1563375393096!5m2!1spt-BR!2sbr"
      frameborder="0"
      allowfullscreen
    />
    <BoxBackground>
      <Box>
        <Local>Local:</Local>
        <Address>Centro de Convenções Rebouças</Address>
        <MapAddres>Av. Rebouças, 600 - Pinheiros, São Paulo - SP</MapAddres>
      </Box>
    </BoxBackground>
  </>
);
