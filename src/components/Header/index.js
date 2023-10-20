import React from "react";
import { Content, Navigation, StyledLogo, StyledNavButtons } from "./styled";

export const Header = () => {
  return (
    <Content>
      <StyledLogo />
      <Navigation>
        <StyledNavButtons onClick={() => (window.location.href = "#about")}>
          Co nas wyróżnia
        </StyledNavButtons>
        <StyledNavButtons onClick={() => (window.location.href = "#ingredients")}>
          Skład
        </StyledNavButtons>
        <StyledNavButtons onClick={() => (window.location.href = "#products")}>
          <strong>Produkty</strong>
        </StyledNavButtons>
      </Navigation>
    </Content>
  );
};
