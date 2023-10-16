import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 143px;
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
  margin-bottom: 35px;
  position: relative;
  border: none;
  top: 0;
  transition: top ease 0.5s;

  &:hover {
    border: 1px solid #484848;
    cursor: pointer;
    top: -10px;
  }
`;

export const StatusText = styled.div`
  color: #111;
  text-align: center;
  font-family: Futura PT;
  font-size: 31px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  bottom: 0;
  position: fixed;
`;

export const Label = styled.label`
  display: inline-flex;
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
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;

export const Select = styled.select`
  display: inline-flex;
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
`;
