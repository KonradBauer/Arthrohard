import styled from "styled-components";

export const BodyOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  overflow: hidden;
`;

export const ModalContainer = styled.div`
  width: 50vw;
  height: 50vh;
  max-width: 843px;
  max-height: 285px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1050px) {
    width: 70vw;
    height: auto;
    max-width: 100%;
    max-height: 80vh;
  }
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

  @media (max-width: 420px) {
    font-size: 24px;
  }
`;

export const ProductName = styled.div`
  color: #000;
  text-align: center;
  font-family: Futura PT;
  font-size: 31px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  @media (max-width: 420px) {
    font-size: 24px;
  }
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

  @media (max-width: 420px) {
    font-size: 24px;
  }
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
