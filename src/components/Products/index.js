import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../fetchProducts";

export const GetProducts = () => {
  const { isLoading, error, data } = useQuery(["products"], fetchProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default GetProducts;
