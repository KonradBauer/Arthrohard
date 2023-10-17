import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: "Futura PT", sans-serif;
    scroll-behavior: smooth;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background: #F6F6F6;
    margin: 0 ;
    padding: 0;
  }
`;

export const GlobalContainer = styled.div``;
