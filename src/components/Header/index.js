import React from "react";
import { Content, NavButtons, Navigation, StyledLogo } from "./styled";

export const Header = () => {
  return (
    <Content>
      <StyledLogo />
      <Navigation>
        <NavButtons onClick={() => (window.location.href = "#about")}>Co nas wyróżnia</NavButtons>
        <NavButtons onClick={() => (window.location.href = "#ingredients")}>Skład</NavButtons>
        <NavButtons onClick={() => (window.location.href = "#products")}>Produkty</NavButtons>
      </Navigation>
    </Content>
  );
};
