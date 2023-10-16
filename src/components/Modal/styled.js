import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 843px;
  height: 285px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CloseButton = styled.button`
  color: #000;
  text-align: center;
  font-family: Futura PT;
  font-size: 31px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ProductID = styled.div`
  color: #000;
  text-align: center;
  font-family: Futura PT;
  font-size: 31px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
`;

export const ProductName = styled.div`
  color: #000;
  text-align: center;
  font-family: Futura PT;
  font-size: 31px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
`;

export const Value = styled.div`
  color: #000;
  text-align: center;
  font-family: Futura PT;
  font-size: 31px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  margin-top: 55px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 63px;
  padding: 8px 20px;
`;
