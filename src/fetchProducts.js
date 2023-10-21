import axios from "axios";

export const fetchProducts = async (pageNumber, pageSize) => {
  const response = await axios.get(
    `https://brandstestowy.smallhost.pl/api/random?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );

  await new Promise((resolve) => setTimeout(resolve, 500));

  return response.data;
};
