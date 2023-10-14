import {
  BuyButton,
  Center,
  CenterImages,
  Description,
  DescriptionHeader,
  ImageContainer,
  Left,
  Li,
  PrecisedDescription,
  ProductDescription,
  ProductInfo,
  Right,
  SectionWrapper,
  StyledImage,
  StyledLine,
  StyledLogo,
  SubDescription,
  SubHeader,
  Ul,
  Wrapper,
} from "./styled";

export const Main = () => {
  return (
    <>
      <Wrapper>
        <StyledImage />
        <ProductInfo>
          <StyledLogo />
          <Description>Lab-V Arthrohard Preparat na wsparcie stawów dla psa i kota</Description>
          <SubDescription>
            Arthrohard to dobrze przyswajalny suplement diety w formie syropu,
            <br /> stworzony z myślą o zdrowiu stawów Twojego psa lub kota.
          </SubDescription>
          <BuyButton>Kup teraz</BuyButton>
        </ProductInfo>
      </Wrapper>
      <SectionWrapper>
        <SubHeader id="about">Co wyróżnia nasz preparat</SubHeader>
        <StyledLine />
      </SectionWrapper>
      <ProductDescription>
        <Left>
          <DescriptionHeader>
            Innowacyjny dodatek - Czarciego Pazura
            <StyledLine />
            <PrecisedDescription>
              Zapewnia dodatkowe wsparcie w zwalczaniu stanów bólowych i zapalnych. Skoncentrowane
              składniki aktywne, opracowane we współpracy z lekarzami weterynarii, przynoszą szybkie
              i zauważalne efekty, szczególnie korzystne dla zwierząt z poważnymi problemami
              stawowymi.
            </PrecisedDescription>
          </DescriptionHeader>
        </Left>
        <Center>
          <DescriptionHeader>
            Wygoda - dwa sposoby podawania
            <StyledLine />
            <PrecisedDescription>
              <Ul>
                <Li>Bezpośrednio do pyszczka</Li>
                <Li>Zmieszany z karmą</Li>
              </Ul>
            </PrecisedDescription>
          </DescriptionHeader>
        </Center>
        <Right>
          <DescriptionHeader>
            Skuteczność - skoncentrowana dawka
            <StyledLine />
            <PrecisedDescription>
              Tylko jedna porcja dziennie. To nie tylko wygoda, ale również gwarancja, że Twoje
              zwierzę otrzymuje wszystko, czego potrzebuje, aby cieszyć się zdrowiem i aktywnością
              na długo. Skorzystaj z zalet Arthrohard i zobacz różnicę w komforcie życia swojego
              zwierzęcia.
            </PrecisedDescription>
          </DescriptionHeader>
        </Right>
      </ProductDescription>
      <ImageContainer>
        <img src="../../images/leftImage.jpg" alt="Puppy" />
        <CenterImages></CenterImages>
      </ImageContainer>
    </>
  );
};
