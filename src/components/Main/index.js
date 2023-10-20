import {
  BulletWrapper,
  Center,
  CenterContainer,
  CenteredImages,
  DescriptionHeader,
  Images,
  Left,
  Li,
  PrecisedDescription,
  ProductDescription,
  Right,
  SectionWrapper,
  StyledCenterLeftVector,
  StyledCenterRightVector,
  StyledFlowerLeftVector,
  StyledFlowerRightVector,
  StyledLine,
  StyledSyringeLeftVector,
  SubHeader,
  Ul,
  UnderlineWrapper,
} from "./styled";

import leftImage from "../../images/leftImage.png";
import rightImage from "../../images/rightImage.png";
import centerLeft from "../../images/center1.png";
import centerRight from "../../images/center2.png";
import bulletFirst from "../../images/bullet1.png";
import bulletSecond from "../../images/bullet2.png";

export const Main = () => {
  <>
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
            składniki aktywne, opracowane we współpracy z lekarzami weterynarii, przynoszą szybkie i
            zauważalne efekty, szczególnie korzystne dla zwierząt z poważnymi problemami stawowymi.
          </PrecisedDescription>
        </DescriptionHeader>
        <UnderlineWrapper>
          <Images src={leftImage} alt="special ingredient" />
        </UnderlineWrapper>
      </Left>
      <Center>
        <DescriptionHeader>
          Wygoda -<br />
          dwa sposoby podawania
          <StyledLine />
          <PrecisedDescription>
            <Ul>
              <Li>
                <BulletWrapper src={bulletFirst} />
                Bezpośrednio do pyszczka
              </Li>
              <Li>
                <BulletWrapper src={bulletSecond} />
                Zmieszany z karmą
              </Li>
            </Ul>
          </PrecisedDescription>
        </DescriptionHeader>
        <CenterContainer>
          <CenteredImages src={centerLeft} alt="instruction" />
          <CenteredImages src={centerRight} alt="instruction" />
        </CenterContainer>
      </Center>
      <Right>
        <DescriptionHeader>
          Skuteczność -<br /> skoncentrowana dawka
          <StyledLine />
          <PrecisedDescription>
            <strong>Tylko jedna porcja dziennie.</strong>
            <br /> To nie tylko wygoda, ale również gwarancja, że Twoje zwierzę otrzymuje wszystko,
            czego potrzebuje, aby cieszyć się zdrowiem i aktywnością na długo. Skorzystaj z zalet
            Arthrohard i zobacz różnicę w komforcie życia swojego zwierzęcia.
          </PrecisedDescription>
        </DescriptionHeader>
        <UnderlineWrapper>
          <Images src={rightImage} alt="dosage" />
        </UnderlineWrapper>
      </Right>
    </ProductDescription>
    <StyledFlowerLeftVector />
    <StyledFlowerRightVector />
    <StyledCenterLeftVector />
    <StyledCenterRightVector />
    <StyledSyringeLeftVector />
  </>;
};
