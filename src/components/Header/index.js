import { Content, NavButtons, Navigation, StyledLogo } from "./styled";

export const Header = () => {
  return (
    <Content>
      <StyledLogo />
      <Navigation>
        <NavButtons>Co nas wyróżnia</NavButtons>
        <NavButtons>Skład</NavButtons>
        <NavButtons>Produkty</NavButtons>
      </Navigation>
    </Content>
  );
};
