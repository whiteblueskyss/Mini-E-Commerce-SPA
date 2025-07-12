import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <h1 className="bg-amber-400 text-2xl p-4 m-4 rounded-2xl">
          E-Commerce Store
        </h1>
      </main>

      <ProductCard />
    </div>
  );
}

export default App;
