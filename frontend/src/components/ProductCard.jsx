import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext, ProductContext } from "../context/index";
import RatingStars from "../utility/RatingStars";

function ProductCard() {
  const { allProducts } = useContext(ProductContext);
  // const { addToCart } = useContext(CartContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
      {allProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
          style={{ width: "200px" }}
        >
          <Link to={`/product/${product.id}`}>
            {/* Product Image */}
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Details */}
            <div className="p-3">
              {/* Product Title */}
              <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                {product.title}
              </h3>

              {/* Rating and Stock - same line */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <RatingStars rating={product.rating} />
                  <span className="text-xs text-gray-500 ml-1">
                    {product.rating}/5
                  </span>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  ({product.stock} pcs left)
                </span>
              </div>

              {/* Price */}
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
              className="w-full bg-slate-800 text-white py-2 px-3 rounded-md hover:bg-slate-900 transition-colors duration-200 font-medium text-sm"
              onClick={(event) => {
                event.preventDefault();
                // Add to cart functionality can be added here
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
