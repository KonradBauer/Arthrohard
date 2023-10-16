import React from "react";
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  ProductID,
  ProductName,
  Value,
  FlexWrapper,
  ContentWrapper,
} from "./styled";

export const Modal = ({ isOpen, closeModal, product }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <FlexWrapper>
          <ProductID>ID:</ProductID>
          <CloseButton>x</CloseButton>
        </FlexWrapper>
        <ContentWrapper>
          <ProductName>Nazwa:</ProductName>
          <Value>Wartość:</Value>
        </ContentWrapper>
      </ModalContent>
    </ModalContainer>
  );
};
