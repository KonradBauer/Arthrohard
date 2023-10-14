import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get("https://brandstestowy.smallhost.pl/api/random");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products: " + error.message);
  }
};
