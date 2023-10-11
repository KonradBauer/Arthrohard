import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    transition: background-color 0.5s ease-in-out;
    background: #F6F6F6;
    
  }
`;

export const GlobalContainer = styled.div`
  width: 1920px;
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
