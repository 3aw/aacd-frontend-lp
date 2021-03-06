import styled from "styled-components";
import { colors } from "../../global/index";

export const Container = styled.div`
  width: 100%;
  background: ${colors.lightblue};
  padding-top: 150px;
  @media screen and (max-width: 1024px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
