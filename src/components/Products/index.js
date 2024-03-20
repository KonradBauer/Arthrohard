import React, { useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../fetchProducts";
import {
  Label,
  ProductsContainer,
  Select,
  SelectContainer,
  Tile,
  StatusText,
  LoaderContainer,
  IDStyle,
} from "./styled";
import { Modal } from "../Modal";
import { ClipLoader } from "react-spinners";

export const GetProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const bottomOfPageRef = useRef(null);

  const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(["products"], ({ pageParam = 1 }) => fetchProducts(pageParam, itemsPerPage), {
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.page + 1;
        return nextPage;
      },
      enabled: true,
    });

  useEffect(() => {
    const handleScroll = () => {
      if (
        bottomOfPageRef.current &&
        bottomOfPageRef.current.getBoundingClientRect().bottom <= window.innerHeight
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage]);

  if (isLoading) {
    return null;
  }

  if (isError) {
    return <StatusText>Error: {error.message}</StatusText>;
  }

  const calculateId = (pageIndex, productIndex) => {
    const totalLoadedProducts = data.pages
      .slice(0, pageIndex)
      .reduce((acc, page) => acc + page.length, 0);
    return totalLoadedProducts + productIndex;
  };

  return (
    <div>
      <SelectContainer>
        <Label>liczba produktów na stronie:</Label>
        <Select onChange={(event) => setItemsPerPage(event.target.value)} value={itemsPerPage}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
        </Select>
      </SelectContainer>
      <ProductsContainer id="products">
        {data.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((product, productIndex) => (
              <Tile
                key={product.id}
                onClick={() => {
                  setSelectedProduct(product);
                  setIsModalOpen(true);
                }}
              >
                <IDStyle>ID: {calculateId(pageIndex, productIndex)}</IDStyle>
              </Tile>
            ))}
          </React.Fragment>
        ))}
        {hasNextPage && <div ref={bottomOfPageRef}></div>}
        <StatusText>
          {isFetchingNextPage ? (
            <LoaderContainer>
              <ClipLoader />
            </LoaderContainer>
          ) : null}
        </StatusText>
      </ProductsContainer>
      <Modal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
};
