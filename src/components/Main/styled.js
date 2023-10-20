import styled from "styled-components";
import { ReactComponent as Line } from "../../images/line.svg";
import { ReactComponent as FlowerLeftVector } from "../../images/MainImageLeftVector.svg";
import { ReactComponent as FlowerRightVector } from "../../images/MainImageRightVector.svg";
import { ReactComponent as CenterLeftVector } from "../../images/MainCenterLeftVector.svg";
import { ReactComponent as CenterRightVector } from "../../images/MainCenterRightVector.svg";
import { ReactComponent as SyringeLeftVector } from "../../images/MainRightImageLeftVector.svg";

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
`;

export const SubHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 153px;
  text-align: center;
  font-family: Futura PT;
  font-size: 48px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  background: linear-gradient(90deg, #111 -8.85%, #b1b1b1 58.84%, #696969 91.39%, #b1b1b1 116.12%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 486px) {
    font-size: 30px;
    margin: 0 auto;
    padding: 20px;
  }
`;

export const StyledLine = styled(Line)`
  width: 100%;
  max-width: 730px;
  margin-top: 20px;
  stroke-width: 1px;
  stroke: #111;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 135px;
  margin-bottom: 116px;

  @media (max-width: 1590px) {
    gap: 0;
  }

  @media (max-width: 1300px) {
    gap: 50px;
    flex-wrap: wrap;
  }

  @media (max-width: 760px) {
  }

  @media (max-width: 486px) {
    margin-top: 60px;
    margin-bottom: 50px;
  }

  @media (max-width: 320px) {
    margin-top: 40px;
    margin-bottom: 30px;
  }
`;

export const DescriptionHeader = styled.div`
  color: #111;
  text-align: center;
  font-size: 31px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;

  @media (max-width: 486px) {
    font-size: 24px;
    width: 300px;
  }

  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

export const PrecisedDescription = styled.div`
  color: #111;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 417px;
  margin-top: 30px;

  @media (max-width: 486px) {
    font-size: 18px;
    width: 280px;
    margin: 0 auto;
  }

  @media (max-width: 320px) {
    font-size: 14px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 417px;
  justify-content: center;
  margin: 0 auto;
`;

export const Center = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 10px;
  width: 312px;
  justify-content: center;
  margin: 0 auto;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 417px;
  justify-content: center;
  margin: 0 auto;
`;

export const Ul = styled.ul`
  list-style-type: none;
  flex-direction: column;
  width: 100%;
  max-width: 450px;

  @media (max-width: 486px) {
    padding: 0;
  }

  @media (max-width: 320px) {
    padding: 0;
  }
`;

export const Li = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  font-size: 20px;

  @media (max-width: 486px) {
    margin-top: 10px;
    font-size: 14px;
  }

  @media (max-width: 320px) {
    margin-top: auto;
  }
`;

export const CenterContainer = styled.div`
  gap: 20px;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;

  @media (max-width: 486px) {
    width: 140px;
  }

  @media (max-width: 320px) {
    width: 120px;
  }

  &:hover:after {
    content: "";
    position: absolute;
    bottom: -30px;
    width: 115%;
    height: 1px;
    background-color: #111;
  }
`;

export const Images = styled.img`
  width: 100%;
  height: auto;
  max-width: 450px;
  border-radius: 8px;
  object-fit: cover;
`;

export const CenteredImages = styled.img`
  width: 100%;
  height: auto;
  max-width: 450px;
  border-radius: 8px;
  object-fit: cover;
`;

export const UnderlineWrapper = styled.div`
  position: relative;

  @media (max-width: 486px) {
    width: 300px;
  }

  @media (max-width: 320px) {
    width: 280px;
  }

  &:hover:after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: -24px;
    width: 100%;
    height: 1px;
    background-color: #111;
  }
`;

export const BulletWrapper = styled.img`
  margin-right: 20px;
`;

export const StyledFlowerLeftVector = styled(FlowerLeftVector)`
  position: absolute;
  width: 50%;
  top: 143%;
  right: 68%;
  background-size: auto;
  z-index: -1;

  @media (max-width: 1900px) {
    display: none;
  }
`;

export const StyledFlowerRightVector = styled(FlowerRightVector)`
  position: absolute;
  width: 50%;
  top: 140%;
  right: 46.5%;
  background-size: auto;
  z-index: -1;

  @media (max-width: 1900px) {
    display: none;
  }
`;

export const StyledCenterLeftVector = styled(CenterLeftVector)`
  position: absolute;
  width: 50%;
  top: 142%;
  right: 35%;
  background-size: auto;
  z-index: -1;

  @media (max-width: 1900px) {
    display: none;
  }
`;

export const StyledCenterRightVector = styled(CenterRightVector)`
  position: absolute;
  width: 50%;
  top: 142%;
  right: 16.5%;
  background-size: auto;
  z-index: -1;

  @media (max-width: 1900px) {
    display: none;
  }
`;

export const StyledSyringeLeftVector = styled(SyringeLeftVector)`
  position: absolute;
  width: 50%;
  top: 142%;
  right: 2%;
  background-size: auto;
  z-index: -1;

  @media (max-width: 1900px) {
    display: none;
  }
`;
