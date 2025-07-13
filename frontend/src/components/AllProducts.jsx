import products from "../utility/products";
import ProductCard from "./ProductCard";

export default function AllProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">All Products</h2>
        <p className="text-gray-600">
          Discover our amazing collection of products
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
