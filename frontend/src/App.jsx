import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./components/AllProducts";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
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
  );
}

export default App;
