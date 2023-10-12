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
    box-sizing: border-box;
    transition: background-color 0.5s ease-in-out;
    background: #F6F6F6;
    margin: 0;
    padding: 0;
    
  }
`;

export const GlobalContainer = styled.div`
  width: 100%;
  margin: auto;

  @media (max-width: 375px) {
    max-width: 375px;
    margin: auto;
  }

  @media (min-width: 320px) and (max-width: 374px) {
    max-width: 320px;
    margin: auto;
  }
`;
