// API service for the e-commerce application

const API_BASE_URL = "http://localhost:5000/api";

// Products API
export const productService = {
  // Get all products
  getAllProducts: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
};

export default productService;
