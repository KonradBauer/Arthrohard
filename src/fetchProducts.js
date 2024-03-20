import axios from "axios";

export const fetchProducts = async (pageNumber, pageSize) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${pageNumber}&limit=${pageSize}`
    );

    await new Promise((resolve) => setTimeout(resolve, 500));

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
