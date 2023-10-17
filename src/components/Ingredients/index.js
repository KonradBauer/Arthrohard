import {
  BuyNowButton,
  Container,
  ContentBox,
  Description,
  Details,
  FlexContainer,
  Header,
  HeaderWrapper,
  ImageWrapper,
  IngredientsGlobalWrapper,
  LeftSide,
  RightSide,
  StyledEllipse,
  StyledLine,
  SubHeader,
  Text,
  Title,
} from "./styled";

import medicineIngredients from "../../images/medicineIngredients.png";

export const Ingredients = () => {
  return (
    <>
      <IngredientsGlobalWrapper>
        <Container>
          <HeaderWrapper>
            <Header id="ingredients">Skład w 5 ml</Header>
            <StyledLine />
            <SubHeader>Co dają poszczególne składniki:</SubHeader>
          </HeaderWrapper>
        </Container>
        <FlexContainer>
          <ContentBox>
            <LeftSide>
              <StyledEllipse />
              <Description>
                <Title>Siarczan glukozaminy</Title>
                <Text>650 mg</Text>
                <Details>
                  Glukozamina jest naturalnym składnikiem chrząstki. Dodatek glukozaminy przyczynia
                  się do zwiększenia produkcji glikozaminoglikanów (m.in. siarczanu keratanu,
                  heparanu, kwasu hialuronowego), które pomagają w odbudowie chrząstki, co jest
                  szczególnie korzystne dla zwierząt ze zmianami zwyrodnieniowymi stawów.
                </Details>
              </Description>
              <StyledEllipse />
              <Description>
                <Title>Siarczan chondroityny</Title>
                <Text>300 mg</Text>
                <Details>
                  Chondroityna, podobnie jak glukozamina, jest składnikiem chrząstki. Chondroityna
                  pomaga zwalczać enzymy, które niszczą chrząstkę, a także pomaga chrząstce
                  zatrzymać wodę, co jest ważne dla jej sprężystości i absorpcji wstrząsów.
                </Details>
              </Description>
              <StyledEllipse />
              <Description>
                <Title>Kwas hialuronowy</Title>
                <Text>50 mg</Text>
                <Details>
                  Kwas hialuronowy jest kluczowym składnikiem płynu stawowego, który działa jak smar
                  i amortyzator dla stawów. Suplementacja kwasem hialuronowym może pomóc w
                  utrzymaniu prawidłowej objętości i konsystencji płynu stawowego.
                </Details>
              </Description>
            </LeftSide>
          </ContentBox>
          <ContentBox>
            <ImageWrapper src={medicineIngredients} />
            <BuyNowButton>Kup teraz</BuyNowButton>
          </ContentBox>
          <ContentBox>
            <RightSide>
              <StyledEllipse />
              <Description>
                <Title>Czarci pazur</Title>
                <Text>250 mg</Text>
                <Details>
                  Czarci pazur jest rośliną, która ma właściwości przeciwzapalne i przeciwbólowe.
                  Może to pomóc zwierzętom, które doświadczają bólu i stanu zapalnego związanego z
                  problemami ze stawami.
                </Details>
              </Description>
              <StyledEllipse />
              <Description>
                <Title>Witamina C</Title>
                <Text>50 mg</Text>
                <Details>
                  Witamina C jest potężnym przeciwutleniaczem, który może pomóc w ochronie stawów
                  poprzez neutralizację wolnych rodników, które mogą uszkadzać chrząstkę. Ponadto,
                  witamina C odgrywa ważną rolę w produkcji kolagenu, kluczowego składnika
                  chrząstki.
                </Details>
              </Description>
              <StyledEllipse />
              <Description>
                <Title>MSM</Title>
                <Text>50 mg</Text>
                <Details>
                  Metylosulfonylometan, czyli MSM, to naturalny związek siarki, który pomaga w
                  utrzymaniu zdrowych stawów poprzez zmniejszenie stanu zapalnego i bólu. MSM może
                  również pomagać w produkcji kolagenu, co przyczynia się do zdrowia chrząstki
                  stawowej.
                </Details>
              </Description>
            </RightSide>
          </ContentBox>
        </FlexContainer>
      </IngredientsGlobalWrapper>
    </>
  );
};
