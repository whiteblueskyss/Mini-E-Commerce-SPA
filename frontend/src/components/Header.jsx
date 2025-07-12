import { CartIcon, HomeIcon } from "../assets/Svgs";

const Header = ({ cartItemCount = 0 }) => {
  return (
    <header className="bg-slate-900 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              Mini E-Commerce SPA
            </h1>
          </div>
          <nav className="flex items-center space-x-6">
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
            >
              <HomeIcon className="w-5 h-5" />
              <span className="hidden sm:inline">Home</span>
            </a>
            <button className="relative text-slate-300 hover:text-white transition-colors duration-200 flex items-center space-x-2">
              <CartIcon className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  {cartItemCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
