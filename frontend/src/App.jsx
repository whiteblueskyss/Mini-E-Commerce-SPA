import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./components/AllProducts";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import { CartContext, ProductContext } from "./context/index";
import { cartService, productService } from "./services/api";
import { sessionManager } from "./utility/session";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [cartLoaded, setCartLoaded] = useState(false);

  // Save cart to backend whenever cartItems change (but only after initial load)
  useEffect(() => {
    if (sessionId && cartLoaded) {
      const saveCartAsync = async () => {
        try {
          console.log("Saving cart items:", cartItems);
          await cartService.saveCart(sessionId, cartItems);
          console.log("Cart saved successfully");
        } catch (error) {
          console.error("Error saving cart:", error);
        }
      };
      saveCartAsync();
    }
  }, [cartItems, sessionId, cartLoaded]);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Initialize session
        const session = sessionManager.getSessionId();
        setSessionId(session);

        // Fetch products
        const productData = await productService.getAllProducts();
        if (productData.success) {
          setAllProducts(productData.data);
        } else {
          setError("Failed to fetch products");
          return;
        }

        // Fetch cart
        const cartData = await cartService.getCart(session);
        if (cartData.success) {
          console.log("Cart loaded from server:", cartData.data);
          setCartItems(cartData.data);

          // Update product stock based on cart items (using original stock from API)
          if (cartData.data.length > 0) {
            setAllProducts((prevProducts) =>
              prevProducts.map((product) => {
                // Find the original product data to get the original stock
                const originalProduct = productData.data.find(
                  (p) => p.id === product.id
                );
                const cartItem = cartData.data.find(
                  (item) => item.id === product.id
                );
                if (cartItem && originalProduct) {
                  return {
                    ...product,
                    stock: originalProduct.stock - cartItem.quantity,
                  };
                }
                return product;
              })
            );
          }
        } else {
          console.log("No cart found or error loading cart");
        }
        setCartLoaded(true);
      } catch (error) {
        console.error("Error initializing app:", error);
        setError("Failed to connect to server");
      } finally {
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  const cart = {
    cartItems,
    setCartItems,
    itemCount: cartItems.length,
    sessionId,
  };

  // Show loading state while fetching products
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading products...</p>
        </div>
      </div>
    );
  }

  // Show error state if API fails
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-red-600 text-lg mb-2">{error}</p>
          <p className="text-gray-500 text-sm">
            Please make sure the backend server is running.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <CartContext.Provider value={cart}>
      <ProductContext.Provider value={{ allProducts, setAllProducts }}>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <div className="pt-15">
              <Header />
            </div>

            <Routes>
              <Route path="/" element={<AllProducts />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </div>
        </Router>
      </ProductContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
