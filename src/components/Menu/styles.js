import styled from "styled-components";

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
  transform: ${props => (props.hidden ? "translateY(-200px)" : "translateY(0)")};
  transition: transform 0.7s;
`;

export const ImageLogo = styled.img``;
