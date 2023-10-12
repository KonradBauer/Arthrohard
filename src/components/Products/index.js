import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../fetchProducts";
import { ProductsContainer, Tile } from "./styled";

export const GetProducts = () => {
  const { isLoading, isPaused, error, data } = useQuery(["products"], fetchProducts);

  if (data) {
    return (
      <ProductsContainer id="products">
        {data.data.map((product) => (
          <Tile key={product.id}>ID: {product.id}</Tile>
        ))}
      </ProductsContainer>
    );
  }

  if (isPaused) {
    return "No network access. Check your internet connection";
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
};
