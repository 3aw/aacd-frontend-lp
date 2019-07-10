import styled from "styled-components";
import { colors, metrics } from "../../global/index";

export const Container = styled.div`
  width: 319px;
  height: 330px;
  border-radius: ${metrics.borderRadius.square};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
`;

export const Image = styled.img`
  margin-bottom: 10px;
`;

export const Function = styled.p`
  font-family: "Oswald", sans-serif;
  font-weight: 300;
  font-size: ${metrics.fonts.medium};
  color: ${colors.red};
  text-transform: uppercase;
  letter-spacing: 3.2px;
`;

export const Name = styled.h3`
  color: ${colors.darkgreen};
  font-family: "Asap", sans-serif;
  text-transform: uppercase;
  font-size: ${metrics.fonts.xlarge};
  font-weight: 700;
`;

export const Ocupation = styled.p`
  font-family: "Asap", sans-serif;
  font-size: ${metrics.fonts.medium};
  color: ${colors.lightred};
  font-weight: 400;
`;
