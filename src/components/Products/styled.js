import { RiseLoader } from "react-spinners";
import styled from "styled-components";

export const ProductsContainer = styled.div`
  max-width: 1920px;
  display: grid;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.3rem;
  padding: 5vw;

  @media (max-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1350px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1050px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 847px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: 630px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 490px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 390px) {
    grid-template-columns: 1fr;
  }
`;

export const Tile = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 371px;
  height: 350px;
  gap: 10px;
  background: #bebebe;
  font-family: Futura PT;
  font-size: 31px;
  font-weight: 450;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;

  position: relative;
  border: none;
  top: 0;
  transition: top ease 0.5s;

  &:hover {
    border: 1px solid #484848;
    cursor: pointer;
    top: -10px;
  }

  @media (max-width: 847px) {
    width: 270px;
    height: 249px;
  }

  @media (max-width: 630px) {
    width: 230px;
    height: 209px;
  }

  @media (max-width: 550px) {
    width: 200px;
    height: 179px;
  }

  @media (max-width: 550px) {
    width: 170px;
    height: 149px;
  }

  @media (max-width: 390px) {
    width: 80%;
  }
`;

export const Label = styled.label`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid #ad4844;
  color: #000;
  font-family: Futura PT;
  font-size: 20px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;

  @media (max-width: 470px) {
    display: none;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;

export const Select = styled.select`
  display: flex;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #ad4844;
  color: #f6f6f6;
  font-family: Futura PT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  cursor: pointer;
`;

export const IDStyle = styled.div`
  font-size: normal;

  @media (max-width: 486px) {
    font-size: 20px;
  }
`;

export const StatusText = styled.div`
  text-align: center;
  justify-content: center;
  font-family: Futura PT;
  font-size: 31px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  bottom: 0;
  position: fixed;
  margin-bottom: 30px;
  width: 320px;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  margin-top: 20px;
`;

export const CustomRiseLoader = styled(RiseLoader)`
  width: ${(props) => (props.smallScreen ? "25px" : "50px")};
`;
