import styled from "styled-components";
import { ReactComponent as Line } from "../../images/line.svg";

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
  }

  @media (max-width: 486px) {
    margin: 0 auto;
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

  @media (max-width: 1590px) {
    gap: 0;
  }

  @media (max-width: 1300px) {
    gap: 50px;
    flex-direction: column;
  }

  @media (max-width: 760px) {
    flex-wrap: wrap;
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
    width: 380px;
    margin: 0 auto;
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
`;

export const Li = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

export const CenterContainer = styled.div`
  gap: 20px;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;

  &:hover:after {
    content: "";
    position: absolute;
    bottom: -24px;
    width: 100%;
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
