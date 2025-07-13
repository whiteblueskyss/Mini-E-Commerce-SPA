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

      <ProductCard />
    </div>
  );
}
