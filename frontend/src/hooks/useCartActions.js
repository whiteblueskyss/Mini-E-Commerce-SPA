import { useContext } from "react";
import { CartContext, ProductContext } from "../context/index";

// Custom hook for cart actions
export const useCartActions = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { allProducts, setAllProducts } = useContext(ProductContext);

  // Update product stock
  const updateProductStock = (productId, stockChange) => {
    setAllProducts(
      allProducts.map((product) =>
        product.id === productId
          ? { ...product, stock: product.stock + stockChange }
          : product
      )
    );
  };

  // Check if product is in cart
  const isInCart = (productId) => {
    return cartItems.find((item) => item.id === productId) !== undefined;
  };

  // Get quantity of product in cart
  const getQuantityInCart = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  // Add product to cart
  const addToCart = (product) => {
    if (product.stock <= 0) return; // Don't add if no stock

    const newItem = {
      id: product.id,
      name: product.title,
      image: product.image,
      price: product.price,
      quantity: 1,
    };
    setCartItems([...cartItems, newItem]);

    // Decrease stock by 1
    updateProductStock(product.id, -1);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    const itemToRemove = cartItems.find((item) => item.id === productId);
    if (itemToRemove) {
      setCartItems(cartItems.filter((item) => item.id !== productId));

      // Increase stock by the quantity that was in cart
      updateProductStock(productId, itemToRemove.quantity);
    }
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
    const currentItem = cartItems.find((item) => item.id === productId);
    if (!currentItem || newQuantity < 1) return;

    const quantityDifference = newQuantity - currentItem.quantity;
    const product = allProducts.find((p) => p.id === productId);

    // Check if we have enough stock for the increase
    if (quantityDifference > 0 && product.stock < quantityDifference) {
      return; // Not enough stock
    }

    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );

    // Update stock (negative difference means we're taking more stock)
    updateProductStock(productId, -quantityDifference);
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  return {
    isInCart,
    getQuantityInCart,
    toggleCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  };
};
