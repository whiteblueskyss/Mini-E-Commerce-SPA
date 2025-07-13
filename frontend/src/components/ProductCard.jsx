import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/index";
import { useCartActions } from "../hooks/useCartActions";
import RatingStars from "../utility/RatingStars";

function ProductCard() {
  const { allProducts } = useContext(ProductContext);
  const { isInCart, toggleCart } = useCartActions();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
      {allProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-sm hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          style={{ width: "200px" }}
        >
          <Link to={`/product/${product.id}`}>
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Details */}
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                {product.title}
              </h3>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <RatingStars rating={product.rating} />
                  <span className="text-xs text-gray-500 ml-1">
                    {product.rating}/5
                  </span>
                </div>
                <span
                  className={`text-xs whitespace-nowrap ${
                    product.stock === 0 ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  {product.stock === 0
                    ? "Out of stock"
                    : `(${product.stock} pcs left)`}
                </span>
              </div>

              <div className="mb-3">
                <span className="text-lg font-bold text-gray-900">
                  ৳{product.price}
                </span>
              </div>
            </div>
          </Link>

          {/* Add to Cart Button - Outside Link to prevent nested clickable elements */}
          <div className="p-3 pt-0">
            <button
              className={`w-full py-2 px-3 rounded-md transition-colors duration-200 font-medium text-sm ${
                isInCart(product.id)
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : product.stock === 0
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                  : "bg-blue-700 text-white hover:bg-blue-500"
              }`}
              onClick={(event) => {
                event.preventDefault();
                toggleCart(product);
              }}
              disabled={!isInCart(product.id) && product.stock === 0}
            >
              {isInCart(product.id)
                ? "Remove from Cart"
                : product.stock === 0
                ? "Out of Stock"
                : "Add to Cart"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
