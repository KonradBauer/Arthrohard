import React, { useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../fetchProducts";
import { ProductsContainer, StatusText, Tile } from "./styled";
import { Modal } from "../Modal";

export const GetProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(["products"], ({ pageParam = 1 }) => fetchProducts(pageParam, 2), {
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.pageNumber + 1;
        return nextPage <= Math.ceil(lastPage.totalItems / lastPage.pageSize) ? nextPage : null;
      },
    });

  const bottomOfPageRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const { innerHeight } = window;
      const { scrollY } = window;
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
    return <StatusText>Loading...</StatusText>;
  }

  if (isError) {
    return <StatusText>Error: {isError.message}</StatusText>;
  }

  return (
    <div>
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
        {hasNextPage && <div ref={bottomOfPageRef}>{isFetchingNextPage}</div>}
      </ProductsContainer>
      <Modal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
};
