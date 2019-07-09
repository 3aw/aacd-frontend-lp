import styled from "styled-components";
import { colors, metrics } from "../../global/index";

export const Container = styled.div`
  width: 206px;
  height: 260px;
  box-shadow: 0 0 7px 0 rgba(93, 165, 165, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: ${metrics.borderRadius.square};
`;

export const Image = styled.img`
  margin-bottom: 10px;
`;

export const Theme = styled.h3`
  font-family: "Owswald", sans-serif;
  font-weight: 700;
  font-size: ${metrics.fonts.regular};
  color: ${colors.darkgreen};
  text-transform: uppercase;
`;

export const Name = styled.h3`
  color: ${colors.lightred};
  font-family: "Asap";
  text-transform: uppercase;
  font-size: ${metrics.fonts.xmedium};
  font-weight: 400;
`;
export const Ocupation = styled.p`
  font-family: "Asap";
  font-weight: 400;
  font-size: ${metrics.fonts.small};
  color: ${colors.green};
  text-align: center;
  text-transform: uppercase;
  padding: 0 15px 15px;
`;
