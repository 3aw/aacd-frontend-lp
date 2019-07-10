// import React from "react";
import styled from "styled-components";
import { colors, metrics } from "../../global/index";
import M from "../../images/M.png";

export const Container = styled.div`
  width: 206px;
  height: 260px;
  box-shadow: 0 0 7px 0 rgba(93, 165, 165, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: ${metrics.borderRadius.square};
  background: url(${M});
  background-repeat: no-repeat;
`;

export const Image = styled.img``;

export const Theme = styled.h3`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: ${metrics.fonts.regular};
  color: ${colors.darkgreen};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Name = styled.h3`
  color: ${colors.lightred};
  font-family: "Asap", sans-serif;
  text-transform: uppercase;
  font-size: ${metrics.fonts.xmedium};
  font-weight: 400;
`;
export const Ocupation = styled.p`
  font-family: "Asap", sans-serif;
  font-weight: 400;
  font-size: ${metrics.fonts.small};
  color: ${colors.green};
  text-align: center;
  text-transform: uppercase;
  padding: 0 15px;
`;

export const TopText = styled.div`
  text-align: center;
`;

// export const Speaker = ({ image, name, ocupation }) => (
//   <Container>
//     <TopText>
//       <Image src={image} />
//       <Theme>{name}</Theme>
//     </TopText>
//       <Ocupation>{ocupation}</Ocupation>
//   </Container>
// );
