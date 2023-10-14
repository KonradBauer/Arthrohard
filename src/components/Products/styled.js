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
