import { useContext } from "react";
import { CartContext } from "../context/index";

// Custom hook for cart actions
export const useCartActions = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  // Check if product is in cart
  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  // Get quantity of product in cart
  const getQuantityInCart = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  // Add product to cart
  const addToCart = (product) => {
    const newItem = {
      id: product.id,
      name: product.title,
      image: product.image,
      price: product.price,
      quantity: 1,
    };
    setCartItems([...cartItems, newItem]);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Toggle product in cart (add if not present, remove if present)
  const toggleCart = (product) => {
    if (isInCart(product.id)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  // Update quantity of product in cart
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return; // Don't allow quantity less than 1

    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Get total items count in cart
  const getTotalItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Get total price of cart
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    isInCart,
    getQuantityInCart,
    addToCart,
    removeFromCart,
    toggleCart,
    updateQuantity,
    getTotalItemsCount,
    getTotalPrice,
    clearCart,
  };
};
