import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Asap:400,500,600,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Oswald:200,300,400,700&display=swap');
  *, ::before, ::after{margin: 0; padding: 0; outline: none; box-sizing: border-box; list-style: none;}
  html{
    height: 100%;
    body{
      height: 100%;
      #root{
        height: 100%;
        
      }
    }
  }
  a,
  ::before,
  ::after{
    text-decoration:none;
  }
`;

export const Wrapper = styled.div`
  max-width: 1110px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  background: ${props => props.background};
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;
