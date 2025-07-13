import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartIcon, HomeIcon } from "../assets/Svgs";
import { CartContext } from "../context/index";
import SidebarCart from "./SidebarCart";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { itemCount } = useContext(CartContext);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <header className="bg-red-600 shadow-lg fixed top-0 left-0 right-0 z-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-black hover:text-gray-300 transition-colors"
            >
              Mini E-Commerce SPA
            </Link>
          </div>
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-black-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
            >
              <HomeIcon className="w-5 h-5" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <button
              onClick={toggleCart}
              className="relative text-black-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
            >
              <CartIcon className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-950 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  {itemCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Cart Sidebar */}
      <SidebarCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
