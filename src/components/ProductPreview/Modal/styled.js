import styled from "styled-components";
import { ReactComponent as Image } from "../../../images/medicine.svg";
import { ReactComponent as Logo } from "../../../images/Logo.svg";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledImage = styled(Image)`
  max-width: 100%;
  margin-top: 31px;

  @media (max-width: 668px) {
    height: auto;
  }

  @media (max-width: 400px) {
    height: auto;
    width: 90%;
  }
`;

export const StyledLogo = styled(Logo)`
  width: 730px;
  height: auto;

  @media (max-width: 1768px) {
    margin-top: 30px;
  }

  @media (max-width: 1000px) {
    max-width: 80%;
  }

  @media (max-width: 846px) {
    max-width: 70%;
  }
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

  @media (max-width: 1768px) {
    margin-top: 30px;
  }

  @media (max-width: 1000px) {
    font-size: 38px;
  }

  @media (max-width: 846px) {
    max-width: 70%;
    font-size: 28px;
  }

  @media (max-width: 710px) {
    max-width: 100%;
    font-size: 22px;
  }
`;

export const SubDescription = styled.div`
  margin-top: 20px;
  color: #111;
  font-family: Futura PT;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 846px) {
    max-width: 70%;
    font-size: 18px;
  }

  @media (max-width: 710px) {
    max-width: 100%;
    font-size: 16px;
  }
`;

export const ProductInfo = styled.div`
  flex-wrap: wrap;
  margin-left: 111px;
  margin-right: 244px;
  margin-top: -50px;

  @media (max-width: 1768px) {
    margin-top: 30px;
  }

  @media (max-width: 1000px) {
    max-width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 846px) {
    max-width: 70%;
  }
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
  transition: 0.2s;

  @media (max-width: 846px) {
    width: 100%;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1.005);
  }
`;
