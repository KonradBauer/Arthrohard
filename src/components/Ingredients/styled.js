import styled from "styled-components";
import { ReactComponent as Line } from "../../images/line.svg";
import { ReactComponent as Ellipse } from "../../images/ellipse.svg";

export const Container = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  background: #fff;
  margin-top: 116px;
  margin-left: auto;
  margin-right: auto;
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
  margin-top: 50px;
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
`;

export const StyledLine = styled(Line)`
  width: 100%;
  max-width: 730px;
  margin-top: 20px;
  stroke-width: 1px;
  stroke: #111;
  justify-content: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr;
  background: #fff;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const ContentBox = styled.div`
  margin-top: 85px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.img`
  object-fit: cover;
  width: 600.867px;
  height: 1238.309px;
`;
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 417px;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 417px;
  justify-content: center;
  margin: 0 auto;
`;
export const Description = styled.div`
  color: #111;
  text-align: center;
  font-size: 31px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
`;

export const Title = styled.div`
  color: #111;
  text-align: center;
  font-family: Futura PT;
  font-size: 31px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  position: relative;

  &:hover:after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 15%;
    width: 70%;
    height: 1px;
    background-color: #111;
  }
`;

export const Details = styled.div`
  color: #111;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 417px;
  margin-top: 30px;
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
`;

export const StyledEllipse = styled(Ellipse)`
  width: 70px;
  height: 70px;
  fill: #d9d9d9;
`;

export const BuyNowButton = styled.button`
  margin-top: -100px;
  border: none;
  display: flex;
  color: #f6f6f6;
  font-family: Futura PT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #ad4844;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1.005);
  }
`;

export const Parallax = styled.img`
  width: 945px;
  height: 496px;
  flex-shrink: 0;
`;

export const ParallaxWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 166px;
`;
