import { Content, Navigation, StyledLogo } from "./styled";

export const Header = () => {
  return (
    <Content>
      <StyledLogo />
      <Navigation>
        <div>Co nas wyróżnia</div>
        <div>Skład</div>
        <div>Produkty</div>
      </Navigation>
    </Content>
  );
};
