import React from "react";
import { Content, Navigation, StyledLogo, StyledNavButtons } from "./styled";

export const Header = () => {
  const handleNavigation = (ID) => {
    window.location.href = `#${ID}`;
  };

  const checkComponentExist = () => {
    const productsComponent = document.getElementById("products");

    productsComponent ? handleNavigation("products") : handleNavigation("parallax");
  };

  return (
    <Content>
      <StyledLogo />
      <Navigation>
        <StyledNavButtons onClick={() => handleNavigation("about")}>
          Co nas wyróżnia
        </StyledNavButtons>
        <StyledNavButtons onClick={() => handleNavigation("ingredients")}>Skład</StyledNavButtons>
        <StyledNavButtons onClick={() => checkComponentExist("ID")}>
          <strong>Produkty</strong>
        </StyledNavButtons>
      </Navigation>
    </Content>
  );
};
