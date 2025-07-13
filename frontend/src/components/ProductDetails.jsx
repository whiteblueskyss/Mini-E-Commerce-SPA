import { useNavigate, useParams } from "react-router-dom";
import RatingStars from "../utility/RatingStars";
import { BackIcon } from "../assets/Svgs";
import { ProductContext, CartContext } from "../context/index";
import { useContext } from "react";

export default function ProductDetails() {
  const { allProducts } = useContext(ProductContext);

  const { id } = useParams();
  const navigate = useNavigate();

  // Get the specific product by ID from URL params
  const product = allProducts.find((p) => p.id === parseInt(id));

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
          {/* Product Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-4">
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
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">
              ৳{product.price}
            </span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Description
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Product Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
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

          {/* Add to Cart Button */}
          <button className="w-full bg-slate-800 text-white py-4 px-6 rounded-lg hover:bg-slate-900 transition-colors duration-200 font-semibold text-lg disabled:bg-gray-400 disabled:cursor-not-allowed">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
