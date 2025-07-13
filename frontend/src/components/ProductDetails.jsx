import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackIcon } from "../assets/Svgs";
import { CartContext, ProductContext } from "../context/index";
import RatingStars from "../utility/RatingStars";

export default function ProductDetails() {
  const { allProducts } = useContext(ProductContext);
  const { cartItems, setCartItems } = useContext(CartContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const product = allProducts.find((p) => p.id === parseInt(id));

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const handleAddToCart = (product) => {
    const newItem = {
      id: product.id,
      name: product.title,
      image: product.image,
      price: product.price,
      quantity: 1,
    };
    setCartItems([...cartItems, newItem]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const getQuantityInCart = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const handleToggleCart = (product) => {
    if (isInCart(product.id)) {
      handleRemoveFromCart(product.id);
    } else {
      handleAddToCart(product);
    }
  };

  if (!product) {
    return (
      <div className="text-center text-red-500 p-5 text-3xl">
        Product not found
      </div>
    );
  }

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
      >
        <BackIcon />
        Back to Products
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-start">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center space-x-1">
              <RatingStars rating={product.rating} />
            </div>
            <span className="text-lg text-gray-600 ml-3">
              {product.rating}/5
            </span>
            <span className="text-gray-500 ml-2">
              ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mb-3">
            <span className="text-2xl font-bold text-gray-900">
              ৳{product.price}
            </span>
          </div>

          {/* Description */}
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Description
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Product Details */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
              Product Details
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Brand:</span>
                <span className="font-medium">{product.brand}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span className="font-medium">{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Stock:</span>
                <span
                  className={`font-medium ${
                    product.stock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.stock > 0
                    ? `${product.stock} pieces available`
                    : "Out of stock"}
                </span>
              </div>
            </div>
          </div>

          {/* Cart Status Indicator */}
          {isInCart(product.id) && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-green-700 font-medium">
                  In Cart - Quantity: {getQuantityInCart(product.id)}
                </span>
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            className={`w-full py-4 px-6 rounded-lg transition-colors duration-200 font-semibold text-lg disabled:bg-gray-400 disabled:cursor-not-allowed ${
              isInCart(product.id)
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-slate-800 text-white hover:bg-slate-900"
            }`}
            onClick={() => handleToggleCart(product)}
            disabled={product.stock === 0}
          >
            {product.stock === 0
              ? "Out of Stock"
              : isInCart(product.id)
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
