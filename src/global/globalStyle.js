import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, ::before, ::after{margin: 0; padding: 0; outline: none; box-sizing: border-box; list-style: none;}
  @import url('https://fonts.googleapis.com/css?family=Asap:400,500,600,700&display=swap');

  html{
    height: 100%;
    font-family: 'Roboto';
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
