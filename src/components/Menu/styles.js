import styled from "styled-components";
import React from "react";
import Button from "../Button";
import Logo from "../../images/logosmall.png";
import { colors, metrics } from "../../global/index";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  padding: 15px 50px;
  background: #fff;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 7px 4px 0px rgba(0, 0, 0, 0.3);
  z-index: 99;
  &.hidden {
  }
`;

export const ImageLogo = styled.img``;

// export const MenuBar = hidden => {
//   return hidden ? null : (
//     <Container>
//       <ImageLogo src={Logo} />
//       <Button
//         width={435}
//         backgroundColor={colors.white}
//         bThickness={4}
//         bRadius={metrics.borderRadius.round}
//       >
//         Clique para se inscrever!
//       </Button>
//     </Container>
//   );
// };
