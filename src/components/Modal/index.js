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

  if (!isOpen) {
    return null;
  }

  const handleModalClose = () => {
    closeModal();
  };

  return (
    <BodyOverlay>
      <ModalContainer onClick={handleModalClose}>
        <ModalContent onClick={(event) => event.stopPropagation()}>
          <FlexWrapper>
            <ProductID>ID: {product.id}</ProductID>
            <CloseButton onClick={handleModalClose}>x</CloseButton>
          </FlexWrapper>
          <ContentWrapper>
            <ProductName>Nazwa: {product.name}</ProductName>
            <Value>Wartość: {product.value}</Value>
          </ContentWrapper>
        </ModalContent>
      </ModalContainer>
    </BodyOverlay>
  );
};
