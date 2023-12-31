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
  const [shouldFetchData, setShouldFetchData] = useState(false);

  const bottomOfPageRef = useRef(null);

  const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(["products"], ({ pageParam = 1 }) => fetchProducts(pageParam, itemsPerPage), {
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.pageNumber + 1;
        return nextPage <= Math.ceil(lastPage.totalItems / lastPage.pageSize) ? nextPage : null;
      },
      enabled: shouldFetchData,
    });

  useEffect(() => {
    const handleScroll = () => {
      const { innerHeight, scrollY } = window;
      const { scrollHeight } = document.documentElement;

      if (innerHeight + scrollY >= scrollHeight - 1) {
        setShouldFetchData(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (shouldFetchData && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
      setShouldFetchData(false);
    }
  }, [shouldFetchData, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return null;
  }

  if (isError) {
    return <StatusText>Error: {error.message}</StatusText>;
  }

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
            {page.data.map((product) => (
              <Tile
                key={product.id}
                onClick={() => {
                  setSelectedProduct(product);
                  setIsModalOpen(true);
                }}
              >
                <IDStyle>ID: {product.id}</IDStyle>
              </Tile>
            ))}
          </React.Fragment>
        ))}
        {hasNextPage && <div ref={bottomOfPageRef} style={{ height: "10px" }}></div>}
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
