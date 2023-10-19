import {
  BuyButton,
  Description,
  ProductInfo,
  StyledImage,
  StyledLogo,
  StyledMainLeftVector,
  SubDescription,
  Wrapper,
} from "./styled";

export const ProductPreview = () => {
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
        <StyledMainLeftVector />
      </Wrapper>
    </>
  );
};
