import { Container, Header, HeaderWrapper, StyledLine, SubHeader } from "./styled";

export const Ingredients = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header id="ingredients">Skład w 5 ml</Header>
        <StyledLine />
        <SubHeader>Co dają poszczególne składniki:</SubHeader>
      </HeaderWrapper>
    </Container>
  );
};
