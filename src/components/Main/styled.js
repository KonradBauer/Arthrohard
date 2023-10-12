import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/Logo.svg";
import { ReactComponent as Image } from "../../images/medicine.svg";
import { ReactComponent as Line } from "../../images/line.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  max-width: 100%;
  margin-top: 31px;
`;

export const StyledLogo = styled(Logo)`
  width: 730px;
  height: auto;
`;

export const Description = styled.div`
  margin-top: 33px;
  width: 654px;
  font-family: Futura PT;
  font-size: 48px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  background: linear-gradient(90deg, #111 -8.85%, #b1b1b1 116.12%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SubDescription = styled.div`
  margin-top: 20px;
  color: #111;
  font-family: Futura PT;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductInfo = styled.div`
  flex-wrap: wrap;
  margin-left: 111px;
  margin-right: 244px;
  margin-top: -50px;
`;

export const BuyButton = styled.button`
  margin-top: 20px;
  width: 171px;
  height: 46px;
  display: flex;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #30ab4c;
  color: #f6f6f6;
  border: none;
  cursor: pointer;
`;

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
`;

export const StyledLine = styled(Line)`
  width: 100%;
  max-width: 730px;
  margin-top: 20px;
  stroke-width: 1px;
  stroke: #111;
`;
