import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext, ProductContext } from "../context/index";
import { useCartActions } from "../hooks/useCartActions";
import CheckoutModal from "./CheckoutModal";

export default function SidebarCart({ isOpen, onClose }) {
  const { cartItems } = useContext(CartContext);
  const { allProducts } = useContext(ProductContext);
  const { updateQuantity, removeFromCart } = useCartActions();
  const navigate = useNavigate();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  // Get product stock by ID
  const getProductStock = (productId) => {
    const product = allProducts.find((p) => p.id === productId);
    return product ? product.stock : 0;
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    onClose();
  };

  let subtotal = 0;

  for (const { price, quantity } of cartItems) {
    subtotal += price * quantity;
  }

  let deliveryFee = 150;
  if (cartItems.length === 0) deliveryFee = 0;

  const total = subtotal + deliveryFee;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-3 backdrop-blur-xs"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 max-h-96">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg mb-2">Your cart is empty</p>
              <p className="text-gray-400 text-sm">
                Add some products to get started!
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 py-4 border-b border-gray-100 last:border-b-0"
              >
                <div
                  className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all duration-200"
                  onClick={() => handleProductClick(item.id)}
                  title="View product details"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3
                    className="font-medium text-gray-900 text-sm mb-2 truncate cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => handleProductClick(item.id)}
                    title="View product details"
                  >
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">
                      ৳{item.price}
                    </span>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          item.quantity === 1
                            ? "bg-gray-50 cursor-not-allowed"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                      >
                        <span
                          className={`text-sm font-medium ${
                            item.quantity === 1
                              ? "text-gray-300"
                              : "text-gray-600"
                          }`}
                        >
                          −
                        </span>
                      </button>
                      <span className="text-sm font-medium min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          getProductStock(item.id) === 0
                            ? "bg-gray-50 cursor-not-allowed"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        disabled={getProductStock(item.id) === 0}
                      >
                        <span
                          className={`text-gray-600 text-sm font-medium ${
                            getProductStock(item.id) === 0
                              ? "text-gray-300"
                              : "text-gray-600"
                          }`}
                        >
                          +
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  className="text-red-500 hover:text-red-700 text-lg ml-2 p-1 rounded-full hover:bg-red-50 transition-colors"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove from cart"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {/* Cart Summary */}
        <div className="border-t border-gray-200 bg-gray-50 p-6">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-gray-900">৳{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-medium text-gray-900">৳{deliveryFee}</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-lg font-bold text-gray-900">
                  ৳{total}
                </span>
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 ${
              cartItems.length === 0
                ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                : "bg-slate-800 text-white hover:bg-slate-900"
            }`}
            onClick={() => setIsCheckoutModalOpen(true)}
            disabled={cartItems.length === 0}
          >
            <span>Checkout</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        onCartClose={onClose}
        cartItems={cartItems}
        total={total}
      />
    </>
  );
}
