import React from "react";
import { Content, Navigation, StyledLogo, StyledNavButtons } from "./styled";

export const Header = () => {
  const handleNavigation = (sectionId) => {
    window.location.href = `#${sectionId}`;
  };

  return (
    <Content>
      <StyledLogo />
      <Navigation>
        <StyledNavButtons onClick={() => handleNavigation("about")}>
          Co nas wyróżnia
        </StyledNavButtons>
        <StyledNavButtons onClick={() => handleNavigation("ingredients")}>Skład</StyledNavButtons>
        <StyledNavButtons onClick={() => handleNavigation("products")}>
          <strong>Produkty</strong>
        </StyledNavButtons>
      </Navigation>
    </Content>
  );
};
