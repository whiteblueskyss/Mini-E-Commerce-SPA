// API service for the e-commerce application

const API_BASE_URL = "https://mini-e-commerce-spa-u7ca.onrender.com/api";

// https://mini-e-commerce-spa-u7ca.onrender.com/api
// this api is also running.

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

// Cart API
export const cartService = {
  // Get cart by sessionId
  getCart: async (sessionId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart/${sessionId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching cart:", error);
      throw error;
    }
  },

  // Save cart
  saveCart: async (sessionId, items) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart/${sessionId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error saving cart:", error);
      throw error;
    }
  },
};

export default productService;
