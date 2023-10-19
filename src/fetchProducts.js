import axios from "axios";

export const fetchProducts = async (pageNumber, pageSize) => {
  try {
    const response = await axios.get(
      `https://brandstestowy.smallhost.pl/api/random?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );

    await new Promise((resolve) => setTimeout(resolve, 500));

    return response.data;
  } catch (error) {
    throw new Error(`Error fetching products: ${error.message}`);
  }
};
