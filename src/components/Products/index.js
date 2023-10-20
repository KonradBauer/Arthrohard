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
  CustomRiseLoader,
  LoaderContainer,
} from "./styled";
import { Modal } from "../Modal";

export const GetProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(["products"], ({ pageParam = 1 }) => fetchProducts(pageParam, itemsPerPage), {
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.pageNumber + 1;
        return nextPage <= Math.ceil(lastPage.totalItems / lastPage.pageSize) ? nextPage : null;
      },
    });

  const bottomOfPageRef = useRef({ clientHeight: 100 });

  useEffect(() => {
    const handleScroll = () => {
      const { innerHeight, scrollY } = window;
      const { scrollHeight } = document.documentElement;

      if (innerHeight + scrollY >= scrollHeight - bottomOfPageRef.current.clientHeight) {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return;
  }

  if (isError) {
    return <StatusText>Error: {isError.message}</StatusText>;
  }

  return (
    <div>
      <SelectContainer>
        <Label htmlFor="itemsPerPage">liczba produktów na stronie:</Label>
        <Select
          id="itemsPerPage"
          name="itemsPerPage"
          onChange={(event) => setItemsPerPage(parseInt(event.target.value, 10))}
          value={itemsPerPage}
        >
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
                ID: {product.id}
              </Tile>
            ))}
          </React.Fragment>
        ))}
        {hasNextPage && <div ref={bottomOfPageRef} style={{ height: "10px" }}></div>}
        <StatusText>
          {isFetchingNextPage ? (
            <LoaderContainer>
              <CustomRiseLoader color="#bebebe" smallScreen={window.innerWidth < 500} />
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
