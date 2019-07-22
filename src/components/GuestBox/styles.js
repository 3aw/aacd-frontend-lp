import styled from "styled-components";
import { colors, metrics } from "../../global/index";

export const Container = styled.div`
  width: 206px;
  height: 260px;
  border-radius: ${metrics.borderRadius.square};
  box-shadow: 0 0 7px 0 rgba(93, 165, 165, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 25px;
  justify-content: center;
  background: ${colors.white};
  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }
`;

export const Image = styled.img`
  margin-bottom: 10px;
`;

export const Function = styled.p`
  font-family: "Oswald", sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: ${colors.red};
  text-transform: uppercase;
  letter-spacing: 2.8px;
  margin-bottom: 10px;
`;

export const Name = styled.h3`
  color: ${colors.darkgreen};
  font-family: "Asap", sans-serif;
  text-transform: uppercase;
  font-size: ${metrics.fonts.large};
  font-weight: 700;
  text-align: center;
  margin-bottom: 5px;
`;

export const Ocupation = styled.p`
  font-family: "Asap", sans-serif;
  font-size: ${metrics.fonts.small};
  color: ${colors.lightred};
  font-weight: 400;
`;
