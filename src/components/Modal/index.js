import React, { useEffect } from "react";
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  ProductID,
  ProductName,
  Value,
  FlexWrapper,
  ContentWrapper,
  BodyOverlay,
} from "./styled";

export const Modal = ({ isOpen, closeModal, product }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !product) {
    return null;
  }

  const handleModalClose = () => {
    closeModal();
  };

  const randomProductValue = () => {
    return Math.random().toFixed(3);
  };

  return (
    <BodyOverlay>
      <ModalContainer onClick={handleModalClose}>
        <ModalContent onClick={(event) => event.stopPropagation()}>
          <FlexWrapper>
            <ProductID>ID: {product.id}</ProductID>
            <CloseButton onClick={handleModalClose}>✘</CloseButton>
          </FlexWrapper>
          <ContentWrapper>
            <ProductName>Autor: {product.author}</ProductName>
            <Value>Wartość: {randomProductValue() * 100}</Value>
          </ContentWrapper>
        </ModalContent>
      </ModalContainer>
    </BodyOverlay>
  );
};
