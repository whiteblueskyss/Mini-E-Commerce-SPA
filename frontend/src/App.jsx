import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./components/AllProducts";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import { CartContext, ProductContext } from "./context/index";
import products from "./utility/products";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [allProducts, setAllProducts] = useState([...products]);

  const cart = {
    cartItems,
    setCartItems,
    itemCount: cartItems.length,
  };

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
