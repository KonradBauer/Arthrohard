import styled from "styled-components";
import { ReactComponent as Line } from "../../images/line.svg";
import { ReactComponent as Ellipse } from "../../images/ellipse.svg";

export const IngredientsGlobalWrapper = styled.div`
  background: #fff;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
`;

export const Header = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
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
`;

export const SubHeader = styled.div`
  color: #111;
  text-align: center;
  font-family: Futura PT;
  font-size: 31px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  margin-top: 100px;
  margin-bottom: 121px;

  @media (max-width: 768px) {
    font-size: 26px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 486px) {
    font-size: 22px;
  }
`;

export const StyledLine = styled(Line)`
  width: 100%;
  max-width: 730px;
  height: 1px;
  background: #111;
  margin-top: 20px;
  align-self: center;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const ContentBox = styled.div`
  width: 26.0625rem;
  text-align: center;

  @media (max-width: 486px) {
    width: auto;
  }
`;

export const ImageWrapper = styled.img`
  max-width: 33.55419rem;
  width: 100%;
  height: 75.39431rem;
  object-fit: cover;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 417px;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 486px) {
    max-width: 320px;
    padding: 10px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 417px;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 486px) {
    max-width: 320px;
    padding: 10px;
  }
`;

export const Description = styled.div`
  font-size: 18px;
  color: #111;
  margin-top: -30px;

  @media (max-width: 486px) {
    font-size: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #111;
  position: relative;

  &:hover:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 1px;
    background-color: #111;
  }
`;

export const Details = styled.p`
  color: #111;
  text-align: center;
  font-family: Futura PT;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 486px) {
    font-size: 18px;
  }
`;

export const Text = styled.div`
  margin-top: 40px;
  color: #111;
  text-align: center;
  font-family: Futura PT;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 486px) {
    font-size: 18px;
  }
`;

export const StyledEllipse = styled(Ellipse)`
  width: 70px;
  height: 70px;
  background: #d9d9d9;
  border-radius: 50%;
  margin: 0 auto;
`;

export const BuyNowButton = styled.button`
  margin-bottom: 50px;
  border: none;
  background: #ad4844;
  color: #f6f6f6;
  font-size: 18px;
  font-weight: 700;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Parallax = styled.img`
  width: 945px;
  height: 496px;
  flex-shrink: 0;
  margin-top: 166px;
`;

export const ParallaxWrapper = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  height: 100%;
  perspective: 1000px;
  overflow: hidden;

  @media (max-width: 868px) {
    img {
      width: 90%;
      height: auto;
    }
  }
`;
