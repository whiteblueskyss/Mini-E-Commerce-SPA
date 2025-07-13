import { StarIcon } from "../assets/Svgs";

function ProductCard({ product }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={i} className="w-3 h-3 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <StarIcon className="w-3 h-3 text-gray-300" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <StarIcon className="w-3 h-3 text-yellow-400" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <StarIcon key={`empty-${i}`} className="w-3 h-3 text-gray-300" />
      );
    }
    return stars;
  };

  return (
    <div
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
      style={{ width: "200px" }}
    >
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
            {renderStars(product.rating)}
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

        {/* Add to Cart Button */}
        <button className="w-full bg-slate-800 text-white py-2 px-3 rounded-md hover:bg-slate-900 transition-colors duration-200 font-medium text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
